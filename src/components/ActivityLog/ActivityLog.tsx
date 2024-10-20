import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { useParams } from 'react-router-dom';
import { activityList, activityLog, header } from './ActivityLog.css';
import { TaskModal } from '../TaskModal/TaskModal';
import { Activity } from '../Activity/Activity';

export const ActivityLog: React.FC = () => {
    const { boardId } = useParams<{ boardId: string }>();
    const logs = useSelector(
        (state: RootState) => state.activityLog.logs,
    ).filter((log) => log.boardId === boardId);
    const [currentTime, setCurrentTime] = useState(new Date());

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
            setCurrentTime(new Date());
        }, 60000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className={activityLog}>
            <h3 className={header}>Activity</h3>
            <ul className={activityList}>
                {logs.map((log) => (
                    <Activity
                        log={log}
                        currentTime={currentTime}
                        handleOpenModal={handleOpenModal}
                    />
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
