const A_DAY_TIME = 24 * 60 * 60 * 1000;
const A_HOUR_TIME = 60 * 60 * 1000;
const A_MIN_TIME = 60 * 1000;

export const dateFormat = (value: string) => {
    const result = new Date(value);
    const currentTime = new Date();
    const partTime = currentTime.getTime() - result.getTime();
    if (A_HOUR_TIME <= partTime && A_DAY_TIME > partTime) {
        return `${Math.floor(partTime / (1000 * 60 * 60))} hours ago`;
    } else if (A_HOUR_TIME > partTime && A_MIN_TIME <= partTime) {
        return `${Math.floor(partTime / (1000 * 60))} mins ago`;
    } else if (A_MIN_TIME > partTime) {
        return `${Math.floor(partTime / 1000)} seconds ago`;
    }
    return result.toLocaleDateString("en-US");
};
