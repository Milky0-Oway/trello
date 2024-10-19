import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { List } from '../../features/lists/List';
import { ActivityLog } from '../../components/ActivityLog/ActivityLog';
import { BoardType, addListToBoard } from '../../features/boards/boardsSlice';
import { addList } from '../../features/lists/listsSlice';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { updateTaskOrder } from '../../features/tasks/tasksSlice';
import {
    boardPage,
    header,
    title,
    lists,
    notFound,
    addListButton,
} from './BoardPage.css';
import { addLog } from '../../features/activityLog/activityLogSlice';
import { editBoard } from '../../features/boards/boardsSlice';
import { AddItemForm } from '../../components/AddItemForm/AddItemForm';
import { v4 as uuidv4 } from 'uuid';

export const BoardPage: React.FC = () => {
    const { boardId } = useParams<{ boardId: string }>();
    const board = useSelector((state: RootState) =>
        state.boards.boards.find((board: BoardType) => board.id === boardId),
    );
    const listsArray = useSelector((state: RootState) => state.lists.lists);
    const tasks = useSelector((state: RootState) => state.tasks.tasks);
    const dispatch = useDispatch();

    const [isAdding, setIsAdding] = useState(false);
    const [newTitle, setNewTitle] = useState(board?.title || '');

    useEffect(() => {
        if (board) {
            setNewTitle(board.title);
        }
    }, [board]);

    if (!board) {
        return <p className={notFound}>Board not found</p>;
    }

    const handleAddList = (title: string) => {
        const newListId = uuidv4();
        const newList = {
            id: newListId,
            title,
            tasks: [],
            boardId: board.id,
        };
        dispatch(addList({ list: newList }));
        dispatch(addListToBoard({ boardId: board.id, listId: newListId }));

        dispatch(
            addLog({
                id: uuidv4(),
                timestamp: new Date().toISOString(),
                taskId: '',
                listId: newList.id,
                boardId: newList.boardId,
                leftSide: `added ${newList.title} to this board`,
                link: ``,
                rightSide: ``,
            }),
        );
    };

    const handleDragEnd = (result: DropResult) => {
        const { destination, source, draggableId } = result;

        if (!destination) return;

        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return;
        }

        dispatch(
            updateTaskOrder({
                sourceListId: source.droppableId,
                destinationListId: destination.droppableId,
                taskId: draggableId,
                sourceIndex: source.index,
                destinationIndex: destination.index,
                isSameList: source.droppableId === destination.droppableId,
            }),
        );

        const task = tasks.find((task) => task.id === draggableId);
        const sourceName = listsArray.find(
            (list) => list.id === source.droppableId,
        )?.title;
        const destinationName = listsArray.find(
            (list) => list.id === destination.droppableId,
        )?.title;

        if (task && source.droppableId !== destination.droppableId) {
            dispatch(
                addLog({
                    id: uuidv4(),
                    timestamp: new Date().toISOString(),
                    taskId: draggableId,
                    listId: '',
                    boardId: board.id,
                    leftSide: 'moved ',
                    link: `${task.title}`,
                    rightSide: ` from ${sourceName} to ${destinationName}`,
                }),
            );
        }
    };

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewTitle(e.target.value);
    };

    const handleBlur = () => {
        if (newTitle !== board?.title && board) {
            dispatch(editBoard({ boardId: board.id, title: newTitle }));
        }
    };

    return (
        <div className={boardPage}>
            <header className={header}>
                <input
                    className={title}
                    type="text"
                    value={newTitle}
                    onChange={handleTitleChange}
                    onBlur={handleBlur}
                />
                <ActivityLog />
            </header>
            <DragDropContext onDragEnd={handleDragEnd}>
                <div className={lists}>
                    {board.lists.map((listId) => (
                        <List key={listId} listId={listId} />
                    ))}

                    <AddItemForm
                        placeholder="Enter list name..."
                        buttonText="Add list"
                        onAddItem={handleAddList}
                        isAdding={isAdding}
                        setIsAdding={setIsAdding}
                        buttonStyle={addListButton}
                    />
                </div>
            </DragDropContext>
        </div>
    );
};
