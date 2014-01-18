//
//
//
var express = require('express');
var oauth = require('oauth');
var mongo = require('mongodb');
//var mongo = require('mongojs');
var q = require('q');
var app = express();
app.use(express.logger());
app.use(express.bodyParser());

var monk = require('monk');
var db = monk('localhost:27017/snapmeeting');

app.get('/', function (request, response) {
    response.send('Hello World!yes ff');
});

/******************************************************************************
 * App Setup
 *****************************************************************************/
app.configure('development',function(){
    console.log('!! DEVELOPMENT MODE !!');


});

app.configure('production', function(){
    console.log('!! PRODUCTION MODE !!');


});

app.get('/rooms', function (request, response) {
    var collection = db.get('rooms');
    collection.find({},{},function(e,docs){
        response.send(docs);
    });
});


var port = process.env.PORT || 5000;
app.listen(port, function () {
    console.log("Listening on " + port);
});