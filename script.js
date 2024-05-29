document.addEventListener("DOMContentLoaded",() => {
    const form = document.querySelector("#signUpForm");
    const emailInput = document.querySelector("#email");
    const password = document.querySelector("#password");
    const confirm_password = document.querySelector("#confirm_password");
    const togglePasswordBtn = document.querySelector("#togglePassword");

    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    let timeout;

    form.addEventListener('submit', (e) => {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(emailInput.value)) {
            e.preventDefault();
            emailInput.setCustomValidity("Please enter a valid email address.");
        } else {
            emailInput.setCustomValidity("");
        }
    });

    emailInput.addEventListener("input", () => {
        emailInput.setCustomValidity("");
    });

    form.addEventListener('submit', (e) => {
        if (!passwordPattern.test(password.value)) {
            e.preventDefault();
            password.setCustomValidity("Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a number, and a special character.");
        } else if(password.value !== confirm_password.value){
            e.preventDefault();
            confirm_password.setCustomValidity("Passowrds do not match");
        } else {
            confirm_password.setCustomValidity("");
        }
    });

    password.addEventListener("input", ()=> {
        if (!passwordPattern.test(password.value)) {
            password.setCustomValidity("Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a number, and a special character.");
        } else {
            password.setCustomValidity("");
        }
        confirm_password.setCustomValidity(password.value !== confirm_password.value ? "Passwords do not match" : "");
    });

    confirm_password.addEventListener("input", ()=> {
        confirm_password.setCustomValidity(password.value !== confirm_password.value ? "Passwords do not match" : "");
    });

    togglePasswordBtn.addEventListener("click", () => {
        if (password.type === "password") {
            password.type = "text";
            confirm_password.type = "text";
            togglePasswordBtn.textContent = "Hide Password";

            // Set a timeout to revert the password field back to "password" after 5 seconds
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                password.type = "password";
                confirm_password.type = "password";
                togglePasswordBtn.textContent = "Show Password";
            }, 5000);
        } else {
            password.type = "password";
            confirm_password.type = "password";
            togglePasswordBtn.textContent = "Show Password";
        }
    });
});