document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("userForm");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const colorChangeBtn = document.getElementById("colorChangeBtn");

    // Event Listener for form submission
    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent form submission
        let valid = true;

        // Validate name
        if (nameInput.value.trim() === "") {
            nameError.textContent = "Name is required";
            valid = false;
        } else {
            nameError.textContent = "";
        }

        // Validate email
        if (!emailInput.value.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) {
            emailError.textContent = "Invalid email format";
            valid = false;
        } else {
            emailError.textContent = "";
        }

        if (valid) {
            alert("Form submitted successfully!");
        }
    });

    // Event Listener for color change button
    colorChangeBtn.addEventListener("click", () => {
        document.body.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    });
});