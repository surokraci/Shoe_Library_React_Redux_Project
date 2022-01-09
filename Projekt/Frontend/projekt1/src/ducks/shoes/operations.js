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
                const uniqueC = response.data.colorway.filter((v, i, a) => a.indexOf(v) === i)
                for(const color of uniqueC){
                    const load = {
                        shoeID: response.data,
                        colorID: color
                    }
                    await dispatch(actions.AddShoeToColorway(load))
                } 
            }
                 
        }catch(ex) {
            console.log(ex);;
        }
    }
}

export const editShoe = (value) =>{
    return async dispatch=>{
        try{
            const response = await axios.put(`http://localhost:4000/shoes/${value._id}`, value);
            console.log(response);
            if(response == 'error'){
                alert("Error")
            }else{
                dispatch(actions.ShoeDeleteOne(response.data._id))
                const uniqueC = value.OLDcolorway.filter((v, i, a) => a.indexOf(v) === i)
                for(const color of uniqueC){
                    const load = {
                        shoeID: value._id,
                        colorID: color
                    }
                    await dispatch(actions.DeleteShoeFromColorway(load))
                }
                dispatch(actions.ShoeCreateNew(response.data))
                const uniqueC2 = response.data.colorway.filter((v, i, a) => a.indexOf(v) === i)
                for(const color of uniqueC2){
                    const load2 = {
                        shoeID: response.data,
                        colorID: color
                    }
                    await dispatch(actions.AddShoeToColorway(load2))
                } 
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
            const uniqueC = response.data.colorway.filter((v, i, a) => a.indexOf(v) === i)
                for(const color of uniqueC){
                    const load = {
                        shoeID: response.data._id,
                        colorID: color
                    }
                    await dispatch(actions.DeleteShoeFromColorway(load))
                }
                const uniqueC2 = response.data.auctions
                for(const auction of uniqueC2){
                    await dispatch(actions.AuctionDeleteOne(auction))
                }
        }catch(ex) {
            console.log(ex);;
        }
    }
}
