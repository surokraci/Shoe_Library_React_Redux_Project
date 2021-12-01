import axios from "axios";

export const PRODUCT_CREATE = 'PRODUCT_CREATE';
export const PRODUCT_LIST_REQUEST = 'PRODUCT_LIST_REQUEST';
export const PRODUCT_LIST_REQUEST_START = 'PRODUCT_LIST_REQUEST_START';
export const PRODUCT_LIST_REQUEST_FAILED = 'PRODUCT_LIST_REQUEST_FAILED';

export const createProductAction = (newUser) => ({
    type: PRODUCT_CREATE,
    payload: newUser
});

export const productsListRequestAction = (users) => ({
    type: PRODUCT_LIST_REQUEST,
    payload: users
})

export const producstListRequestStartAction = ({
    type: PRODUCT_LIST_REQUEST_START
});

export const productsListRequestFailAction = (error) => ({
    type: PRODUCT_LIST_REQUEST_FAILED,
    payload: error
})



export const getProductList = () => {
    return async dispatch => {
        dispatch(producstListRequestStartAction);
        console.log('Create product action');
        setTimeout(async () => {
            try{
                const response = await axios.get('https://fakestoreapi.com/products');
                dispatch(productsListRequestAction(response.data));        
            }catch(ex) {
                dispatch(productsListRequestFailAction(ex));
            }
        }, 4000)
    }
}