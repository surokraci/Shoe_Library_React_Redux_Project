export const TODO_ADD = 'USER_ADD';
export const TODO_DELETE = 'USER_DELETE';

export const addUserAction = (payload) => ({
    type: TODO_ADD,
    payload
});

export const deleteUserAction = (payload) => ({
    type: TODO_DELETE,
    payload
})