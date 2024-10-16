import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: TasksState = {
    tasks: [],
};

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask(state, action: PayloadAction<{ task: Task }>) {
            state.tasks.push(action.payload.task);
        },
        editTask(
            state,
            action: PayloadAction<{
                taskId: string;
                title: string;
                description: string;
            }>,
        ) {
            const task = state.tasks.find(
                (task) => task.id === action.payload.taskId,
            );
            if (task) {
                task.title = action.payload.title;
                task.description = action.payload.description;
            }
        },
        deleteTask(state, action: PayloadAction<{ taskId: string }>) {
            state.tasks = state.tasks.filter(
                (task) => task.id !== action.payload.taskId,
            );
        },
    },
});

export const { addTask, editTask, deleteTask } = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;

interface Task {
    id: string;
    listId: string;
    title: string;
    description: string;
}

interface TasksState {
    tasks: Task[];
}
