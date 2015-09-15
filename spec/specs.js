describe('ticket', function() {
  it("creates a new ticket item with its properties", function() {
    var testTicket = new Ticket("The Last Mustache", "7:00", 30);
    expect(testTicket.movieName).to.equal("The Last Mustache");
    expect(testTicket.movieTime).to.equal("7:00");
    expect(testTicket.viewerAge).to.equal(30);
  });
});
