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
    width: 290,
    height: 95,
    display: 'block',
    fontSize: 16,
    color: '#fff',
    fontWeight: 500,
    paddingLeft: 10,
    paddingTop: 5,
    textDecoration: 'none',
});

export const boardsContainer = style({
    padding: '32px 100px',
    paddingLeft: 360,
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
