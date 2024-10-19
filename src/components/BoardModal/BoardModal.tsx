import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBoard } from '../../features/boards/boardsSlice';
import { header, label, input, form, button, error } from './BoardModal.css';
import { Modal } from '../Modal/Modal';
import { addLog } from '../../features/activityLog/activityLogSlice';
import { v4 as uuidv4 } from 'uuid';

export const BoardModal: React.FC<BoardModalProps> = ({
    isVisible,
    closeModal,
}) => {
    const [title, setTitle] = useState('');
    const dispatch = useDispatch();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value);
    };

    const handleCreateBoard = (e: React.FormEvent) => {
        e.preventDefault();
        if (title.trim() === '') return;
        const newBoard = {
            id: uuidv4(),
            title,
            lists: [],
        };
        dispatch(addBoard({ board: newBoard }));
        dispatch(
            addLog({
                id: uuidv4(),
                timestamp: new Date().toISOString(),
                taskId: '',
                listId: '',
                boardId: '',
                leftSide: 'created ',
                link: ``,
                rightSide: `this board`,
            }),
        );

        dispatch(
            addLog({
                id: uuidv4(),
                timestamp: new Date().toISOString(),
                taskId: '',
                listId: '',
                boardId: newBoard.id,
                leftSide: 'added this board to ',
                link: ``,
                rightSide: ``,
            }),
        );
        setTitle('');
        closeModal();
    };

    return (
        <Modal isVisible={isVisible} closeModal={closeModal}>
            <h2 className={header}>Create Board</h2>
            <form className={form}>
                <label className={label}>Board title</label>
                <input
                    className={input}
                    type="text"
                    onChange={handleChange}
                    value={title}
                    required
                />
                {title === '' && (
                    <p className={error}>Board title is required</p>
                )}
                <button
                    className={button}
                    onClick={handleCreateBoard}
                    aria-label="Create board"
                >
                    Create
                </button>
            </form>
        </Modal>
    );
};

interface BoardModalProps {
    isVisible: boolean;
    closeModal: () => void;
}
