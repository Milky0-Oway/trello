import { style } from '@vanilla-extract/css';

export const form = style({
    cursor: 'default',
    display: 'flex',
    flexDirection: 'column',
});

export const header = style({
    textAlign: 'center',
    fontSize: 14,
    marginTop: 4,
});

export const label = style({});

export const input = style({
    marginTop: 2,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: '6px 12px',
    border: '1px solid #f1f2f4',
    marginBottom: 6,
});

export const textarea = style({
    resize: 'none',
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: '6px 12px',
    border: '1px solid #f1f2f4',
    marginBottom: 6,
});

export const button = style({
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
