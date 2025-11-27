const form = document.getElementById("registrationForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");
const ageInput = document.getElementById("age");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");
const ageError = document.getElementById("ageError");

const successMsg = document.getElementById("successMsg");

// Form submit event
form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent default submit
    clearErrors();

    let isValid = validateForm();

    if (isValid) {
        successMsg.classList.remove("hidden");
        form.reset();
    }
});

// Clear error messages
function clearErrors() {
    nameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    confirmPasswordError.textContent = "";
    ageError.textContent = "";
    successMsg.classList.add("hidden");
}

// Validate form fields
function validateForm() {
    let valid = true;

    // Name validation
    if (nameInput.value.trim() === "") {
        nameError.textContent = "Name is required";
        valid = false;
    }

    // Email validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (emailInput.value.trim() === "") {
        emailError.textContent = "Email is required";
        valid = false;
    } else if (!emailInput.value.match(emailPattern)) {
        emailError.textContent = "Invalid email format";
        valid = false;
    }

    // Password validation
    if (passwordInput.value.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters";
        valid = false;
    }

    // Confirm password validation
    if (confirmPasswordInput.value !== passwordInput.value) {
        confirmPasswordError.textContent = "Passwords do not match";
        valid = false;
    }

    // Age validation
    const age = parseInt(ageInput.value);
    if (isNaN(age)) {
        ageError.textContent = "Age is required";
        valid = false;
    } else if (age < 18 || age > 100) {
        ageError.textContent = "Age must be between 18 and 100";
        valid = false;
    }

    return valid;
}
