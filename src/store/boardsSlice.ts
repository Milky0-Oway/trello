import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: BoardsState = {
    boards: [],
};

const boardsSlice = createSlice({
    name: 'boards',
    initialState,
    reducers: {
        addBoard(state, action: PayloadAction<{ board: Board }>) {
            state.boards.push(action.payload.board);
        },
        editBoard(
            state,
            action: PayloadAction<{ boardId: string; title: string }>,
        ) {
            const board = state.boards.find(
                (board) => board.id === action.payload.boardId,
            );
            if (board) {
                board.title = action.payload.title;
            }
        },
        deleteBoard(state, action: PayloadAction<{ boardId: string }>) {
            state.boards = state.boards.filter(
                (board) => board.id !== action.payload.boardId,
            );
        },
    },
});

export const { addBoard, editBoard, deleteBoard } = boardsSlice.actions;
export const boardsReducer = boardsSlice.reducer;

interface Board {
    id: string;
    title: string;
    lists: string[];
}

interface BoardsState {
    boards: Board[];
}
