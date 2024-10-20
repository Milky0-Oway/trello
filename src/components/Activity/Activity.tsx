import React from 'react';
import { formatActivityTime } from '../../utils/formatTime';
import { ActivityLog } from '../../features/activityLog/activityLogSlice';
import { activity, button, link, time } from './Activity.css';
import { Link } from 'react-router-dom';

export const Activity: React.FC<ActivityProps> = ({
    log,
    currentTime,
    handleOpenModal,
}) => {
    return (
        <li key={log.id} className={activity}>
            <span>
                <b>You</b> {log.leftSide}
            </span>
            {log.taskId ? (
                <button
                    className={button}
                    onClick={() => handleOpenModal(log.taskId ?? '')}
                >
                    {log.link}
                </button>
            ) : (
                log.listId === '' &&
                log.boardId && (
                    <Link className={link} to={`/`}>
                        Your workplace
                    </Link>
                )
            )}
            <span>{log.rightSide}</span>
            <p className={time}>
                {formatActivityTime(new Date(log.timestamp), currentTime)}
            </p>
        </li>
    );
};

interface ActivityProps {
    log: ActivityLog;
    currentTime: Date;
    handleOpenModal: (taskId: string) => void;
}
