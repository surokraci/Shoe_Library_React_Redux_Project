export const addMovieAction = (payload) =>({
    type: 'MOVIE_ADD',
    payload
})
export const deleteMovieAction = (payload) =>({
    type: 'MOVIE_DELETE',
    payload
})
export const addActorToMovie = (payload) =>({
    type: 'ACTOR_TO_MOVIE',
    payload
})
export const removeActorFromMovie = (payload) => ({
    type: 'REMOVE_ACTOR_FROM_MOVIE',
    payload
})