var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');

app.use(bodyParser.json());

Cust = require('./models/cust');
Card = require('./models/card');

// connect to mongoose
var db = mongoose.connect('mongodb://localhost/payment', {
    useMongoClient: true,
});

// home page function to push text
app.get('/', function(req, res){
    res.send('Please use /api/cust or /api/card');
});

// if api called pull cust info
app.get('/api/cust', function(req, res){
    Cust.getCust(function(err, cust){
        if(err){
            throw err;
        }
        res.json(cust);
    });
});

// if api called push cust info
app.post('/api/cust', function(req, res){
    var cust = req.body;
    Cust.addCust(cust, function(err, cust){
        if(err){
            throw err;
        }
        res.json(cust);
    });
});

// if api called change cust info by id
app.put('/api/cust/:id', function(req, res){
    var id = req.params._id;
    var cust = req.body;
    Cust.updateCust(id, cust, {}, function(err, cust){
        if(err){
            throw err;
        }
        res.json(cust);
    });
});

// if api called delete cust info
app.delete('/api/cust/:id', function(req, res){
    var id = req.params._id;
    Cust.removeCust(id, function(err, cust){
        if(err){
            throw err;
        }
        res.json(cust);
    });
});

// if api called pull card info
app.get('/api/card', function(req, res){
    Card.getCard(function(err, card){
        if(err){
            throw err;
        }
        res.json(card);
    });
});

// if api called pull card info by id
app.get('/api/card:_id', function(req, res){
    Card.getCardById(req.params._id, function(err, card){
        if(err){
            throw err;
        }
        res.json(card);
    });
});

// if api called push card info
app.post('/api/card', function(req, res){
    var card = req.body;
    Card.addCard(card, function(err, card){
        if(err){
            throw err;
        }
        res.json(card);
    });
});

// if api called change card info by id
app.put('/api/card/:id', function(req, res){
    var id = req.params._id;
    var card = req.body;
    Card.updateCard(id, cust, {}, function(err, card){
        if(err){
            throw err;
        }
        res.json(card);
    });
});

// if api called delete card info
app.delete('/api/cust/:id', function(req, res){
    var id = req.params._id;
    Card.removeCard(id, function(err, card){
        if(err){
            throw err;
        }
        res.json(card);
    });
});

app.listen(3000);
console.log('starting');
