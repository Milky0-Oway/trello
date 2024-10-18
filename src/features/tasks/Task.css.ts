import { style } from '@vanilla-extract/css';

export const taskItem = style({
    padding: '12px 4px 12px 8px',
    width: 252,
    height: 32,
    backgroundColor: '#fff',
    borderRadius: 5,
    boxShadow: '0 0 2px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxSizing: 'border-box',
    ':hover': {
        border: '2px solid #0c66e4',
        padding: '10px 2px 10px 6px',
    },
});

export const title = style({
    width: 232,
    height: 20,
    fontSize: 14,
});

export const remove = style({
    background: 'none',
    border: 'none',
    fontSize: 20,
    cursor: 'pointer',
    ':hover': {
        backgroundColor: '#091e4220',
    },
});
