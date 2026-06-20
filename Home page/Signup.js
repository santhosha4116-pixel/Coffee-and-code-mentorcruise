
var menuBtn = document.getElementById("menuBtn");
var mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", function () {
    mobileMenu.classList.toggle("open");

    if (mobileMenu.classList.contains("open")) {
        menuBtn.innerHTML = "✕";
    } else {
        menuBtn.innerHTML = "☰";
    }
});



var firstNameInput = document.getElementById("firstName");
var lastNameInput  = document.getElementById("lastName");
var emailInput     = document.getElementById("email");
var phoneInput     = document.getElementById("phone");

var firstNameError = document.getElementById("firstNameError");
var lastNameError  = document.getElementById("lastNameError");
var emailError     = document.getElementById("emailError");
var phoneError     = document.getElementById("phoneError");

var form       = document.getElementById("signupForm");
var signupBtn  = document.getElementById("signupBtn");



function checkAllValid() {
    var nameOk  = firstNameInput.classList.contains("input-success");
    var lastOk  = lastNameInput.classList.contains("input-success");
    var emailOk = emailInput.classList.contains("input-success");
    var phoneOk = phoneInput.classList.contains("input-success");

    if (nameOk && lastOk && emailOk && phoneOk) {
        signupBtn.classList.remove("btn-disabled");
        signupBtn.disabled = false;
    } else {
        signupBtn.classList.add("btn-disabled");
        signupBtn.disabled = true;
    }
}


// ===========================
// HELPER FUNCTIONS
// ===========================

function showError(input, errorSpan, message) {
    input.classList.remove("input-success");
    input.classList.add("input-error");
    errorSpan.textContent = message;
}

function showSuccess(input, errorSpan) {
    input.classList.remove("input-error");
    input.classList.add("input-success");
    errorSpan.textContent = "";
}

function clearState(input, errorSpan) {
    input.classList.remove("input-error", "input-success");
    errorSpan.textContent = "";
}


// ===========================
// VALIDATE EACH FIELD
// ===========================

function validateFirstName() {
    var value = firstNameInput.value.trim();
    if (value == "") {
        showError(firstNameInput, firstNameError, "Name is required.");
        return false;
    } else if (value.length < 2) {
        showError(firstNameInput, firstNameError, "Name must be at least 2 characters.");
        return false;
    } else if (value.length > 30) {
        showError(firstNameInput, firstNameError, "Name must be under 30 characters.");
        return false;
    } else {
        showSuccess(firstNameInput, firstNameError);
        return true;
    }
}

function validateLastName() {
    var value = lastNameInput.value.trim();
    if (value == "") {
        showError(lastNameInput, lastNameError, "Last name is required.");
        return false;
    } else if (value.length < 2) {
        showError(lastNameInput, lastNameError, "Last name must be at least 2 characters.");
        return false;
    } else if (value.length > 30) {
        showError(lastNameInput, lastNameError, "Last name must be under 30 characters.");
        return false;
    } else {
        showSuccess(lastNameInput, lastNameError);
        return true;
    }
}

function validateEmail() {
    var value = emailInput.value.trim();
    if (value == "") {
        showError(emailInput, emailError, "Email is required.");
        return false;
    } else if (value.indexOf("@") == -1 || value.indexOf(".") == -1) {
        showError(emailInput, emailError, "Enter a valid email address.");
        return false;
    } else if (value.indexOf("@gmail.com") == -1) {
        showError(emailInput, emailError, "Please enter a Gmail address (@gmail.com).");
        return false;
    } else {
        showSuccess(emailInput, emailError);
        return true;
    }
}

function validatePhone() {
    var value = phoneInput.value.trim();
    if (value == "") {
        showError(phoneInput, phoneError, "Phone number is required.");
        return false;
    }
    var onlyDigits = true;
    for (var i = 0; i < value.length; i++) {
        var char = value[i];
        if (char < "0" || char > "9") {
            onlyDigits = false;
            break;
        }
    }
    if (!onlyDigits) {
        showError(phoneInput, phoneError, "Phone number must contain only digits.");
        return false;
    } else if (value.length != 10) {
        showError(phoneInput, phoneError, "Phone number must be exactly 10 digits.");
        return false;
    } else {
        showSuccess(phoneInput, phoneError);
        return true;
    }
}


// ===========================
// REAL-TIME VALIDATION (keyup)
// Validate as user types, then check button state
// ===========================
firstNameInput.addEventListener("keyup", function() {
    if (firstNameInput.value.trim() != "") {
        validateFirstName();
    } else {
        clearState(firstNameInput, firstNameError);
    }
    checkAllValid();
});

lastNameInput.addEventListener("keyup", function() {
    if (lastNameInput.value.trim() != "") {
        validateLastName();
    } else {
        clearState(lastNameInput, lastNameError);
    }
    checkAllValid();
});

emailInput.addEventListener("keyup", function() {
    if (emailInput.value.trim() != "") {
        validateEmail();
    } else {
        clearState(emailInput, emailError);
    }
    checkAllValid();
});

phoneInput.addEventListener("keyup", function() {
    if (phoneInput.value.trim() != "") {
        validatePhone();
    } else {
        clearState(phoneInput, phoneError);
    }
    checkAllValid();
});

// Validate on blur (when user leaves field)
firstNameInput.addEventListener("blur", function() { validateFirstName(); checkAllValid(); });
lastNameInput.addEventListener("blur",  function() { validateLastName();  checkAllValid(); });
emailInput.addEventListener("blur",     function() { validateEmail();     checkAllValid(); });
phoneInput.addEventListener("blur",     function() { validatePhone();     checkAllValid(); });


// ===========================
// FORM SUBMIT
// ===========================
form.addEventListener("submit", function(event) {
    event.preventDefault();

    var nameOk  = validateFirstName();
    var lastOk  = validateLastName();
    var emailOk = validateEmail();
    var phoneOk = validatePhone();

    if (nameOk && lastOk && emailOk && phoneOk) {
        alert("Signup successful! Welcome to MentorCruise.");
        form.reset();
        clearState(firstNameInput, firstNameError);
        clearState(lastNameInput,  lastNameError);
        clearState(emailInput,     emailError);
        clearState(phoneInput,     phoneError);
        checkAllValid();
    }
});