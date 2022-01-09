import types from './types';

export const AuctionListRequestAction = (auctions) => ({
    type: types.AUCTION_LIST,
    payload: auctions
})

export const AuctionListRequestStartAction = ({
    type: types.AUCTION_LIST_REQUEST_START
});

export const AuctionListRequestFailAction = (error) => ({
    type: types.AUCTION_LIST_REQUEST_FAIL,
    payload: error
})

export const AuctionCreateNew = (auction) => ({
    type: types.AUCTION_CREATE,
    payload: auction
})

export const AuctionDeleteOne = (auction) => ({
    type: types.AUCTION_DELETE,
    payload: auction
})

export const AddAuctionToShop = (auction) => ({
    type: types.ADD_AUCTION_TO_SHOP,
    payload: auction
})

export const AddAuctionToShoe = (auction) => ({
    type: types.ADD_AUCTION_TO_SHOE,
    payload: auction
})