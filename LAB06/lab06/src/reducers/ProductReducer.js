import { PRODUCT_LIST_REQUEST, PRODUCT_LIST_REQUEST_FAILED, PRODUCT_LIST_REQUEST_START,  PRODUCT_CREATE, PRODUCT_DELETE, PRODUCT_CATEGORIES} from "../actions/ProductAction";

const initState = {
    products: [],
    loading: false,
    error: '',
    categories: []
}

const productReducer = (state = initState, action) => {
    switch(action.type) {
        case PRODUCT_LIST_REQUEST_START: 
            return { ...state, loading: true }
        case PRODUCT_LIST_REQUEST_FAILED:
            return { ...state, loading: false, error: action.payload }
        case PRODUCT_LIST_REQUEST:
            return {...state, products: [...action.payload], loading: false };
        case PRODUCT_CREATE:
            console.log(state.products);
            return {...state, products: [...state.products, action.payload], categories: [...state.categories, action.payload.category]}
        case PRODUCT_DELETE:
            return {...state, products: state.products.filter(el => el.id !== action.payload)}
        case    PRODUCT_CATEGORIES:
            return {...state, categories: [...action.payload]}
        default:
            return state;
    }
}

export default productReducer;