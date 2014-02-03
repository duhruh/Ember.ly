var express = require('express'); 
var app = express();
var server = require('http').Server(app);
var io = require('socket.io').listen(server);

app.configure(function(){
    app.use(express.methodOverride()); 
    app.use(app.router); 
    app.use(express.static(__dirname + '/public')); 
    app.use(express.errorHandler({dumpExceptions:true, showStack:true})); 
}); 

io.on('connection', function(socket){ 
    socket.emit('ticket', {id:3, subject:'io from the server'}); 
});

server.listen(3000);




app.get('/api', function(req, res, next){
    console.log("api request"); 
    res.send(api); 
}); 


var api = [
{id:1,subject:"ticket-1"},
{id:2,subject:"ticket-2"},
{id:3,subject:"ticket-3"},
{id:4,subject:"ticket-4"},
{id:5,subject:"ticket-5"},
{id:6,subject:"ticket-6"},
{id:7,subject:"ticket-7"},
{id:8,subject:"ticket-8"},
{id:9,subject:"ticket-9"},
{id:10,subject:"ticket-10"},
{id:11,subject:"ticket-11"},
{id:12,subject:"ticket-12"},
{id:13,subject:"ticket-13"},
{id:14,subject:"ticket-14"},
{id:15,subject:"ticket-15"},
{id:16,subject:"ticket-16"},
{id:17,subject:"ticket-17"},
{id:18,subject:"ticket-18"},
{id:19,subject:"ticket-19"},
{id:20,subject:"ticket-20"},
{id:21,subject:"ticket-21"},
{id:22,subject:"ticket-22"},
{id:23,subject:"ticket-23"},
{id:24,subject:"ticket-24"},
{id:25,subject:"ticket-25"},
{id:26,subject:"ticket-26"},
{id:27,subject:"ticket-27"},
{id:28,subject:"ticket-28"},
{id:29,subject:"ticket-29"},
{id:30,subject:"ticket-30"},
{id:31,subject:"ticket-31"},
{id:32,subject:"ticket-32"},
{id:33,subject:"ticket-33"},
{id:34,subject:"ticket-34"},
{id:35,subject:"ticket-35"},
{id:36,subject:"ticket-36"},
{id:37,subject:"ticket-37"},
{id:38,subject:"ticket-38"},
{id:39,subject:"ticket-39"},
{id:40,subject:"ticket-40"},
{id:41,subject:"ticket-41"},
{id:42,subject:"ticket-42"},
{id:43,subject:"ticket-43"},
{id:44,subject:"ticket-44"},
{id:45,subject:"ticket-45"},
{id:46,subject:"ticket-46"},
{id:47,subject:"ticket-47"},
{id:48,subject:"ticket-48"},
{id:49,subject:"ticket-49"},
{id:50,subject:"ticket-50"}
]
