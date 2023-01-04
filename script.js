const container = document.querySelector(".container"),
      pwShowHide = document.querySelectorAll(".showHidePw"),
      pwFields = document.querySelectorAll(".password"),
      signUp = document.querySelector(".signup-link"),
      login = document.querySelector(".login-link");

    //   js code to show/hide password and change icon
    pwShowHide.forEach(eyeIcon =>{
        eyeIcon.addEventListener("click", ()=>{
            pwFields.forEach(pwField =>{
                if(pwField.type ==="password"){
                    pwField.type = "text";

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye-slash", "uil-eye");
                    })
                }else{
                    pwField.type = "password";

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye", "uil-eye-slash");
                    })
                }
            }) 
        })
    })

    // js code to appear signup and login form
    signUp.addEventListener("click", ( )=>{
        container.classList.add("active");
    });
    login.addEventListener("click", ( )=>{
        container.classList.remove("active");
    });



    function validation() {
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        var confirmpassword = document.getElementById("confirmpassword").value;
       
        if (name == "") {
          document.getElementById("Name").innerHTML =
            " ** Please fill the Name field";
          return false;
        }
    
        if (email == "") {
          document.getElementById("Email").innerHTML =
            " ** Please fill the email id field";
          return false;
        }
        if (email.indexOf("@") <= 0) {
          document.getElementById("Email").innerHTML = " ** Invalid Email";
          return false;
        }
    
        if (
          email.charAt(email.length - 4) != "." &&
          email.charAt(email.length - 3) != "."
        ) {
          document.getElementById("Email").innerHTML = " ** Invalid Email";
          return false;
        }
    
        if (password == "") {
          document.getElementById("Pass").innerHTML =
            " ** Please fill the Password field";
          return false;
        }
        if (password.length <= 8 || password.length > 12) {
          document.getElementById("Pass").innerHTML =
            " ** Password lenght must be between 8 and 12";
          return false;
        }

        if(confirmpassword === '') {
            document.getElementById("Cpass").innerHTML =
            " ** Please fill the confirm Password field";
          return false;
        } else if (password !== confirmpassword) {
            document.getElementById("Cpass").innerHTML=  
            " ** Passwords doesn't match";
        } 
    }
    function validations(){

        var emailAdress = document.getElementById("emailAdress").value;
        var passwordVerfy = document.getElementById("passwordVerfy").value;
  
        if (emailAdress == "") {
            document.getElementById("EmailAdress").innerHTML =
              " ** Please fill the email id field";
            return false;
          }
          if (emailAdress.indexOf("@") <= 0) {
            document.getElementById("EmailAdress").innerHTML = " ** Invalid Email";
            return false;
          }
      
          if (
            emailAdress.charAt(emailAdress.length - 4) != "." &&
            emailAdress.charAt(emailAdress.length - 3) != "."
          ) {
            document.getElementById("EmailAdress").innerHTML = " ** Invalid Email";
            return false;
          }
   

          if (passwordVerfy == "") {
            document.getElementById("PasswordVerfy").innerHTML =
              " ** Please fill the Password field";
            return false;
          }
          if (passwordVerfy.length <= 8 || passwordVerfy.length > 12) {
            document.getElementById("PasswordVerfy").innerHTML =
              " ** Password lenght must be between 8 and 12";
            return false;
          }
  

    }
    
