function validateForm(event) {
    event.preventDefault();
  
    resetErrors();
  
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const address = document.getElementById('address').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const mobile = document.getElementById('mobile').value;
  

    const nameRegex = /^[A-Za-z]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobileRegex = /^\d{10}$/;
  
    let isValid = true;
  
    if (firstName.length < 6 || !nameRegex.test(firstName)) {
      displayError('firstName', 'First name should contain alphabets and have a minimum length of 6 characters');
      isValid = false;
    }
  
    if (lastName.trim() === '') {
      displayError('lastName', 'Last name cannot be empty');
      isValid = false;
    }
  
    if (address.trim() === '') {
      displayError('address', 'Address cannot be empty');
      isValid = false;
    }
  
    if (!emailRegex.test(email)) {
      displayError('email', 'Invalid email address');
      isValid = false;
    }
  
    if (password.length < 6) {
      displayError('password', 'Password should have a minimum length of 6 characters');
      isValid = false;
    }
  
    if (!mobileRegex.test(mobile)) {
      displayError('mobile', 'Invalid mobile number');
      isValid = false;
    }
  
    if (isValid) {
      document.getElementById('registrationForm').submit();
    }
  }
  
  function displayError(fieldId, errorMessage) {
    const errorElement = document.createElement('span');
    errorElement.className = 'error';
    errorElement.textContent = errorMessage;
  
    const field = document.getElementById(fieldId);
    field.parentNode.insertBefore(errorElement, field.nextSibling);
  }
  
  function resetErrors() {
    const errorElements = document.getElementsByClassName('error');
    while (errorElements[0]) {
      errorElements[0].parentNode.removeChild(errorElements[0]);
    }
  }
  