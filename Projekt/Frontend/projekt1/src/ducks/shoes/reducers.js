import types from './types';

const initState = {
    shoes: [],
    loading: false,
    error: ''
}

const ShoeReducer = (state = initState, action) => {
    switch(action.type) {
        case types.SHOE_LIST_REQUEST_START: 
            return { ...state, loading: true }
        case types.SHOE_LIST_REQUEST_FAIL:
            return { ...state, loading: false, error: action.payload }
        case types.SHOE_LIST:
            return {...state, shoes: [...action.payload], loading: false };
        case types.SHOE_CREATE:
            return {...state, shoes: [...state.shoes, action.payload]}
        case types.SHOE_DELETE:
            return {...state, shoes: state.shoes.filter(el=>el._id !== action.payload)}
        case types.ADD_AUCTION_TO_SHOE:
            console.log(action.payload);
            return {...state, shoes: state.shoes.map(function(el){return el._id === action.payload.itemid ? {...el, auctions: [...el.auctions, action.payload._id]}:{...el}})}
        default:
            return state;
    }
}

export default ShoeReducer;
