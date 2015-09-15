function Ticket(movieName, movieTime, viewerAge, originalPrice) {
  this.movieName = movieName;
  this.movieTime = movieTime;
  this.viewerAge = viewerAge;
  this.originalPrice = originalPrice;
}

function calculatePrice(ticket) {
  ticket.movieTime *= 100;
  if (ticket.viewerAge >=65 || ticket.viewerAge <= 12) {
    return ticket.originalPrice -=5;
  } else if (ticket.movieTime <= 1700) {
    return ticket.originalPrice -= 2;
  } else {
    return ticket.originalPrice;
  }
}

$(document).ready(function() {
  $("form#new-ticket").submit(function(event) {
    event.preventDefault();

    var movieName = $("select#movie-name").val();
    var movieTime = parseInt($("input#movie-time").val());
    var viewerAge = parseInt($("input#viewer-age").val());
    var originalPrice = 10;

    var newTicket = new Ticket(movieName, movieTime, viewerAge, originalPrice);
    debugger;
    var ticketPrice = calculatePrice(newTicket);

    $("#ticket-price").text(ticketPrice);
    $("#results").show();
  });
});
