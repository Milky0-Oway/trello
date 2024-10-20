import { style } from '@vanilla-extract/css';

export const activity = style({
    margin: '0 0 0 40px',
    padding: '8px 0',
    position: 'relative',
    ':before': {
        content: '""',
        backgroundImage: 'url(../../assets/user.svg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: 32,
        height: 32,
        position: 'absolute',
        left: -40,
        top: '50%',
        transform: 'translateY(-50%)',
    },
});

export const time = style({
    fontSize: 12,
    margin: 0,
    color: '#44546f',
});

export const button = style({
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    color: '#0c66e4',
    padding: 0,
    margin: 0,
    fontSize: 15,
    ':hover': {
        textDecoration: 'underline',
    },
});

export const link = style({
    textDecoration: 'none',
    cursor: 'pointer',
    color: '#0c66e4',
    padding: 0,
    margin: 0,
    fontSize: 15,
    ':hover': {
        textDecoration: 'underline',
    },
});
