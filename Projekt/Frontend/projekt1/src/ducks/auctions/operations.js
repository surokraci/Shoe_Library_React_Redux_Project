import axios from "axios";
import * as actions from './actions';

export const getAuctionsList = () => {
    return async dispatch => {
        dispatch(actions.AuctionListRequestStartAction);
        console.log('Auction GET');
        setTimeout(async () => {
            try{
                const response = await axios.get('http://localhost:4000/auctions');
                dispatch(actions.AuctionListRequestAction(response.data.auctions));        
            }catch(error) {
                dispatch(actions.AuctionListRequestFailAction(error));
            }
        }, 0)
    }
}


export const addNewAuction = (value) =>{
    return async dispatch=>{
        console.log('new shop');
        try{
            const response = await axios.post('http://localhost:4000/auctions', value);
            console.log(response);
            dispatch(actions.AuctionCreateNew(response.data))
            dispatch(actions.AddAuctionToShoe(response.data))
            dispatch(actions.AddAuctionToShop(response.data))    
                 
        }catch(ex) {
            console.log(ex);;
        }
    }
}



export const DeleteAuction = (value) =>{
    return async dispatch=>{
        console.log('delete shoe');
        try{
            const response = await axios.delete(`http://localhost:4000/auctions/${value}`);
            console.log(response);
            dispatch(actions.AuctionDeleteOne(value))
        }catch(ex) {
            console.log(ex);;
        }
    }
}
