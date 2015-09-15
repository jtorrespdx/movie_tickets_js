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
    var testTicket = new Ticket("The Last Mustache", 1200, 30, 10);
    expect(calculatePrice(testTicket)).to.equal(8);
  });

  it("if a viewer is 65 or older, it discounts a ticket by $5", function() {
    var testTicket = new Ticket("The End of the Road", 1400, 67, 10);
    expect(calculatePrice(testTicket)).to.equal(5);
  });

  it("if a viewer is under the age of 12, it discouts a ticket by $5", function() {
    var testTicket = new Ticket("The Last Scoop of IceCream", 1300, 9, 10);
    expect(calculatePrice(testTicket)).to.equal(5);
  });
});
