import types from './types';

export const ShoeListRequestAction = (shoes) => ({
    type: types.SHOE_LIST,
    payload: shoes
})

export const ShoeListRequestStartAction = ({
    type: types.SHOE_LIST_REQUEST_START
});

export const ShoeListRequestFailAction = (error) => ({
    type: types.SHOE_LIST_REQUEST_FAIL,
    payload: error
})

export const ShoeCreateNew = (shoe) => ({
    type: types.SHOE_CREATE,
    payload: shoe
})

export const ShoeDeleteOne = (shoe) => ({
    type: types.SHOE_DELETE,
    payload: shoe
})

export const AddShoeToColorway = (shoe) => ({
    type: types.ADD_SHOE_TO_COLORWAY,
    payload: shoe
})

export const DeleteShoeFromColorway = (shoe) =>({
    type: types.REMOVE_SHOE_TO_COLORWAY,
    payload: shoe
})

export const AuctionDeleteOne = (auction) => ({
    type: types.AUCTION_DELETE,
    payload: auction
})
