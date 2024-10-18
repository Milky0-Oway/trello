import { style } from '@vanilla-extract/css';

export const header = style({
    height: 32,
    padding: '12px 10px 12px 16px',
    background: '#0000003d',
    display: 'flex',
    alignItems: 'center',
});

export const title = style({
    color: '#fff',
    fontSize: 24,
    margin: 0,
    padding: '0 10px',
});

export const boardPage = style({
    width: '100%',
    minWidth: 'fit-content',
    height: '100vh',
    backgroundColor: '#0c73e4',
    paddingLeft: 260,
});

export const lists = style({
    display: 'flex',
    gap: 10,
    marginTop: 12,
    marginLeft: 12,
});

export const notFound = style({
    paddingLeft: 270,
});

export const addListButton = style({
    width: 272,
    minWidth: 272,
    height: 44,
    color: '#fff',
    backgroundColor: '#ffffff3d',
    borderRadius: 5,
    cursor: 'pointer',
    fontSize: 14,
    fontWeight: 600,
    textAlign: 'left',
    padding: 12,
    border: 'none',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    ':hover': {
        backgroundColor: '#ffffff2d',
    },
});

export const addingForm = style({
    width: 256,
    height: 72,
    backgroundColor: '#f1f2f4',
    borderRadius: 5,
    padding: 8,
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
});

export const addingInput = style({
    width: 230,
    height: 20,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: '6px 12px',
    border: '1px solid #f1f2f4',
    marginBottom: 6,
});

export const addingButton = style({
    width: 80,
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
    height: 32,
    background: 'none',
    fontSize: 14,
    fontWeight: 600,
    border: 'none',
    cursor: 'pointer',
    ':hover': {
        backgroundColor: '#091e4220',
    },
});
