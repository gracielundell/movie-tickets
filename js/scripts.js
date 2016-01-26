function Ticket (movie, time, age) {
  this.movie = movie;
  this.time = time;
  this.age = age;
};

Ticket.prototype.fullTicket = function() {
  var total = 10;
  if (this.age === "Senior" && (this.time === "12:00pm" || this.time === "3:00pm"))
  {
  total -= 6;
} else if (this.age === "Senior"){
  total -= 4;
  } if (this.age === "Student" && (this.time === "12:00pm" || this.time === "3:00pm"))
  {
  total -= 4;
} else if (this.age === "Student") {
    total -= 2;
  } if (this.age === "Adult" && (this.time === "12:00pm" || this.time === "3:00pm")) {
    total -= 2;
  } else if (this.age === "Adult") {
    total = total ;
  } if (this.age === "Toddler"){
    total += 5
  }
  return total;
};

$(document).ready(function() {
  $("form").submit(function(event){
    var movie = $("select#movie").val();
    var time = $("select#time").val();
    var age = $("select#age").val();
    var ticketNum = parseInt($("select#number").val());
    var newTicket = new Ticket(movie, time, age);
    var total = 10;

    var grandTotal = newTicket.fullTicket() * ticketNum;

      $(".display").empty();
      $(".display").append("<li class='ticketNumli'>" + ticketNum + " ticket(s) </li>");
      $(".display").append("<li class='movieli'>" + movie + "</li>");
      $(".display").append("<li class='timeli'> At " + time + " </li>");
      $(".display").append("<li class='ageli'> For " + age + " </li>");
      $(".display").append("<li> Total: $" + grandTotal + "</li>");


    event.preventDefault();
  });
});
