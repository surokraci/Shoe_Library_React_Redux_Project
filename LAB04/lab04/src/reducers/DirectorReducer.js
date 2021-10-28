export const directorReducer = (state=[], action)=>{
    switch(action.type){
        case 'DIRECTOR_ADD':
            return [...state, action.payload];
        default:
            return state;
    }
}