import { style } from '@vanilla-extract/css';

export const modal = style({
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 5,
    width: 300,
    height: 'fit-content',
    zIndex: 4,
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    position: 'absolute',
    left: 300,
});

export const close = style({
    background: 'none',
    border: 'none',
    fontSize: 18,
    fontFamily: "Consolas, 'Courier New', monospace",
    cursor: 'pointer',
    textTransform: 'lowercase',
    zIndex: 5,
    position: 'absolute',
    top: 12,
    right: 12,
});
