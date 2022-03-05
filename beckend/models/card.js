const {Schema, model} = require('mongoose');

const Card = new Schema({
    cardNumber: {
        type: Number,
        unique: true,
        maxlength: 16, 
        minlength: 16
    },
    cvv: {
        type: Number,
        maxlength: 3, 
        minlength: 3
    },
    date: {
        type: String
    },
    amount: {
        type: Number
    }
})

module.exports = model('Card', Card)