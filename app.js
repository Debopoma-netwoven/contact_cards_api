var express = require("express");
var app = express();
var port = 3000;
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});



app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html')
});


var MongoClient = require('mongodb')

var db

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    if (err) return console.log(err)
    db = client.db('Contacts') // whatever your database name is
    app.listen(3000, () => {
        console.log('listening on 3000')
    })
})


app.get('/ContactList', (req, res) => {
    db.collection('ContactList').find().toArray(function (err, results) {
        res.header("Content-Type", 'application/json');
        res.send(results);
        // send HTML file populated with quotes here
    })
})


app.post('/ContactList', (req, res) => {

    db.collection('ContactList').save(req.body, (err, result) => {
        if (err) return console.log(err)

        console.log('saved to database')
        res.redirect('/')
    })
})

app.delete('/ContactList', function (req, res) {

    var contactId = req.body.id;
    db.collection('ContactList').remove({ "_id": contactId }, function (err, result) {
        console.log("del func");
        res.send((result === 1) ? { msg: 'Deleted' } : { msg: 'error: ' + err });
    });
});

app.put('/ContactList', function (req, res) {
    var updateObject = req.body.updateData;
    var updateId = req.body.id;
    var myquery = { _id: updateId };
    var newvalues = { $set:  updateObject};
    db.collection("ContactList").updateOne(myquery, newvalues, function (err, res) {
        if (err) throw err;
        console.log("1 document updated");
    });

});

