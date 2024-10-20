import { globalStyle, style } from '@vanilla-extract/css';

globalStyle('body', {
    margin: 0,
    padding: 0,
    fontFamily: "'Segoe UI', sans-serif",
    color: '#44546f',
});

export const main = style({
    display: 'flex',
});
