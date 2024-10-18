import React from 'react';
import { taskItem, remove, title } from './Task.css';

interface TaskProps {
    task: { id: string; title: string; listId: string };
    onRemoveTask: (taskId: string) => void;
}

export const Task: React.FC<TaskProps> = ({ task, onRemoveTask }) => {
    return (
        <div className={taskItem}>
            <span className={title}>{task.title}</span>
            <button className={remove} onClick={() => onRemoveTask(task.id)}>
                x
            </button>
        </div>
    );
};
