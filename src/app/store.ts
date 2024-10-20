import { configureStore } from '@reduxjs/toolkit';
import { boardsReducer } from '../features/boards/boardsSlice';
import { listsReducer } from '../features/lists/listsSlice';
import { tasksReducer } from '../features/tasks/tasksSlice';
import { activityLogReducer } from '../features/activityLog/activityLogSlice';

export const store = configureStore({
    reducer: {
        boards: boardsReducer,
        lists: listsReducer,
        tasks: tasksReducer,
        activityLog: activityLogReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
