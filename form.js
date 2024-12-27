function validateForm() {
    let isValid = true;
    let firstname = document.getElementById("firstname").value;
    let lastname = document.getElementById("lastname").value;
    let address = document.getElementById("address").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
  
    // Clear previous errors
    clearErrors();
  
    // Username validation
    if (firstname.length < 3) {
      showError("firstnameError", "firstname must be at least 3 characters.");
      isValid = false;
    }

    if (lastname.length < 3) {
      showError("lastnameError", "lastname must be at least 3 characters.");
      isValid = false;
    }
    
    if (address.length < 3) {
      showError("adressError", "address must be at least 3 characters.");
      isValid = false;
    }
  
  
    // Email validation
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
      showError("emailError", "Please enter a valid email address.");
      isValid = false;
    }
    // Password validation
    if (password.length < 6) {
        showError("passwordError", "Password must be at least 6 characters.");
        isValid = false;
      }
    
      // Password confirmation validation
      if (password !== confirmPassword) {
        showError("confirmPasswordError", "Passwords do not match.");
        isValid = false;
      }
    
      return isValid;
}
  
  function showError(id, message) {
    const errorElement = document.getElementById(id);
    errorElement.textContent = message;
  }
  
  function clearErrors() {
    const errorElements = document.querySelectorAll(".error");
    errorElements.forEach((element) => {
      element.textContent = "";
    });
  }





  
  
