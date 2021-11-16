export const movieReducer =(state =[], action)=>{
    switch(action.type){
        case 'MOVIE_ADD':
            return [...state, action.payload];
        case 'MOVIE_DELETE':
            return [...state.filter(el => el.id !== action.payload.id)];
        default:
            return state;

    }
}