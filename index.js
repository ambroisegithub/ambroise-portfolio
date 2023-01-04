
    function validation() {
      var name = document.getElementById("name").value;
    
      var pass = document.getElementById("pass").value;
      var confirmpass = document.getElementById("conpass").value;
   
      var emails = document.getElementById("emails").value;

      if (name == "") {
        document.getElementById("Name").innerHTML =
          " ** Please fill the Name field";
        return false;
      }

      if (emails == "") {
        document.getElementById("emailids").innerHTML =
          " ** Please fill the email id field";
        return false;
      }
      if (emails.indexOf("@") <= 0) {
        document.getElementById("emailids").innerHTML = " ** Invalid Email";
        return false;
      }

      if (
        emails.charAt(emails.length - 4) != "." &&
        emails.charAt(emails.length - 3) != "."
      ) {
        document.getElementById("emailids").innerHTML = " ** Invalid Email";
        return false;
      }

      if (pass == "") {
        document.getElementById("passwords").innerHTML =
          " ** Please fill the password field";
        return false;
      }
      if (pass.length <= 5 || pass.length > 20) {
        document.getElementById("passwords").innerHTML =
          " ** Passwords lenght must be between  5 and 20";
        return false;
      }

      if (pass != confirmpass) {
        document.getElementById("confrmpass").innerHTML =
          " ** Password Mismatch";
        return false;
      }

      if (confirmpass == "") {
        document.getElementById("confrmpass").innerHTML =
          " ** Please fill the confirmpassword field";
        return false;
      }
    
    }

