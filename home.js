
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const regno = document.getElementById("regno").value.trim();
        const mark1 = document.getElementById("mark1").value;
        const mark2 = document.getElementById("mark2").value;
        const mark3 = document.getElementById("mark3").value;

        if (name === "" || regno === "" || mark1 === "" || mark2 === "" || mark3 === "") {
            Swal.fire({
                icon: "warning",
                title: "Missing Fields",
                text: "Please fill all details.",
                confirmButtonColor: "#f39c12",
              });
            return;
        }

        const total = Number(mark1) + Number(mark2) + Number(mark3);
        const average = (Number(total) / 3).toFixed(2);

        // Create student object
        const student = {
            name: name,
            regno: regno,
            mark1: parseInt(mark1),
            mark2: parseInt(mark2),
            mark3: parseInt(mark3),
            total,
            average
        };

        // Get existing students or create new array
        let students = JSON.parse(localStorage.getItem("students")) || [];

        // Add new student
        students.push(student);

        // Save back to localStorage
        localStorage.setItem("students", JSON.stringify(students));

        Swal.fire({
            icon: "success",
            title: "Record Added",
            text: "Student marks have been saved successfully.",
            confirmButtonColor: "#27ae60",
          }).then(() => {
            window.location.href = "stdlist.html";
          });

    });
});
