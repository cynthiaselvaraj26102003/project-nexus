document.addEventListener("DOMContentLoaded", function() {
    var loginForm = document.getElementById("login-form");
    var signupForm = document.getElementById("signup-form");

    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent the form from submitting normally
            
            var emailInput = document.getElementById("login-email").value;
            var passwordInput = document.getElementById("login-password").value;

            alert("Login Details:\nEmail: " + emailInput + "\nPassword: " + passwordInput);
        });
    }

    if (signupForm) {
        signupForm.addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent the form from submitting normally
            
            var usernameInput = document.getElementById("signup-username").value;
            var emailInput = document.getElementById("signup-email").value;
            var passwordInput = document.getElementById("signup-password").value;

            alert("Signup Details:\nUsername: " + usernameInput + "\nEmail: " + emailInput + "\nPassword: " + passwordInput);
        });
    }
});
