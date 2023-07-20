function validate() {
      // Get form values
      var id = document.getElementById("id").value;
      var name = document.getElementById("name").value;
      var age = document.getElementById("age").value;
      var error_id = document.getElementById("disp_id");
      var error_name = document.getElementById("disp_name");
      var error_age = document.getElementById("disp_age");


      // Regular expressions
      var idRegex = /^[A-Za-z0-9]+$/; // Alphanumeric characters only
      var nameRegex = /^[A-Za-z\s]+$/; // Letters and spaces only
      var ageRegex = /^\d+$/; // Digits only

      // Validation

      if(id != idRegex) {
        error_id.innerHTML = "*Please enter valid id";
      }
      if(name != nameRegex) {
        error_name.innerHTML = "*Please enter valid name";
      }
      if(age != ageRegex) {
        error_age.innerHTML = "*Please enter valid age";
      }
    //   var errors = [];

    //   if (!idRegex.test(id)) {
    //     errors.push("Invalid ID. Only alphanumeric characters are allowed.");
    //   }

    //   if (!nameRegex.test(name)) {
    //     errors.push("Invalid name. Only letters and spaces are allowed.");
    //   }

    //   if (!ageRegex.test(age)) {
    //     errors.push("Invalid age. Please enter a valid age.");
    //   }

    //   // Display error messages or submit form
    //   var errorContainer = document.getElementById("error-container");
    //   if (errors.length > 0) {
    //     var errorList = "";
    //     for (var i = 0; i < errors.length; i++) {
    //       errorList += "<li>" + errors[i] + "</li>";
    //     }
    //     errorContainer.innerHTML = "<ul>" + errorList + "</ul>";
    //     return false; // Prevent form submission
    //   } else {
    //     errorContainer.innerHTML = "";
    //     return true; // Proceed with form submission
    //   }
    }