var mongoose = require('mongoose');

// schema for card
var Schema = mongoose.Schema;

var cardSchema = new Schema({
    cardNo:{
        type: Text,
        required: true
    },
    cardName:{
        type: Text,
        required: true
    },
    cvc:{
        type: Number,
        required: true
    },
    cardExpiry:{
        type: Date,
        required: true
    },
    create_date:{
        type: Date,
        default: Date.now
    }
});

var Card = module.exports = mongoose.model('Card', cardSchema);

// Get Card
module.exports.getCard = function(callback, limit){
    Card.find(callback).limit(limit);
}

// Get Card
module.exports.getCardByID = function(id, callback){
    Card.findById(id, callback);
}

// add card
module.exports.addCard = function(card, callback){
    Card.create(card, callback);
}

// update card
module.exports.updateCard = function(id, card, options, callback){
    var query = {_id: id};
    var update = {
        cardNo: card.cardNo,
        cardName: card.cardName,
        cvc: card.cvc,
        cardExpiry: card.cardExpiry,
    }
    Cust.findOneAndUpdate(query, update, options, callback);
}

// delete card
module.exports.removeCard = function(id, callback){
    var query = {_id: id};
    Card.remove(query, callback);
}
