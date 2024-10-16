import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: ListsState = {
    lists: [],
};

const listsSlice = createSlice({
    name: 'lists',
    initialState,
    reducers: {
        addList(state, action: PayloadAction<{ list: List }>) {
            state.lists.push(action.payload.list);
        },
        deleteList(state, action: PayloadAction<{ listId: string }>) {
            state.lists = state.lists.filter(
                (list) => list.id !== action.payload.listId,
            );
        },
    },
});

export const { addList, deleteList } = listsSlice.actions;
export const listsReducer = listsSlice.reducer;

interface List {
    id: string;
    boardId: string;
    title: string;
    tasks: string[];
}

interface ListsState {
    lists: List[];
}
