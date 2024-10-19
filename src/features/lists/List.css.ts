import { style } from '@vanilla-extract/css';

export const listContainer = style({
    width: 252,
    minWidth: 252,
    height: 'fit-content',
    maxHeight: 850,
    overflowY: 'auto',
    overflowX: 'hidden',
    padding: '6px 10px 12px 10px',
    backgroundColor: '#f1f2f4',
    borderRadius: 12,
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    position: 'relative',
});

export const listHeader = style({
    fontSize: 14,
    fontWeight: 500,
    padding: '6px 8px 6px 12px',
    margin: 0,
    border: 'none',
    background: 'none',
    ':focus': {
        width: '80%',
        height: 20,
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: '6px 12px',
        border: '1px solid #f1f2f4',
    },
});

export const listWrapper = style({
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    minHeight: 3,
});

export const addTaskButton = style({
    width: 252,
    marginTop: 12,
    borderRadius: 8,
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

export const deleteButton = style({
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    backgroundImage: 'url(../../assets/close.svg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: 24,
    height: 24,
    position: 'absolute',
    right: 8,
    ':hover': {
        backgroundColor: '#091e4220',
    },
});
