
// Get the registration form
const registrationForm = document.getElementById("registrationForm");

// Get the message area
const message = document.getElementById("message");

// Listen for form submission
registrationForm.addEventListener("submit", function(event) {

    // Prevent the page from refreshing
    event.preventDefault();

    // Get the values entered by the student
    const fullname = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const department = document.getElementById("department").value;
    const course = document.getElementById("course").value.trim();

    // Check that all fields are completed
    if (!fullname || !email || !phone || !department || !course) {
        message.textContent = "Please fill in all fields.";
        message.style.color = "red";
        return;
    }

    // Check email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        message.textContent = "Please enter a valid email address.";
        message.style.color = "red";
        return;
    }

    // Check that phone number contains digits only
    const phonePattern = /^\d+$/;

    if (!phonePattern.test(phone)) {
        message.textContent = "Phone number must contain digits only.";
        message.style.color = "red";
        return;
    }

    // Display successful registration message
    message.textContent = "Registration successful! Welcome, " + fullname + ".";
    message.style.color = "green";

    // Clear the form
    registrationForm.reset();

});
