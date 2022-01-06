import axios from "axios";
import * as actions from './actions';

export const XgetShoesList = () => {
    return async dispatch => {
        dispatch(actions.ShoeListRequestStartAction);
        console.log('Shoes GET');
        setTimeout(async () => {
            try{
                const response = await axios.get('http://localhost:4000/shoes');
                dispatch(actions.ShoeListRequestAction(response.data.shoes));        
            }catch(error) {
                dispatch(actions.ShoeListRequestFailAction(error));
            }
        }, 0)
    }
}


export const addNewShoe = (value) =>{
    return async dispatch=>{
        console.log('new shoe');
        try{
            const response = await axios.post('http://localhost:4000/shoes', value);
            console.log(response);
            if(response == 'error'){
                alert("Error, shoe already exists")
            }else{
                dispatch(actions.ShoeCreateNew(response.data))   
            }
                 
        }catch(ex) {
            console.log(ex);;
        }
    }
}

export const DeleteShoe = (value) =>{
    return async dispatch=>{
        console.log('delete shoe');
        try{
            const response = await axios.delete(`http://localhost:4000/shoes/${value}`);
            console.log(response);
            dispatch(actions.ShoeDeleteOne(value))
        }catch(ex) {
            console.log(ex);;
        }
    }
}
