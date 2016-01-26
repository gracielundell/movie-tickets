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
    var newTicket = new Ticket(movie, time, age);
    var total = 10;
    if(age === "senior" && (time === "12:00pm" || time === "3:00pm")){
      total -= 6;
    } else if (age === "senior"){
      total -= 4;
    } else if (age === "student" && (time === "12:00pm" || time === "3:00pm")) {
      total -= 4;
    } else if (age === "student") {
      total -= 2;
    } else if (age === "adult" && (time === "12:00pm" || time === "3:00pm")) {
      total -= 2;
    } else if (age === "adult") {
      total = total ;
    } else {
      alert("What were you thinking bringing a baby to the movie, you insensitive tool")
      total += 5;
    }

    $(".display").empty();
    $(".display").append("<li class='movieli'>" + movie + "</li>");
    $(".display").append("<li class='timeli'> At " + time + " </li>");
    $(".display").append("<li class='agel1'> For " + age + " </li>");
    $(".display").append("<li> Total: $" + total + "</li>")

    event.preventDefault();
  });

});
