export const addActorAction = (payload) =>({
    type: 'ACTOR_ADD',
    payload
})
export const deleteActorAction = (payload) =>({
    type: 'ACTOR_DELETE',
    payload
})
export const actorToMovie = (payload) =>({
    type: 'ACTOR_ADD_TO_MOVIE',
    payload
})
export const removeMeFromMovie = (payload) => ({
    type: 'REMOVE_ME_FROM_MOVIE',
    payload
})