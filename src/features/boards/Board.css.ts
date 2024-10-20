import { style } from '@vanilla-extract/css';

export const boardItem = style({
    position: 'relative',
});

export const title = style({
    overflowWrap: 'break-word',
    maxWidth: 200,
    width: 200,
    margin: 0,
});

export const deleteButton = style({
    background: 'none',
    border: 'none',
    position: 'absolute',
    right: 10,
    top: '50%',
    cursor: 'pointer',
    backgroundImage: 'url(../../assets/close.svg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: 24,
    height: 24,
    transform: 'translateY(-50%)',
    ':hover': {
        backgroundColor: '#091e4220',
        cursor: 'pointer',
    },
});

export const link = style({
    width: 230,
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
