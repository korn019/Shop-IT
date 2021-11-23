const express = require('express')
const url = require('url');
const http = require('http');
const path = require('path')

const app = express()

const port = process.env.PORT || 3000 ;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.set('detail', path.join(__dirname, 'detail'));

app.use(express.urlencoded({ extended: true}));
// app.use(express.static("public"));
app.use(express.static(path.join(__dirname, 'public')))


app.get("/", function(req, res) {

    res.render('homepage',);
});
app.get("/products", function(req, res) {

    res.render('products',);
});


app.get("/search", function(req, res) {

    res.render('search',);
});
app.get("/price/:range", function(req, res) {

    res.render('price/'+req.params.range,);
});



app.get("/carts", function(req, res) {

    res.render('carts',);
});
app.get("/products/computer/detail/:id", function(req, res) {

    res.render('computer/detail/'+req.params.id,);
});
app.get("/products/phone/detail/:id", function(req, res) {

    res.render('phone/detail/'+req.params.id,);
});



app.listen(port, function() {
    console.log("Server started");
});


