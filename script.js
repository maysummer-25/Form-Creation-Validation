document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById("registration-form");
  const feedbackDiv = document.getElementById("form-feedback");

  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    feedbackDiv.innerHTML = ""; // Clear previous messages
    feedbackDiv.style.display = "block";

    let isValid = true;
    const messages = []; // Array to collect error messages

    //Validate username
    const usernameInput = document.getElementById("username").value.trim();
    const username = usernameInput.length;

    if (username < 3) {
      messages.push("Username must be at least 3 characters long.");
      isValid = false;
    } 

    //Validate email
    const emailInput = document.getElementById("email").value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(emailInput)) {
      messages.push("Please enter a valid email address.");
      isValid = false;
    }
    
    //Validate password
    const passwordInput = document.getElementById("password").value.trim();
    const password = passwordInput.length;

    if (password < 8) {
      messages.push("Password must be 8 characters long.");
      isValid = false;
    } 

    // If invalid, show all messages
    if (!isValid) {
      feedbackDiv.innerHTML = messages.join("<br>");
      feedbackDiv.style.color = "#dc3545";
    } else {
      feedbackDiv.textContent = "Registration successful!";
      feedbackDiv.style.color = "#28a745";
      form.submit(); // Now submit only if all checks passed
    }
  });
});