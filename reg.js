
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // prevent refresh

        // Get values
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;
        const contact = document.getElementById("contact").value.trim();

        // Validation
        if (name === "" || email === "" || password === "" || confirmPassword === "" || contact === "") {
            alert("Please fill in all fields.");
            return;
        }

        const nameVal = /^[A-Za-z ]{3,}$/;
        if (!nameVal.test(name)) {
            alert("Invalid. Name must be atleast 3 Alphabets");
            return;
        }

        const passwordVal = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!passwordVal.test(password)) {
            alert("Password must be 8+ chars and atleast one uppercase, lowercase, number, and special character.");
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert("Invalid email format.");
            return;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        const contactPattern = /^[0-9]{10}$/;
        if (!contactPattern.test(contact)) {
            alert("Contact number must be 10 digits.");
            return;
        }

        // ✅ Save data in localStorage
        const user = {
            name: name,
            email: email,
            password: password,
            contact: contact
        };

        // Convert to string before saving
        localStorage.setItem(email, JSON.stringify(user));

        Swal.fire({
            icon: 'success',
            title: 'Registration Successful!',
            text: 'Your account has been created',
            confirmButtonColor: '#3498db'
          }).then(()=>{
                window.location.href = "login.html"
          });
    });
});
