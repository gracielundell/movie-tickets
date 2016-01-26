function Ticket (movie, time, age) {
  this.movie = movie;
  this.time = time;
  this.age = age;
};

Ticket.prototype.fullTicket = function() {
  return this.movie + " at " + this.time + " priced for " + this.age;
};
