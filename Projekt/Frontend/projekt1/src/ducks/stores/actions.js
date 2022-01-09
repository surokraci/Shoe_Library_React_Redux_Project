import types from './types';

export const ShopsListRequestAction = (shops) => ({
    type: types.STORE_LIST,
    payload: shops
})

export const ShopsListRequestStartAction = ({
    type: types.STORE_LIST_REQUEST_START
});

export const ShopsListRequestFailAction = (error) => ({
    type: types.STORE_LIST_REQUEST_FAIL,
    payload: error
})

export const ShopCreateNew = (shop) => ({
    type: types.STORE_CREATE,
    payload: shop
})

export const ShopDeleteOne = (shop) => ({
    type: types.STORE_DELETE,
    payload: shop
})

export const AuctionDeleteOne = (auction) => ({
    type: types.AUCTION_DELETE,
    payload: auction
})
