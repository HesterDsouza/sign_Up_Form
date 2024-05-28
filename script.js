document.addEventListener("DOMContentLoaded",() => {
    const form = document.querySelector("#signUpForm");
    const password = document.querySelector("#password");
    const confirm_password = document.querySelector("#confirm_password");

    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

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
});