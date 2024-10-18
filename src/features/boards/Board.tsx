import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteBoard } from './boardsSlice';
import { BoardType } from './boardsSlice';
import { boardItem, deleteButton } from './Board.css.ts';
import classNames from 'classnames';
import { link, activeLink } from './Board.css.ts';

export const Board: React.FC<BoardProps> = ({ board }) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteBoard({ boardId: board.id }));
    };

    return (
        <div className={boardItem}>
            <NavLink
                key={board.id}
                to={`/board/${board.id}`}
                className={({ isActive }) =>
                    classNames(link, { [activeLink]: isActive })
                }
            >
                <span>{board.title}</span>
            </NavLink>
            <button className={deleteButton} onClick={handleDelete}>
                x
            </button>
        </div>
    );
};

interface BoardProps {
    board: BoardType;
}
