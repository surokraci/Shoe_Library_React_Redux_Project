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