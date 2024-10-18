import { style } from '@vanilla-extract/css';

export const boardItem = style({
    position: 'relative',
});

export const deleteButton = style({
    background: 'none',
    border: 'none',
    position: 'absolute',
    right: 12,
    top: 5,
    cursor: 'pointer',
    fontSize: 18,
    fontFamily: "Consolas, 'Courier New', monospace",
    textTransform: 'lowercase',
    ':hover': {
        backgroundColor: '#091e4220',
        cursor: 'pointer',
    },
});

export const link = style({
    width: '244',
    display: 'block',
    padding: '8px 16px',
    textDecoration: 'none',
    color: '#44546f',

    ':hover': {
        backgroundColor: '#091e420f',
        cursor: 'pointer',
    },
});

export const activeLink = style({
    background: '#00000029',
});
