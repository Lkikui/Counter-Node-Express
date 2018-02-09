/*---------- modules ----------*/
//express
var express = require("express");
var app = express();
//session
var session = require('express-session');
var app = express();
app.use(session({
    secret: 'codingdojorocks'}));
//ejs
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

/*---------- routes ----------*/
var counter = 0;
//renders template
app.get("/", function (request, response){
    if (counter > 0){
        counter++;
        console.log(`In session. counter: ${counter}`);
    } else {
        console.log(`Not in session. counter: ${counter}`);
    }
    response.render('index', {counter:counter});
});

//increments, redirects
app.post("/two", function (request, response){
    var two = function() { 
        counter++;
    }
    two();
    response.redirect("/");
});

//resets counter
app.post("/reset", function(request, response) {
    counter = 0;
    response.redirect("/");
});


/*---------- port ----------*/
app.listen(8000, function() {
    console.log("Counter Project: listening on port 8000");
});
