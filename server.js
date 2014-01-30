var express = require('express'); 
var routes = require('./lib/routes'); 
var app = express(); 

app.set('views',  __dirname + '/lib/views'); 
app.set('view engine',  'jade'); 

app.configure(function(){
    app.use(express.methodOverride()); 
    app.use(app.router); 
    app.use(express.static(__dirname + '/public')); 
    app.use(express.errorHandler({dumpExceptions:true, showStack:true})); 
}); 

app.get('/', routes.index); 

app.listen(3000); 
