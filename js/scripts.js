function Ticket (movie, time, age) {
  this.movie = movie;
  this.time = time;
  this.age = age;
};

Ticket.prototype.fullTicket = function() {
  return this.movie + " at " + this.time + " priced for " + this.age;
};

$(document).ready(function() {
  $("form").submit(function(event){
    var movie = $("select#movie").val();
    var time = $("select#time").val();
    var age = $("select#age").val();
    var newTicket = new Ticket(movie, time, age)
    $(".display").append("<li>" + movie + "</li>");
    $(".display").append("<li> At " + time + " </li>");
    $(".display").append("<li> For " + age + " </li>");
    event.preventDefault();
  });

});
