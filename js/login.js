document.getElementById('login-submit').addEventListener('click', function() {
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    console.log(userEmail);

    //user password

    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    console.log(userPassword);
    
    
    if (userEmail == 'moza@gmail.com' && userPassword == 'moza6126') {
        window.location.href = 'banking.html'
    }
})