import { style } from '@vanilla-extract/css';

export const addingForm = style({
    width: 256,
    borderRadius: 12,
    backgroundColor: '#f1f2f4',
    height: 'fit-content',
    padding: 8,
});

export const addingInput = style({
    width: 210,
    height: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: '6px 12px',
    border: '1px solid #f1f2f4',
    marginBottom: 6,
});

export const addingButton = style({
    width: 'fit-content',
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
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    backgroundImage: 'url(../../assets/close.svg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: 24,
    height: 24,
    marginLeft: 5,
    transform: 'translateY(25%)',
    ':hover': {
        backgroundColor: '#091e4220',
        cursor: 'pointer',
    },
});
