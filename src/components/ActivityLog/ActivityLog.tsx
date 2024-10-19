import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { Link, useParams } from 'react-router-dom';
import {
    activity,
    activityList,
    activityLog,
    button,
    header,
    link,
    time,
} from './ActivityLog.css';
import { TaskModal } from '../TaskModal/TaskModal';
import { formatActivityTime } from '../../utils/formatTime';

export const ActivityLog: React.FC = () => {
    const { boardId } = useParams<{ boardId: string }>();
    const logs = useSelector(
        (state: RootState) => state.activityLog.logs,
    ).filter((log) => log.boardId === boardId);
    const [, setTime] = useState(new Date());

    const [selectedTaskId, setSelectedTaskId] = useState<string>('');
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleOpenModal = (taskId: string) => {
        setSelectedTaskId(taskId);
        setIsModalVisible(true);
    };

    const handleCloseModal = () => {
        setSelectedTaskId('');
        setIsModalVisible(false);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 60000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className={activityLog}>
            <h3 className={header}>Activity</h3>
            <ul className={activityList}>
                {logs.map((log) => (
                    <li key={log.id} className={activity}>
                        <span>
                            <b>You</b> {log.leftSide}
                        </span>
                        {log.taskId ? (
                            <button
                                className={button}
                                onClick={() =>
                                    handleOpenModal(log.taskId ?? '')
                                }
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
                            {formatActivityTime(new Date(log.timestamp))}
                        </p>
                    </li>
                ))}
            </ul>

            {selectedTaskId && (
                <TaskModal
                    taskId={selectedTaskId}
                    isVisible={isModalVisible}
                    closeModal={handleCloseModal}
                />
            )}
        </div>
    );
};
