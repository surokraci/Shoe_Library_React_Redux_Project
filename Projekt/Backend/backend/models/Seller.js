const { Schema, model } = require('mongoose');

const sellerSchema = new Schema({
    seller: {
        type: String,
        unique: true,
    },
    addres: {
        type: String,
    },
    auctions: [{type: Schema.Types.ObjectId, ref: 'Auction'}],
    url: String

});

module.exports = model('Seller', sellerSchema);