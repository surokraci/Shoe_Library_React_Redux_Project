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
        case types.ADD_SHOE_TO_COLORWAY:
            console.log(action.payload);
            return {...state, colorways: state.colorways.map(function(el){return el._id === action.payload.colorID ? {_id: el._id, name: el.name, code: el.code, shoes: [...el.shoes, action.payload.shoeID]}:{...el}})}
        case types.REMOVE_SHOE_TO_COLORWAY:
            return {...state, colorways: state.colorways.map(function(item){return item._id === action.payload.colorID ? {...item, shoes: item.shoes.filter(el => el._id !== action.payload.shoeID)} : {...item}})}
        default:
            return state;
    }
}

export default colorwayReducer;
