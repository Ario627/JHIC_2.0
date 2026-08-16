export function clamp(value: number, minimum = 0, maximum = 1) {
    return Math.min(Math.max(value, minimum), maximum);
}