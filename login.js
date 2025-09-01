
document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login");

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;

        // Fetch from localStorage
        const userData = localStorage.getItem(email);

        if (!userData) {
            Swal.fire({
                icon: "error",
                title: "User Not Found",
                text: "No account registered with this email.",
                confirmButtonColor: "#e74c3c",
              });
            return;
        }

        const user = JSON.parse(userData);

        if (user.password === password) {
            Swal.fire({
                icon: "success",
                title: `Welcome Back, ${user.name}!`,
                text: "Login successful.",
                confirmButtonColor: "#3498db",
              }).then(() => {
                window.location.href = "home.html";
            // You can redirect to student list page
        })} else {
            Swal.fire({
                icon: "error",
                title: "Login Failed",
                text: "Incorrect password. Please try again.",
                confirmButtonColor: "#e74c3c",
              });
        }
    });
});
