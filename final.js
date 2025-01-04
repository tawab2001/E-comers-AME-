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
      showError("firstnameError", "First name must be at least 3 characters.");
      isValid = false;
  }

  if (lastname.length < 3) {
      showError("lastnameError", "Last name must be at least 3 characters.");
      isValid = false;
  }
  
  if (address.length < 3) {
      showError("addressError", "Address must be at least 3 characters.");
      isValid = false;
  }

  // Email validation
  let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailPattern.test(email)) {
      showError("emailError", "Please enter a valid email address.");
      isValid = false;
  }


  let passwordPattern = /^([A-Za-z]{1,}\s)([A-Za-z]{1,}\s)*$/;
  if (!passwordPattern.test(password)) {
      showError("passwordError", "Please enter a valid password address.");
      isValid = false;
  }


  // 
//   if (password.length < 6) {
//       showError("passwordError", "Password must be at least 6 characters.");
//       isValid = false;
//   }
  
  // Password confirmation validation
  if (password !== confirmPassword) {
      showError("confirmPasswordError", "Passwords do not match.");
      isValid = false;
  }
  
  // If form is valid, save data in localStorage
  if (isValid) {
      saveToLocalStorage(firstname, lastname, address, email, password);
  }
  
  return isValid;
}

function showError(id, message) {
  let errorElement = document.getElementById(id);
  errorElement.textContent = message;
}

function clearErrors() {
  let errorElements = document.querySelectorAll(".error");
  errorElements.forEach((element) => {
      element.textContent = "";
  });
}

// Function to save form data to local storage
function saveToLocalStorage(firstname, lastname, address, email, password) {
  // Store the user data in localStorage as an object
  let userData = {
      firstname: firstname,
      lastname: lastname,
      address: address,
      email: email,
      password: password
  };

  // Convert the user data object to a JSON string
  localStorage.setItem("userData", JSON.stringify(userData));

  // Optionally, you can display a success message or do something after storing data
  alert("Data has been saved successfully!");
}





  
  
