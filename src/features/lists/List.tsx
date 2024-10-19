import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { addTask, deleteTask } from '../tasks/tasksSlice';
import { Task } from '../tasks/Task';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import {
    listContainer,
    listHeader,
    listWrapper,
    deleteButton,
    addTaskButton,
} from './List.css';
import { addLog } from '../activityLog/activityLogSlice';
import { updateListTitle, deleteList } from './listsSlice';
import { AddItemForm } from '../../components/AddItemForm/AddItemForm';
import { v4 as uuidv4 } from 'uuid';

export const List: React.FC<ListProps> = ({ listId }) => {
    const list = useSelector((state: RootState) =>
        state.lists.lists.find((list) => list.id === listId),
    );
    const tasks = useSelector((state: RootState) =>
        state.tasks.tasks.filter((task) => task.listId === listId),
    );

    const [newTitle, setNewTitle] = useState(list?.title || '');
    const [isAdding, setIsAdding] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        if (list) {
            setNewTitle(list.title);
        }
    }, [list]);

    if (!list) {
        return null;
    }

    const handleAddTask = (title: string) => {
        const newTask = {
            id: uuidv4(),
            title,
            description: '',
            listId: listId,
        };
        dispatch(addTask({ task: newTask }));
        dispatch(
            addLog({
                id: uuidv4(),
                timestamp: new Date().toISOString(),
                taskId: newTask.id,
                listId: newTask.listId,
                boardId: list.boardId,
                leftSide: 'added ',
                link: `${newTask.title}`,
                rightSide: ` to ${list.title}`,
            }),
        );
    };

    const handleRemoveTask = (taskId: string) => {
        dispatch(
            addLog({
                id: uuidv4(),
                timestamp: new Date().toISOString(),
                taskId: '',
                listId: listId,
                boardId: list.boardId,
                leftSide: `deleted card ${taskId} from ${list.title}`,
                link: ``,
                rightSide: ``,
            }),
        );
        dispatch(deleteTask({ taskId }));
    };

    const handleDeleteList = () => {
        dispatch(
            addLog({
                id: uuidv4(),
                timestamp: new Date().toISOString(),
                taskId: '',
                listId: listId,
                boardId: list.boardId,
                leftSide: `removed list ${listId} from this board`,
                link: ``,
                rightSide: ``,
            }),
        );
        dispatch(deleteList({ listId }));
    };

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewTitle(e.target.value);
    };

    const handleBlur = () => {
        if (newTitle !== list?.title && list) {
            dispatch(updateListTitle({ listId: list.id, newTitle }));
        }
    };

    return (
        <div className={listContainer}>
            <input
                className={listHeader}
                type="text"
                value={newTitle}
                onChange={handleTitleChange}
                onBlur={handleBlur}
            />
            <button
                className={deleteButton}
                onClick={handleDeleteList}
                aria-label="Delete list"
            />

            <Droppable droppableId={listId}>
                {(provided) => (
                    <div
                        className={listWrapper}
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >
                        {tasks.map((task, index) => (
                            <Draggable
                                key={task.id}
                                draggableId={task.id}
                                index={index}
                            >
                                {(provided) => (
                                    <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                    >
                                        <Task
                                            task={task}
                                            onRemoveTask={handleRemoveTask}
                                        />
                                    </div>
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>

            <AddItemForm
                placeholder="Enter title..."
                buttonText="Add a card"
                onAddItem={handleAddTask}
                isAdding={isAdding}
                setIsAdding={setIsAdding}
                buttonStyle={addTaskButton}
            />
        </div>
    );
};

interface ListProps {
    listId: string;
}
