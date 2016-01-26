describe("Ticket", function(){
  it("will create a ticket profile", function(){
    var testTicket = new Ticket("Big", "6:45pm", "senior");
    expect(testTicket.movie).to.equal("Big");
    expect(testTicket.time).to.equal("6:45pm");
    expect(testTicket.age).to.equal("senior");
  });

  it("will concatonate aspects of ticket", function(){
    var testTicket = new Ticket("Big", "6:45pm", "senior");
    expect(testTicket.fullTicket()).to.equal("Big at 6:45pm priced for senior");
  });
});
