import { GIFT_ADD, GIFT_DELETE } from "../actions/GiftAction";

export const GiftReducer = (state = [], action) =>{
    console.log(action);
    switch(action.type){
        case 'GIFT_ADD':
            return [...state, action.payload];
        case 'GIFT_DELETE':
            return [...state.filter(el => el.id !== action.payload.id)];

        default:
            return state
    }
}
