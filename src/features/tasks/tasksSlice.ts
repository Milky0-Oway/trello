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
            const taskIndex = state.tasks.findIndex(
                (task) => task.id === action.payload.taskId,
            );
            if (taskIndex !== -1) {
                state.tasks[taskIndex] = {
                    ...state.tasks[taskIndex],
                    title: action.payload.title,
                    description: action.payload.description,
                };
            }
        },
        deleteTask(state, action: PayloadAction<{ taskId: string }>) {
            state.tasks = state.tasks.filter(
                (task) => task.id !== action.payload.taskId,
            );
        },
        updateTaskOrder(state, action) {
            const {
                sourceListId,
                destinationListId,
                sourceIndex,
                destinationIndex,
                isSameList,
            } = action.payload;

            if (isSameList) {
                const listTasks = state.tasks.filter(
                    (task) => task.listId === sourceListId,
                );
                const [movedTask] = listTasks.splice(sourceIndex, 1);
                listTasks.splice(destinationIndex, 0, movedTask);

                state.tasks = state.tasks
                    .filter((task) => task.listId !== sourceListId)
                    .concat(listTasks);
            } else {
                const sourceTasks = state.tasks.filter(
                    (task) => task.listId === sourceListId,
                );
                const destinationTasks = state.tasks.filter(
                    (task) => task.listId === destinationListId,
                );

                const [movedTask] = sourceTasks.splice(sourceIndex, 1);
                movedTask.listId = destinationListId;

                destinationTasks.splice(destinationIndex, 0, movedTask);

                state.tasks = state.tasks
                    .filter(
                        (task) =>
                            task.listId !== sourceListId &&
                            task.listId !== destinationListId,
                    )
                    .concat(sourceTasks)
                    .concat(destinationTasks);
            }
        },
    },
});

export const { addTask, editTask, deleteTask, updateTaskOrder } =
    tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;

export interface Task {
    id: string;
    listId: string;
    title: string;
    description: string;
}

interface TasksState {
    tasks: Task[];
}
