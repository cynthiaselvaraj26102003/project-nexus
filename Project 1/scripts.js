document.addEventListener("DOMContentLoaded", function() {
    const loginToggle = document.getElementById("login-toggle");
    const signupToggle = document.getElementById("signup-toggle");
    const loginForm = document.getElementById("login-form");
    const signupForm = document.getElementById("signup-form");
    const errorMessage = document.getElementById("error-message");

    loginToggle.addEventListener("click", function() {
        loginForm.classList.add("active");
        signupForm.classList.remove("active");
        loginToggle.classList.add("active");
        signupToggle.classList.remove("active");
    });

    signupToggle.addEventListener("click", function() {
        signupForm.classList.add("active");
        loginForm.classList.remove("active");
        signupToggle.classList.add("active");
        loginToggle.classList.remove("active");
    });

    signupForm.addEventListener("submit", function(e) {
        e.preventDefault();
        const password = document.getElementById("signup-password").value;
        const confirmPassword = document.getElementById("signup-confirm-password").value;

        if (password !== confirmPassword) {
            errorMessage.textContent = "Passwords do not match!";
        } else {
            errorMessage.textContent = "";
            // Perform signup logic
            alert("Signup successful!");
        }
    });

    loginForm.addEventListener("submit", function(e) {
        e.preventDefault();
        // Perform login logic
        alert("Login successful!");
    });
});
