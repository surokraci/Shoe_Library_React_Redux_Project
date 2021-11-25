export const incrementCounter = () => ({
    type: 'COUNTER_PLUS'
});

export const decrementCounter = () => ({
    type: 'COUNTER_MINUS'
});

export const startCountdown = () => ({
    type: 'START_COUNTDOWN'
});
export const stopCountdown = () => ({
    type: 'STOP_COUNTDOWN'
});