import { style } from '@vanilla-extract/css';

export const activityLog = style({
    backgroundColor: '#fff',
    position: 'fixed',
    right: 0,
    top: 0,
    height: '100vh',
    maxHeight: '100vh',
    overflowY: 'auto',
    width: 340,
    minWidth: 340,
    zIndex: 2,
    padding: '12px 12px 8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
});

export const header = style({
    textAlign: 'center',
    margin: 0,
    fontSize: 18,
    fontWeight: 500,
});

export const activityList = style({
    listStyle: 'none',
    padding: 0,
});

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
