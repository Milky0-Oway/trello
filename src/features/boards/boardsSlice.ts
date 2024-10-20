import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: BoardsState = {
    boards: [],
};

const boardsSlice = createSlice({
    name: 'boards',
    initialState,
    reducers: {
        addBoard(state, action: PayloadAction<{ board: BoardType }>) {
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
        addListToBoard(
            state,
            action: PayloadAction<{ boardId: string; listId: string }>,
        ) {
            const { boardId, listId } = action.payload;
            const board = state.boards.find((board) => board.id === boardId);
            if (board) {
                board.lists.push(listId);
            }
        },
    },
});

export const { addBoard, editBoard, deleteBoard, addListToBoard } =
    boardsSlice.actions;
export const boardsReducer = boardsSlice.reducer;

export interface BoardType {
    id: string;
    title: string;
    lists: string[];
}

interface BoardsState {
    boards: BoardType[];
}
