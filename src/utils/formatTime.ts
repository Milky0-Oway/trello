import { format, isToday, isYesterday } from 'date-fns';

export const formatActivityTime = (timestamp: Date) => {
    const now = new Date();

    const differenceInMinutes = Math.floor(
        (now.getTime() - timestamp.getTime()) / (1000 * 60),
    );

    if (differenceInMinutes < 1) {
        return 'just now';
    }

    if (differenceInMinutes < 60) {
        return `${differenceInMinutes} minutes ago`;
    }

    if (differenceInMinutes < 1440) {
        const differenceInHours = Math.floor(differenceInMinutes / 60);
        return `${differenceInHours} ${differenceInHours === 1 ? 'hour' : 'hours'} ago`;
    }

    if (isToday(timestamp)) {
        return format(timestamp, 'h:mm a');
    }

    if (isYesterday(timestamp)) {
        return `Yesterday at ${format(timestamp, 'h:mm a')}`;
    }

    return format(timestamp, 'MMM d, yyyy, h:mm a');
};
