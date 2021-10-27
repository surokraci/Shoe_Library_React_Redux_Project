export const TODO_ADD = 'TODO_ADD';
export const TODO_DELETE = 'TODO_DELETE';
export const TODO_DONE = 'TODO_DONE'

export const addToDo = (payload) => ({
    type: TODO_ADD,
    payload
});

export const deleteToDo = (payload) => ({
    type: TODO_DELETE,
    payload
})

export const doneToDo = (payload) => ({
    type: TODO_DONE,
    payload
})