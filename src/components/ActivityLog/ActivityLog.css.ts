import { style } from '@vanilla-extract/css';

export const activityLog = style({
    backgroundColor: '#fff',
    position: 'fixed',
    right: 0,
    top: 0,
    height: '100vh',
    maxHeight: '100vh',
    overflowY: 'auto',
    width: 340,
    minWidth: 340,
    zIndex: 2,
    padding: '12px 12px 8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
});

export const header = style({
    textAlign: 'center',
    margin: 0,
    fontSize: 18,
    fontWeight: 500,
});

export const activityList = style({
    listStyle: 'none',
    padding: 0,
});
