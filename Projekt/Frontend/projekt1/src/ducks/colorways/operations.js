import axios from "axios";
import * as actions from './actions';

export const getColorwaysList = () => {
    return async dispatch => {
        dispatch(actions.ColorwayListRequestStartAction);
        console.log('Colorways GET');
        setTimeout(async () => {
            try{
                const response = await axios.get('http://localhost:4000/colorways');
                dispatch(actions.ColorwayListRequestAction(response.data.colorways));        
            }catch(error) {
                dispatch(actions.ColorwayListRequestFailAction(error));
            }
        }, 0)
    }
}


export const addNewColorway = (value) =>{
    return async dispatch=>{
        console.log('new colorway');
        try{
            const response = await axios.post('http://localhost:4000/colorways', value);
            console.log(response);;
            dispatch(actions.ColorwayCreateNew(response.data))        
        }catch(ex) {
            console.log(ex);;
        }
    }
}

export const DeleteColorway = (value) =>{
    return async dispatch=>{
        console.log('delete colorway');
        try{
            const response = await axios.delete(`http://localhost:4000/colorways/${value}`);
            console.log(response);;
            if(response.data != 'error'){
                dispatch(actions.ColorwayDeleteOne(value))
            }else{
                alert("You can't delete colorway with assigned shoes!")
            }        
        }catch(ex) {
            console.log(ex);;
        }
    }
}
