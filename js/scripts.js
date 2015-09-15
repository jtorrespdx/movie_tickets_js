function Contact(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.addresses = [];
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

function Address(street, city, state) {
  this.street = street;
  this.city = city;
  this.state = state;
}

Address.prototype.fullAddress = function() {
  return this.street + ", " + this.city + ", " + this.state;
}

function resetFields() {
  $("input#new-first-name").val("");
  $("input#new-last-name").val("");
  $("input.new-street").val("");
  $("input.new-city").val("");
  $("input.new-state").val("");
  $("div.new-address").not(":first").fadeOut(800);
}

$(document).ready(function() {
  $("#add-address").click(function() {
    $("#new-addresses").append('<div class="new-address">' +
                                  '<div class="fademe1">' +
                                    '<div class="form-group">' +
                                      '<label for="new-street">Street</label>' +
                                      '<input type="text" class="form-control new-street" required>' +
                                    '</div>' +
                                    '</div>' +
                                    '<div class="fademe2">' +
                                    '<div class="form-group">' +
                                      '<label for="new-city">City</label>' +
                                      '<input type="text" class="form-control new-city" required>' +
                                      '</div>' +
                                    '</div>' +
                                    '<div class="fademe3">' +
                                    '<div class="form-group">' +
                                      '<label for="new-state">State</label>' +
                                      '<input type="text" class="form-control new-state" required>' +
                                    '</div>' +
                                    '</div>' +
                                  '</div>' +
                                '</div>')
    $(".fademe1").hide().fadeIn(400);
    $(".fademe2").hide().fadeIn(825);
    $(".fademe3").hide().fadeIn(1350);
    $( ".fademe1" ).removeClass('fademe1').addClass('fadedme');
    $( ".fademe2" ).removeClass('fademe2').addClass('fadedme');
    $( ".fademe3" ).removeClass('fademe3').addClass('fadedme');

  });


  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();

    var newContact = new Contact(inputtedFirstName, inputtedLastName);

    $(".new-address").each(function() {
      var inputtedStreet = $(this).find("input.new-street").val();
      var inputtedCity = $(this).find("input.new-city").val();
      var inputtedState = $(this).find("input.new-state").val();

      var newAddress = new Address(inputtedStreet, inputtedCity, inputtedState)
      newContact.addresses.push(newAddress);
    });

    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

    $(".contact").last().click(function() {
      $("#show-contact").show();

      $("#show-contact h2").text(newContact.firstName);
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);

      $("ul#addresses").text("");
      newContact.addresses.forEach(function(address) {
        $("ul#addresses").append("<li>" + address.fullAddress() + "</li>");
      });
    });

    resetFields();

    // $("#new-addresses").not(".new-address-append");
  });
});
