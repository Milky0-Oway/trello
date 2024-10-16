import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { BoardModal } from '../BoardModal/BoardModal.tsx';
import { create, sidebar, link, activeLink, title } from './Sidebar.css.ts'; // Подключаем классы из CSS
import classNames from 'classnames';

export const Sidebar: React.FC = () => {
    const boards = useSelector((state: RootState) => state.boards.boards);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const openModal = () => setIsModalVisible(true);
    const closeModal = () => setIsModalVisible(false);

    return (
        <div className={sidebar}>
            <NavLink
                to="/"
                className={({ isActive }) =>
                    classNames(link, { [activeLink]: isActive })
                }
            >
                Boards
            </NavLink>

            <div className="section">
                <h4 className={title}>Your boards</h4>
                <button className={create} onClick={openModal}>
                    +
                </button>
                <BoardModal
                    isVisible={isModalVisible}
                    closeModal={closeModal}
                />
                {boards.map((board) => (
                    <NavLink
                        key={board.id}
                        to={`/boards/${board.id}`}
                        className={({ isActive }) =>
                            classNames(link, { [activeLink]: isActive })
                        }
                    >
                        <span>{board.title}</span>
                    </NavLink>
                ))}
            </div>
        </div>
    );
};
