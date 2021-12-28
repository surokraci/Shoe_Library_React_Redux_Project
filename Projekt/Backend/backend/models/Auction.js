const { Schema, model } = require('mongoose');

const sellerSchema = new Schema({
    sellerid: {type: Schema.Types.ObjectId, ref: 'Seller'},
    itemid: {type: Schema.Types.ObjectId, ref: 'Shoe'},
    sizes: [Number],
    price: Number

});

module.exports = model('Auction', sellerSchema);