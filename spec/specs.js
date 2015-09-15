describe('Ticket', function() {
  it("creates a new ticket item with its properties", function() {
    var testTicket = new Ticket("The Last Mustache", 1900, 30, 10);
    expect(testTicket.movieName).to.equal("The Last Mustache");
    expect(testTicket.movieTime).to.equal(1900);
    expect(testTicket.viewerAge).to.equal(30);
    expect(testTicket.originalPrice).to.equal(10);
  });
});

describe('calculatePrice', function() {
  it("discounts a ticket if a movie is before 1700 by $2", function() {
    var testTicket = new Ticket("The Last Mustache", 1900, 30, 10);
    expect(testTicket.movieName).to.equal("The Last Mustache");
    expect(testTicket.movieTime).to.equal(1900);
    expect(testTicket.viewerAge).to.equal(30);
    expect(testTicket.originalPrice).to.equal(10);
    expect(calculatePrice(testTicket.originalPrice)).to.equal(8);
  });
});
