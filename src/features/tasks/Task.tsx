import React, { useState } from 'react';
import { taskItem, remove, title, description, taskInfo } from './Task.css';
import { TaskModal } from '../../components/TaskModal/TaskModal';

export const Task: React.FC<TaskProps> = ({ task, onRemoveTask }) => {
    const [isEditModalVisible, setIsEditModalVisible] = useState(false);

    const handleOpenEditModal = () => {
        setIsEditModalVisible(true);
    };

    const handleCloseEditModal = () => {
        setIsEditModalVisible(false);
    };

    return (
        <>
            <TaskModal
                taskId={task.id}
                isVisible={isEditModalVisible}
                closeModal={handleCloseEditModal}
            />
            <div className={taskItem} onClick={handleOpenEditModal}>
                <div className={taskInfo}>
                    <span className={title}>{task.title}</span>
                    {task.description && (
                        <button
                            title="This card has a description."
                            className={description}
                        />
                    )}
                </div>
                <button
                    className={remove}
                    onClick={() => onRemoveTask(task.id)}
                    aria-label="Delete task"
                />
            </div>
        </>
    );
};

interface TaskProps {
    task: { id: string; title: string; listId: string; description: string };
    onRemoveTask: (taskId: string) => void;
}
