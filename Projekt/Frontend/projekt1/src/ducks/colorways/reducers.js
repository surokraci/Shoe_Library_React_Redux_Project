import types from './types';

const initState = {
    colorways: [],
    loading: false,
    error: ''
}

const colorwayReducer = (state = initState, action) => {
    switch(action.type) {
        case types.COLORWAY_LIST_REQUEST_START: 
            return { ...state, loading: true }
        case types.COLORWAY_LIST_REQUEST_FAIL:
            return { ...state, loading: false, error: action.payload }
        case types.COLORWAY_LIST:
            return {...state, colorways: [...action.payload], loading: false };
        case types.COLORWAY_CREATE:
            return {...state, colorways: [...state.colorways, action.payload]}
        case types.COLORWAY_DELETE:
            return {...state, colorways: state.colorways.filter(el=>el._id !== action.payload)}
        default:
            return state;
    }
}

export default colorwayReducer;
