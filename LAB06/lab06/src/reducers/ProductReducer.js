import { PRODUCT_LIST_REQUEST, PRODUCT_LIST_REQUEST_FAILED, PRODUCT_LIST_REQUEST_START } from "../actions/ProductAction";

const initState = {
    products: [],
    loading: false,
    error: ''
}

const productReducer = (state = initState, action) => {
    switch(action.type) {
        case PRODUCT_LIST_REQUEST_START: 
            return { ...state, loading: true }
        case PRODUCT_LIST_REQUEST_FAILED:
            return { ...state, loading: false, error: action.payload }
        case PRODUCT_LIST_REQUEST:
            return {...state, products: [...action.payload], loading: false };
        default:
            return state;
    }
}

export default productReducer;