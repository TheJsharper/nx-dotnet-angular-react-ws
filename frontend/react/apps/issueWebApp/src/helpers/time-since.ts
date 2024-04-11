import { Issue } from "../app/issues/models";

export const timeSince = (date: string) => {

    const baseDate = new Date(date)

    const seconds = Math.floor((new Date().getTime() - baseDate.getTime()) / 1000);

    let interval = seconds / 31536000;

    if (interval > 1) {
        return Math.floor(interval) + " years";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
        return Math.floor(interval) + " months";
    }
    interval = seconds / 86400;
    if (interval > 1) {
        return Math.floor(interval) + " days";
    }
    interval = seconds / 3600;
    if (interval > 1) {
        return Math.floor(interval) + " hours";
    }
    interval = seconds / 60;
    if (interval > 1) {
        return Math.floor(interval) + " minutes";
    }
    return Math.floor(seconds) + " seconds";
}

export const diference = (issue: Issue): number => {
    const createdAt = new Date(issue.created_at).getTime();

    const today = new Date().getTime();

    const between = today - createdAt;

    return Math.round(between / (1000 * 3600 * 24))

}

