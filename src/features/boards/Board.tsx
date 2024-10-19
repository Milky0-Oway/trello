import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteBoard } from './boardsSlice';
import { BoardType } from './boardsSlice';
import { boardItem, deleteButton } from './Board.css.ts';
import classNames from 'classnames';
import { link, activeLink, title } from './Board.css.ts';

export const Board: React.FC<BoardProps> = ({ board }) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteBoard({ boardId: board.id }));
    };

    return (
        <div className={boardItem}>
            <NavLink
                to={`/board/${board.id}`}
                className={({ isActive }) =>
                    classNames(link, { [activeLink]: isActive })
                }
            >
                <p className={title}>{board.title}</p>
            </NavLink>
            <button
                className={deleteButton}
                onClick={handleDelete}
                aria-label="Delete board"
            />
        </div>
    );
};

interface BoardProps {
    board: BoardType;
}
