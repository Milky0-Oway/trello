import { style } from '@vanilla-extract/css';

export const overlay = style({
    backgroundColor: '#00000051',
    position: 'fixed',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    zIndex: 4,
});

export const modal = style({
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 5,
    width: 300,
    height: 'fit-content',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    position: 'fixed',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
});

export const close = style({
    background: 'none',
    border: 'none',
    zIndex: 5,
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundImage: 'url(../../assets/close.svg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: 24,
    height: 24,
    transform: 'translateY(25%)',
    ':hover': {
        backgroundColor: '#091e4220',
        cursor: 'pointer',
    },
});
