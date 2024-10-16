import { style } from '@vanilla-extract/css';

export const header = style({
    color: '#172b4d',
    fontSize: 20,
});

export const list = style({
    listStyle: 'none',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    padding: 0,
    columnGap: 20,
    rowGap: 20,
    position: 'relative',
});

export const item = style({
    width: 300,
    height: 100,
    background: '#206abb',
    borderRadius: 3,
    display: 'flex',

    ':hover': {
        backgroundColor: '#2048bb',
        cursor: 'pointer',
    },
});

export const link = style({
    fontSize: 16,
    color: '#fff',
    fontWeight: 500,
    marginLeft: 10,
    marginTop: 5,
    textDecoration: 'none',
});

export const boardsContainer = style({
    padding: '32px 100px',
});

export const create = style({
    width: 300,
    height: 100,
    background: '#091e420f',
    border: 'none',
    fontSize: 14,
    color: '#172b4d',
    borderRadius: 3,

    ':hover': {
        backgroundColor: '#091e4220',
        cursor: 'pointer',
    },
});
