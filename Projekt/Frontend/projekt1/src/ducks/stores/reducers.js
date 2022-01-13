import types from './types';

const initState = {
    shops: [],
    loading: false,
    error: ''
}

const ShopReducer = (state = initState, action) => {
    switch(action.type) {
        case types.STORE_LIST_REQUEST_START: 
            return { ...state, loading: true }
        case types.STORE_LIST_REQUEST_FAIL:
            return { ...state, loading: false, error: action.payload }
        case types.STORE_LIST:
            return {...state, shops: [...action.payload], loading: false };
        case types.STORE_CREATE:
            return {...state, shops: [...state.shops, action.payload]}
        case types.STORE_DELETE:
            return {...state, shops: state.shops.filter(el=>el._id !== action.payload)}
        case types.ADD_AUCTION_TO_SHOP:
            console.log(action.payload);
            return {...state, shops: state.shops.map(function(el){return el._id === action.payload.sellerid ? {...el, auctions: [...el.auctions, action.payload._id]}:{...el}})}
        default:
            return state;
    }
}

export default ShopReducer;
