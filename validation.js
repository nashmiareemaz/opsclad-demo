document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("demoForm");
  const phoneInput = document.querySelector("#phone");

  const iti = window.intlTelInput(phoneInput, {
    separateDialCode: true,
    utilsScript:
      "https://cdn.jsdelivr.net/npm/intl-tel-input@18.5.2/build/js/utils.js"
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    document.querySelectorAll(".error-text").forEach(el => el.remove());

    let valid = true;

    function error(input, msg) {
      const small = document.createElement("div");
      small.className = "error-text";
      small.innerText = msg;
      input.after(small);
      valid = false;
    }

    if (!name.value) error(name, "Name required");
    if (!email.value.includes("@")) error(email, "Valid email required");
    if (!company.value) error(company, "Company required");
    if (!iti.isValidNumber()) error(phone, "Valid phone required");
    if (!size.value) error(size, "Select company size");

    if (valid) {
      window.open("https://calendly.com/YOUR_CALENDLY_LINK", "_blank");
      setTimeout(() => {
        window.location.href = "success.html";
      }, 1500);
    }
  });
});
