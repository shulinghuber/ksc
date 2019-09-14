var express = require('express');
//var ejs = require('ejs');
var app = express();
var bodyParser = require('body-parser');
var expressLayouts = require('express-ejs-layouts');

app.use(express.static('KSC_contents')); 
app.use(expressLayouts);
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", function(req, res) {
    res.render("home");
});

app.get("/about", function(req, res) {
    res.render("about");
});
app.listen(3000, function() {
    console.log("server is listening!!!");
});
