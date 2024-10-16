import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: ActivityLogState = {
    logs: [],
};

const activityLogSlice = createSlice({
    name: 'activityLog',
    initialState,
    reducers: {
        addLog(state, action: PayloadAction<ActivityLog>) {
            state.logs.push({
                action: action.payload.action,
                timestamp: new Date().toISOString(),
                boardId: action.payload.boardId,
                listId: action.payload.listId,
                taskId: action.payload.taskId,
            });
        },
    },
});

interface ActivityLog {
    action: string;
    timestamp: string;
    boardId?: string;
    listId?: string;
    taskId?: string;
}

interface ActivityLogState {
    logs: ActivityLog[];
}

export const { addLog } = activityLogSlice.actions;
export const activityLogReducer = activityLogSlice.reducer;
