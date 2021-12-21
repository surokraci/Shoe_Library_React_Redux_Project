import axios from "axios";

export const PRODUCT_CREATE = 'PRODUCT_CREATE';
export const PRODUCT_LIST_REQUEST = 'PRODUCT_LIST_REQUEST';
export const PRODUCT_LIST_REQUEST_START = 'PRODUCT_LIST_REQUEST_START';
export const PRODUCT_LIST_REQUEST_FAILED = 'PRODUCT_LIST_REQUEST_FAILED';
export const PRODUCT_DELETE = 'PRODUCT DELETE';
export const PRODUCT_CATEGORIES = 'PRODUCT CATEGORIES';

export const createProductAction = (payload) => ({
    type: PRODUCT_CREATE,
    payload
});

export const getCategories = (payload) => ({
    type: PRODUCT_CATEGORIES,
    payload
});

export const deleteProductAction = (payload) => ({
    type: PRODUCT_DELETE,
    payload
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

export const addNewProduct = (value) =>{
    return async dispatch=>{
        console.log('new Product');
        dispatch(createProductAction(value))
        try{
            const response = await axios.post('https://fakestoreapi.com/products', value);
            console.log(response);;        
        }catch(ex) {
            console.log(ex);;
        }
    }
}

export const getCategoriesMid = () =>{
    return async dispatch=>{
        console.log('categories');
        try{
            const response = await axios.get('https://fakestoreapi.com/products/categories');
            dispatch(getCategories(response.data))   
        }catch(ex) {
            console.log(ex);;
        }
    }
}

export const sortProduct = (value) =>{
    return async dispatch =>{
        dispatch(producstListRequestStartAction);
        if(value == 'desc'){
            try{
                const response = await axios.get('https://fakestoreapi.com/products?sort=desc');
                dispatch(productsListRequestAction(response.data));
            }catch(error){
                dispatch(productsListRequestFailAction(error));
            }
        }else{
            if(value == 'asc'){
                try{
                    const response = await axios.get('https://fakestoreapi.com/products?sort=asc');
                    dispatch(productsListRequestAction(response.data));
                }catch(error){
                    dispatch(productsListRequestFailAction(error));
                }
            }else{
                try{
                    const response = await axios.get('https://fakestoreapi.com/products');
                    dispatch(productsListRequestAction(response.data));        
                }catch(ex) {
                    dispatch(productsListRequestFailAction(ex));
                }
            }
        }
        
    }
}

export const DeleteProduct = (value) =>{
    return async dispatch=>{
        console.log('delete Product');
        dispatch(deleteProductAction(value))
        try{
            const response = await axios.delete(`https://fakestoreapi.com/products/${value}`);
            console.log(response);;        
        }catch(ex) {
            console.log(ex);;
        }
    }
}

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
        }, 100)
    }
}


