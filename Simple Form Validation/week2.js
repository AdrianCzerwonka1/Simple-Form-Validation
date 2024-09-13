//getting the elements 
function validateForm() {
    // Clear previous error messages
    document.getElementById("fn-error").innerText = "";
    document.getElementById("ln-error").innerText = "";
    document.getElementById("email-error").innerText = "";
    document.getElementById("phone-error").innerText = "";

    // Get the form values
    var firstName = document.getElementById("first-name").value;
    var lastName = document.getElementById("last-name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;

    // Regex patterns for validation
    var namePattern = /^[a-zA-Z\s]+$/; // Only letters and spaces
    var emailPattern = /^[\w\.-]+@[\w\.-]+\.\w{2,}$/; // Basic email pattern
    var phonePattern = /^\+?\d{10,15}$/; // 10-15 digits, optional +

    // Flag to track if all fields are valid
    var isValid = true;

    // Validate first name
    if (!firstName.match(namePattern)) {
        document.getElementById("fn-error").innerText = "Invalid first name";
        isValid = false;
    }
    if (firstName === "") {
        document.getElementById("fn-error").innerText = "First name is required";
        isValid = false;
    }

    // Validate last name
    if (!lastName.match(namePattern)) {
        document.getElementById("ln-error").innerText = "Invalid last name";
        isValid = false;
    }
    if (lastName === "") {
        document.getElementById("ln-error").innerText = "Last name is required";
        isValid = false;
    }

    // Validate email
    if (!email.match(emailPattern)) {
        document.getElementById("email-error").innerText = "Invalid email format";
        isValid = false;
    }
    if (email === "") {
        document.getElementById("email-error").innerText = "Email is required";
        isValid = false;
    }

    // Validate phone
    if (!phone.match(phonePattern)) {
        document.getElementById("phone-error").innerText = "Invalid phone number";
        isValid = false;
    }
    if (phone === "") {
        document.getElementById("phone-error").innerText = "Phone number is required";
        isValid = false;
    }

    // If the form is valid, show the confirmation
    if (isValid) {
        var validinfo = `
            First Name: ${firstName}<br />
            Last Name: ${lastName}<br />
            Email: ${email}<br />
            Phone Number: ${phone}
        `;
        document.getElementById("info").innerHTML = validinfo;
        document.getElementById("confirmation").classList.remove("hidden");
    }
}

// Attach the event listener to the button when the DOM is loaded
window.onload = function() {
    let buttonsubmit = document.getElementById('submitbutton');
    buttonsubmit.addEventListener("click", validateForm);
};