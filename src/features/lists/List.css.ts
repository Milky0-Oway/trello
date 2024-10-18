import { style } from '@vanilla-extract/css';

export const listContainer = style({
    width: 252,
    minWidth: 252,
    height: 'fit-content',
    padding: '6px 10px 12px 10px',
    backgroundColor: '#f1f2f4',
    borderRadius: 5,
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
});

export const listHeader = style({
    fontSize: 14,
    fontWeight: 500,
    padding: '6px 8px 6px 12px',
    margin: 0,
});

export const listWrapper = style({
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
});

export const addTaskButton = style({
    width: 252,
    marginTop: 12,
    borderRadius: 5,
    fontSize: 14,
    background: 'none',
    border: 'none',
    textAlign: 'left',
    padding: '6px 12px 6px 8px',
    color: '#44546f',
    fontWeight: 600,
    cursor: 'pointer',
    ':hover': {
        backgroundColor: '#091e4220',
    },
});

export const addingForm = style({
    width: 256,
    height: 72,
    borderRadius: 5,
    marginTop: 12,
});

export const addingInput = style({
    width: 228,
    height: 20,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: '6px 12px',
    border: '1px solid #f1f2f4',
    marginBottom: 6,
});

export const addingButton = style({
    width: 100,
    height: 32,
    backgroundColor: '#0c66e4',
    borderRadius: 5,
    padding: '6px 12px',
    fontSize: 14,
    fontWeight: 600,
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    ':hover': {
        backgroundColor: '#2048bb',
    },
});

export const cancelButton = style({
    height: 32,
    background: 'none',
    fontSize: 14,
    fontWeight: 600,
    border: 'none',
    cursor: 'pointer',
    ':hover': {
        backgroundColor: '#091e4220',
    },
});
