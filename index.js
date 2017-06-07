var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    authors = require('./server/controllers/authors'),
    books = require('./server/controllers/books');;

// create application/json parser
var jsonParser = bodyParser.json();

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.get('/authors', urlencodedParser, function (req, res) {
    if (!req.body) return res.sendStatus(400)
    // create user in req.body
    authors.index(req, res);
});

app.get('/authors/:id', urlencodedParser, function (req, res) {
    if (!req.body) return res.sendStatus(400)
    // create user in req.body
    authors.show(req, res);
});

app.post('/authors', urlencodedParser, function (req, res) {
    if (!req.body) return res.sendStatus(400)
    // create user in req.body
    authors.create(req, res);
});

app.put('/authors', urlencodedParser, function (req, res) {
    if (!req.body) return res.sendStatus(400)
    // create user in req.body
    authors.update(req, res);
});
app.delete('/authors', urlencodedParser, function (req, res) {
    if (!req.body) return res.sendStatus(400)
    // create user in req.body
    authors.delete(req, res);
});

app.get('/books', urlencodedParser, function (req, res) {
    if (!req.body) return res.sendStatus(400)
    // create user in req.body
    books.index(req, res);
});
app.get('/books/:id', urlencodedParser, function (req, res) {
    if (!req.body) return res.sendStatus(400)
    // create user in req.body
    books.show(req, res);
});
app.post('/books', urlencodedParser, function (req, res) {
    if (!req.body) return res.sendStatus(400)
    // create user in req.body
    books.create(req, res);
});
app.delete('/books', urlencodedParser, function (req, res) {
    if (!req.body) return res.sendStatus(400)
    // create user in req.body
    books.delete(req, res);
});

app.set('port', process.env.PORT || 8000);
app.listen(app.get('port'), function () {
    console.log("Magic happens on port", app.get('port'));
});