var mongoose = require('mongoose');

// schema for cust
var Schema = mongoose.Schema;

var custSchema = new Schema({
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    mobile:{
        type: Number,
        required: true
    },
    create_date:{
        type: Date,
        default: Date.now
    }
});

var Cust = module.exports = mongoose.model('Cust', custSchema);

// Get Cust
module.exports.getCust = function(callback, limit){
    Cust.find(callback).limit(limit);
}

// add cust
module.exports.addCust = function(cust, callback){
    Cust.create(cust, callback);
}

// update cust
module.exports.updateCust = function(id, cust, options, callback){
    var query = {_id: id};
    var update = {
        firstName: cust.firstName,
        lastName: cust.lastName,
        email: cust.email,
        address: cust.address,
        mobile: cust.mobile,
    }
    Cust.findOneAndUpdate(query, update, options, callback);
}

// delete cust
module.exports.removeCust = function(id, callback){
    var query = {_id: id};
    Cust.remove(query, callback);
}
