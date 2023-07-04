function validateForm(event) {
    event.preventDefault();
  
    resetErrors();
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    const usernameRegex = /^[A-Za-z0-9]+$/;
    const passwordRegex = /^.{6,}$/;
  
  
    if (!usernameRegex.test(username)) {
      displayError('username', 'Username should only contain letters and numbers');
      isValid = false;
    }
  
    if (!passwordRegex.test(password)) {
      displayError('password', 'Password should have a minimum length of 6 characters');
      isValid = false;
    }
  
    if (isValid) {
      console.log('Login successful');
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
  