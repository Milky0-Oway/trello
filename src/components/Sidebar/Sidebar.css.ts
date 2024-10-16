import { style } from '@vanilla-extract/css';

export const sidebar = style({
    width: 260,
    height: '100vh',
    position: 'relative',
    borderRight: '1px solid #44546f',
});

export const create = style({
    background: 'none',
    border: 'none',
    fontSize: 14,
    color: '#172b4d',
    borderRadius: 3,
    cursor: 'pointer',
    position: 'absolute',
    top: 50,
    right: 12,

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

export const title = style({
    padding: '12px 16px',
    margin: 0,
});

export const activeLink = style({
    background: '#00000029',
});
