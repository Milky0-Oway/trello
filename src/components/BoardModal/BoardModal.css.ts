import { style } from '@vanilla-extract/css';

export const header = style({
    textAlign: 'center',
    fontSize: 14,
    marginTop: 4,
});

export const label = style({
    fontSize: 12,
    fontWeight: 600,
});

export const input = style({
    padding: '8px 12px',
    marginTop: 2,
});

export const form = style({
    display: 'flex',
    flexDirection: 'column',
});

export const button = style({
    padding: '6px 12px',
    marginTop: 16,
    fontSize: 14,
    fontWeight: 600,
    backgroundColor: '#0c66e4',
    border: 'none',
    color: '#fff',
    borderRadius: 5,
    cursor: 'pointer',

    ':hover': {
        backgroundColor: '#0950b3',
    },
});

export const error = style({
    color: '#172b4d',
    fontSize: 14,
    marginTop: 4,
});
