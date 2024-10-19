import { style } from '@vanilla-extract/css';

export const taskItem = style({
    padding: '6px 4px 6px 8px',
    width: '100%',
    height: 'fit-content',
    backgroundColor: '#fff',
    borderRadius: 8,
    boxShadow: '0 0 2px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxSizing: 'border-box',
    position: 'relative',
    cursor: 'pointer',
    ':hover': {
        border: '2px solid #0c66e4',
        padding: '4px 2px 4px 6px',
    },
});

export const title = style({
    width: 210,
    maxWidth: 210,
    fontSize: 14,
    overflowWrap: 'break-word',
});

export const taskInfo = style({
    display: 'flex',
    flexDirection: 'column',
});

export const remove = style({
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    backgroundImage: 'url(../../assets/close.svg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: 20,
    height: 20,
    ':hover': {
        backgroundColor: '#091e4220',
    },
});

export const description = style({
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    backgroundImage: 'url(../../assets/description.svg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: 20,
    height: 20,
});
