const { Schema, model } = require('mongoose');

const colorwaySchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    code: {
        type: String,
        required: true
    },
    shoes: [{type: Schema.Types.ObjectId, ref: 'Shoe'}],
});

module.exports = model('Colorway', colorwaySchema);