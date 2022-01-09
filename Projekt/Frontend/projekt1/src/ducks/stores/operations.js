import axios from "axios";
import * as actions from './actions';

export const getShopsList = () => {
    return async dispatch => {
        dispatch(actions.ShopsListRequestStartAction);
        console.log('Shops GET');
        setTimeout(async () => {
            try{
                const response = await axios.get('http://localhost:4000/sellers');
                dispatch(actions.ShopsListRequestAction(response.data.sellers));        
            }catch(error) {
                dispatch(actions.ShopsListRequestFailAction(error));
            }
        }, 0)
    }
}


export const addNewShop = (value) =>{
    return async dispatch=>{
        console.log('new shop');
        try{
            const response = await axios.post('http://localhost:4000/sellers', value);
            console.log(response);
            dispatch(actions.ShopCreateNew(response.data)) 
                 
        }catch(ex) {
            console.log(ex);;
        }
    }
}

// export const editShoe = (value) =>{
//     return async dispatch=>{
//         try{
//             const response = await axios.put(`http://localhost:4000/shoes/${value._id}`, value);
//             console.log(response);
//             if(response == 'error'){
//                 alert("Error")
//             }else{
//                 dispatch(actions.ShoeDeleteOne(response.data._id))
//                 const uniqueC = value.OLDcolorway.filter((v, i, a) => a.indexOf(v) === i)
//                 for(const color of uniqueC){
//                     const load = {
//                         shoeID: value._id,
//                         colorID: color
//                     }
//                     await dispatch(actions.DeleteShoeFromColorway(load))
//                 }
//                 dispatch(actions.ShoeCreateNew(response.data))
//                 const uniqueC2 = response.data.colorway.filter((v, i, a) => a.indexOf(v) === i)
//                 for(const color of uniqueC2){
//                     const load2 = {
//                         shoeID: response.data,
//                         colorID: color
//                     }
//                     await dispatch(actions.AddShoeToColorway(load2))
//                 } 
//             }
                 
//         }catch(ex) {
//             console.log(ex);;
//         }
//     }
// }

export const DeleteShop = (value) =>{
    return async dispatch=>{
        console.log('delete shoe');
        try{
            const response = await axios.delete(`http://localhost:4000/sellers/${value}`);
            console.log(response);
            dispatch(actions.ShopDeleteOne(value))
            const uniqueC = response.data.auctions
                for(const auction of uniqueC){
                    await dispatch(actions.AuctionDeleteOne(auction))
                }
        }catch(ex) {
            console.log(ex);;
        }
    }
}
