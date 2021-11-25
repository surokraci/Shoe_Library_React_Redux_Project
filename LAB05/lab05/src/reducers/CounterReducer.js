const initialState = {cnt:0}

export const counterReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'COUNTER_PLUS':
            return {cnt: state.cnt+1};
        case 'COUNTER_MINUS':
            return {cnt: state.cnt-1};
        case 'START_COUNTDOWN':
            return {cnt: state.cnt-1};
        case 'STOP_COUNTDOWN':
            return {cnt: state.cnt};
        default: 
            return state;
    }
};