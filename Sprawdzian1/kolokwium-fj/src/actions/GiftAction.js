export const GIFT_ADD = 'GIFT_ADD';
export const GIFT_DELETE = 'GIFT_DELETE';


export const addGift = (payload) => ({
    type: GIFT_ADD,
    payload
});

export const deleteGift = (payload) => ({
    type: GIFT_DELETE,
    payload
})

