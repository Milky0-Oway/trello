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
    fontWeight: 600,
    border: 'none',
    background: 'none',
    width: '100%',
    ':focus': {
        width: '100%',
        height: 20,
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: '6px 12px',
        border: '1px solid #f1f2f4',
        color: '#44546f',
    },
});

export const boardPage = style({
    width: '100%',
    minWidth: 'fit-content',
    height: '100vh',
    backgroundColor: '#0c73e4',
    paddingLeft: 260,
    paddingRight: 360,
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
    borderRadius: 12,
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
