import types from './types';

export const ColorwayListRequestAction = (colorways) => ({
    type: types.COLORWAY_LIST,
    payload: colorways
})

export const ColorwayListRequestStartAction = ({
    type: types.COLORWAY_LIST_REQUEST_START
});

export const ColorwayListRequestFailAction = (error) => ({
    type: types.COLORWAY_LIST_REQUEST_FAIL,
    payload: error
})

export const ColorwayCreateNew = (colorway) => ({
    type: types.COLORWAY_CREATE,
    payload: colorway
})

export const ColorwayDeleteOne = (colorway) => ({
    type: types.COLORWAY_DELETE,
    payload: colorway
})