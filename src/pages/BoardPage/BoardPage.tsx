import React, { useState } from 'react';
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
    addListButton,
    lists,
    addingForm,
    addingInput,
    addingButton,
    cancelButton,
    notFound,
} from './BoardPage.css';

export const BoardPage: React.FC = () => {
    const { boardId } = useParams<{ boardId: string }>();
    const board = useSelector((state: RootState) =>
        state.boards.boards.find((board: BoardType) => board.id === boardId),
    );
    const dispatch = useDispatch();

    const [newListTitle, setNewListTitle] = useState('');
    const [isAdding, setIsAdding] = useState(false);

    if (!board) {
        return <p className={notFound}>Board not found</p>;
    }

    const handleAddList = () => {
        if (newListTitle.trim() === '') return;
        const newListId = Math.random().toString(36).substr(2, 9);
        const newList = {
            id: newListId,
            title: newListTitle,
            tasks: [],
            boardId: board.id,
        };
        dispatch(addList({ list: newList }));
        dispatch(addListToBoard({ boardId: board.id, listId: newListId }));
        setNewListTitle('');
        setIsAdding(false);
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
    };

    return (
        <div className={boardPage}>
            <header className={header}>
                <h1 className={title}>{board.title}</h1>
                <ActivityLog />
            </header>
            <DragDropContext onDragEnd={handleDragEnd}>
                <div className={lists}>
                    {board.lists.map((listId) => (
                        <List key={listId} listId={listId} />
                    ))}

                    {!isAdding ? (
                        <button
                            className={addListButton}
                            onClick={() => setIsAdding(true)}
                        >
                            + Add another list
                        </button>
                    ) : (
                        <div className={addingForm}>
                            <input
                                className={addingInput}
                                type="text"
                                value={newListTitle}
                                onChange={(e) =>
                                    setNewListTitle(e.target.value)
                                }
                                placeholder="Enter list name..."
                            />
                            <button
                                className={addingButton}
                                onClick={handleAddList}
                            >
                                Add List
                            </button>
                            <button
                                className={cancelButton}
                                onClick={() => setIsAdding(false)}
                            >
                                X
                            </button>
                        </div>
                    )}
                </div>
            </DragDropContext>
        </div>
    );
};
