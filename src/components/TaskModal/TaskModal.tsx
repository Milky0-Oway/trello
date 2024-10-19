import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editTask } from '../../features/tasks/tasksSlice';
import { Modal } from '../Modal/Modal';
import { form, label, input, textarea, button, header } from './TaskModal.css';
import { RootState } from '../../app/store';

export const TaskModal: React.FC<TaskModalProps> = ({
    taskId,
    isVisible,
    closeModal,
}) => {
    const task = useSelector((state: RootState) =>
        state.tasks.tasks.find((task) => task.id === taskId),
    );

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        if (task) {
            setTitle(task.title);
            setDescription(task.description);
        }
    }, [task]);

    const handleSave = () => {
        dispatch(editTask({ taskId, title, description }));
        closeModal();
    };

    const handleCancel = () => {
        if (task) {
            setTitle(task.title);
            setDescription(task.description);
        }
        closeModal();
    };

    const handleClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    if (!task) {
        return null;
    }

    return (
        <div onClick={handleClick}>
            <Modal isVisible={isVisible} closeModal={handleCancel}>
                <h2 className={header}>Edit a card</h2>
                <form className={form}>
                    <label className={label}>Title</label>
                    <input
                        className={input}
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Enter task title"
                        required
                    />
                    <label className={label}>Description</label>
                    <textarea
                        className={textarea}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Enter task description"
                    />
                    <button
                        className={button}
                        type="button"
                        onClick={handleSave}
                        aria-label="Save task"
                    >
                        Save
                    </button>
                </form>
            </Modal>
        </div>
    );
};

interface TaskModalProps {
    taskId: string;
    isVisible: boolean;
    closeModal: () => void;
}
