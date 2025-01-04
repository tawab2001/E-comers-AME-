

document.getElementById('sign-in-form').addEventListener('submit', function(event) {
    event.preventDefault();

   
    document.getElementById('email-error').textContent = '';
    document.getElementById('password-error').textContent = '';

   
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    let formIsValid = true;

    
    if (!email) {
        formIsValid = false;
        document.getElementById('email-error').textContent = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        formIsValid = false;
        document.getElementById('email-error').textContent = 'Please enter a valid email address.';
    }

   
    if (!password) {
        formIsValid = false;
        document.getElementById('password-error').textContent = 'Password is required.';
    } else if (password.length < 6) {
        formIsValid = false;
        document.getElementById('password-error').textContent = 'Password must be at least 6 characters.';
    }

   
    if (formIsValid) {
       
        localStorage.setItem('email', email);
        // localStorage.setItem('password', password);  

        
        alert('Form submitted successfully!');

      
    }

    fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => {
        console.log('Response 1:', data);
    })
    .catch(error => console.error('Error:', error));

});
