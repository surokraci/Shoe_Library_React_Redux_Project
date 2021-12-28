const { Schema, model } = require('mongoose');

const shoeSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    family: {
        type: String,
        required: true
    },
    boost: Boolean,
    colorway: [{type: Schema.Types.ObjectId, ref: 'Colorway'}],
    stock: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    region: [String],
    pictureUrl: String,
    auctions: [{type: Schema.Types.ObjectId, ref: 'Auction'}]

});

module.exports = model('Shoe', shoeSchema);