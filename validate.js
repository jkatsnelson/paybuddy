$(document).ready(function(){

  $.fn.doesExist = function(){
    return jQuery(this).length > 0;
  };

  var formHandler = function(event){
    console.log("submitted"); // fixme: validate form here
    var creditNumber = $('#creditnumber').val();
    var ccvNumber = $('#ccv').val();
    var expDateNumber = $('#expyear').val();
    var fullName = $('#name').val();
    var billingAdd = $('#address').val();

    var ccRegEx = /^\d{16}$/;
    var ccvRegEx = /^\d{3}$/;
    var ccExpRegEx = /^\d{4}$/;
    var nameRegEx = /^[a-zA-Z]+\s[a-zA-Z]+$/;
    var billRegEx = /\d{5}/;

    creditNumber.split(" ");
//prototype Tests

    var ccTest = {
      pass : ccRegEx.test(creditNumber),
      name : "Credit Card Validation",
      id: 'CCtest'
    };

    var ccvTest = {
      pass: ccvRegEx.test(ccvNumber),
      name: "CCV Validation",
      id: 'CCVtest'
    };

    var dateTest = {
      pass: ccExpRegEx.test(expDateNumber),
      name: "Expiry Year Validation",
      id: 'expireDateTest'
    };

    var nameTest = {
      pass: nameRegEx.test(fullName),
      name: "Full Name Validation",
      id: 'nameTest'
    };

    var addressTest = {
      pass: billRegEx.test(billingAdd),
      name: "Billing Address Validation",
      id: 'addressTest'
    };

    var testList = [ccTest, ccvTest, dateTest, nameTest, addressTest]; //this shit should be in an object instead of an array

    var errorMsg = $('.error').doesExist();
    var successMsg = $('.success').doesExist();

//reset and submit
    var resetMonster = function (test) {
      $("#" + test.id + "").remove();
    };

    var displayError = function(testList){
      for (i=0; i<testList.length; i++){
        var test = testList[i];
        resetMonster(test);
      if (test.pass === false) {
         $('.contain').append("<div class='error' id='" + test.id + "'>Oh shit! " + test.name + " is BROKE</div>")
      } else {
         $('.contain').append("<div class='success' id='" + test.id + "'>Nice! " + test.name + " is a SUCCESS</div>")
      };
      };
    };
    displayError(testList);
    event.preventDefault(); // prevents the page from reloading
  };

  $("form").submit(formHandler); // register a callback
});

// check for event of submit button
// // take form input and validate credit card info
// Collect all of the above information.
// Validate all credit card info.
// Validate at least one input using a regex, and at least one using something other than (or in addition to) a regex.
// Display all errors to the user. (Don't rely on the console).
// If there are no errors, inform the user that all information was successfully submitted.