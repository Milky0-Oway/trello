import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { Link } from 'react-router-dom';
import { BoardModal } from '../../components/BoardModal/BoardModal';
import {
    header,
    item,
    list,
    link,
    boardsContainer,
    create,
} from './HomePage.css';

export const HomePage: React.FC = () => {
    const boards = useSelector((state: RootState) => state.boards.boards);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const openModal = () => setIsModalVisible(true);
    const closeModal = () => setIsModalVisible(false);

    return (
        <div className={boardsContainer}>
            <h1 className={header}>Boards</h1>
            <ul className={list}>
                <button className={create} onClick={openModal}>
                    Create Board
                </button>
                <BoardModal
                    isVisible={isModalVisible}
                    closeModal={closeModal}
                />
                {boards.map((board) => (
                    <li className={item} key={board.id}>
                        <Link className={link} to={`/board/${board.id}`}>
                            {board.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};
