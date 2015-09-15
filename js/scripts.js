function Ticket(movieName, movieTime, viewerAge, originalPrice) {
  this.movieName = movieName;
  this.movieTime = movieTime;
  this.viewerAge = viewerAge;
  this.originalPrice = originalPrice;
}

function calculatePrice(ticket) {
  if (ticket.viewerAge >=65) {
    return ticket.originalPrice -=5;
  } else if (ticket.movieTime <= 1700) {
    return ticket.originalPrice -= 2;
  } else {
    return ticket.originalPrice;
  }
}
