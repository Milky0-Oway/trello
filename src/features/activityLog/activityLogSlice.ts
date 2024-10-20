import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: ActivityLogState = {
    logs: [],
};

const activityLogSlice = createSlice({
    name: 'activityLog',
    initialState,
    reducers: {
        addLog(state, action: PayloadAction<ActivityLog>) {
            state.logs = [
                {
                    id: action.payload.id,
                    timestamp: action.payload.timestamp,
                    boardId: action.payload.boardId,
                    listId: action.payload.listId,
                    taskId: action.payload.taskId,
                    leftSide: action.payload.leftSide,
                    link: action.payload.link,
                    rightSide: action.payload.rightSide,
                },
                ...state.logs,
            ];
        },
    },
});

export interface ActivityLog {
    id: string;
    timestamp: string;
    boardId?: string;
    listId?: string;
    taskId?: string;
    leftSide: string;
    link: string;
    rightSide: string;
}

interface ActivityLogState {
    logs: ActivityLog[];
}

export const { addLog } = activityLogSlice.actions;
export const activityLogReducer = activityLogSlice.reducer;
