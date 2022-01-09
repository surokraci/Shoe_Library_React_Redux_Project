import types from './types';

const initState = {
    auctions: [],
    loading: false,
    error: ''
}

const AuctionReducer = (state = initState, action) => {
    switch(action.type) {
        case types.AUCTION_LIST_REQUEST_START: 
            return { ...state, loading: true }
        case types.AUCTION_LIST_REQUEST_FAIL:
            return { ...state, loading: false, error: action.payload }
        case types.AUCTION_LIST:
            return {...state, auctions: [...action.payload], loading: false };
        case types.AUCTION_CREATE:
            return {...state, auctions: [...state.auctions, action.payload]}
        case types.AUCTION_DELETE:
            return {...state, auctions: state.auctions.filter(el=>el._id !== action.payload)}
        default:
            return state;
    }
}

export default AuctionReducer;
