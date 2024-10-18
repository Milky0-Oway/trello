import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { addTask, deleteTask } from '../tasks/tasksSlice';
import { Task } from '../tasks/Task';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import {
    listContainer,
    listHeader,
    addTaskButton,
    addingButton,
    cancelButton,
    addingInput,
    addingForm,
    listWrapper,
} from './List.css';

interface ListProps {
    listId: string;
}

export const List: React.FC<ListProps> = ({ listId }) => {
    const list = useSelector((state: RootState) =>
        state.lists.lists.find((l) => l.id === listId),
    );
    const tasks = useSelector((state: RootState) =>
        state.tasks.tasks.filter((task) => task.listId === listId),
    );

    const [newTaskTitle, setNewTaskTitle] = useState('');
    const [isAdding, setIsAdding] = useState(false);
    const dispatch = useDispatch();

    if (!list) {
        return <p>List not found</p>;
    }

    const handleAddTask = () => {
        if (newTaskTitle.trim() === '') return;
        const newTask = {
            id: Math.random().toString(36).substr(2, 9),
            title: newTaskTitle,
            description: '',
            listId: listId,
        };
        dispatch(addTask({ task: newTask }));
        setNewTaskTitle('');
    };

    const handleRemoveTask = (taskId: string) => {
        dispatch(deleteTask({ taskId }));
    };

    return (
        <div className={listContainer}>
            <h2 className={listHeader}>{list.title}</h2>

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

            {!isAdding ? (
                <button
                    className={addTaskButton}
                    onClick={() => setIsAdding(true)}
                >
                    + Add Task
                </button>
            ) : (
                <div className={addingForm}>
                    <input
                        className={addingInput}
                        type="text"
                        placeholder="Enter a title"
                        value={newTaskTitle}
                        onChange={(e) => setNewTaskTitle(e.target.value)}
                    />
                    <button className={addingButton} onClick={handleAddTask}>
                        Add card
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
    );
};
