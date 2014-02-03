App = Ember.Application.create();

App.Router.map(function() {
  // put your routes here
});



var attr = DS.attr;
App.Ticket = DS.Model.extend({
  subject: attr()
});

App.TicketController = Ember.Controller.extend({
    tickets: function() {
        var postId = this.get('id');
        return this.get('store').filter('ticket', function(ticket) {
            return ticket.get('post.id') == postId;
        });
  }.property()
});

App.Store = DS.Store.extend({
    adapter: DS.Adapter.create({
        find:function(){console.log("in the adapter!");},
        updateRecord:function(){console.log("in the adapter!");},
        deleteRecord:function(){console.log("in the adapter!");},
        findAll:function(){
            //this.store.push('ticket',{id:1, subject:"new ticket"});
            //App.Ticket.create({id: 1, subject: 'Created person'}`);
            /*return new Ember.RSVP.Promise(function(resolve){
                resolve([{id:1, subject:"what"}, {id:2, subject:"no"}]); 
            });*/
            return $.getJSON("/api").then(function(data){
                console.log(data); 
                return data; 
            }); 

        },
        findQuery:function(){console.log("in the adapter!");}
    })
});

var route;
App.IndexRoute = Ember.Route.extend({
  model: function() {
    route = this;
    return this.store.findAll('ticket');
  }
});


var socket = io.connect('http://localhost');
socket.on('connection', function (data) {
    console.log("Connected!");
});
socket.on('ticket',function(data){
setTimeout(function(){
    route.store.push('ticket',data);
},5000);
});
