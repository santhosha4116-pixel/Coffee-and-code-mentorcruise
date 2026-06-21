
function validateForm() {

  const firstName = document.getElementById("firstName").value.trim();
  const lastName  = document.getElementById("lastName").value.trim();
  const email     = document.getElementById("email").value.trim();
  const message   = document.getElementById("message").value.trim();

  clearErrors();

  let isValid = true;

  if (firstName === "") {
    showError("firstNameError");
    isValid = false;
  }

  if (lastName === "") {
    showError("lastNameError");
    isValid = false;
  }

  const gmailRegex = /^[a-zA-Z0-9._%+\-]+@gmail\.com$/;
  if (!gmailRegex.test(email)) {
    showError("emailError");
    isValid = false;
  }

  if (message.length < 10) {
    showError("messageError");
    isValid = false;
  }

  if (isValid) {
    document.getElementById("successMsg").classList.remove("hidden");

    setTimeout(() => {
      document.getElementById("firstName").value = "";
      document.getElementById("lastName").value  = "";
      document.getElementById("email").value     = "";
      document.getElementById("message").value   = "";
      document.getElementById("successMsg").classList.add("hidden");
    }, 3000);
  }
}

function showError(id) {
  const el = document.getElementById(id);
  if (el) el.classList.remove("hidden");
}

function clearErrors() {
  const errors = ["firstNameError", "lastNameError", "emailError", "messageError"];
  errors.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.add("hidden");
  });
  // Also hide success message when revalidating
  document.getElementById("successMsg").classList.add("hidden");
}