// stdlist.js

document.addEventListener("DOMContentLoaded", function () {
    const tbody = document.querySelector("table tbody");

    // Function to load students into table
    function loadStudents() {
        const students = JSON.parse(localStorage.getItem("students")) || [];
        tbody.innerHTML = "";

        students.forEach((student, index) => {
            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${student.name}</td>
                <td>${student.regno}</td>
                <td>${student.mark1}</td>
                <td>${student.mark2}</td>
                <td>${student.mark3}</td>
                <td>${student.total}</td>
                <td>${student.average}</td>
                <td>
                    <button class="deleteBtn" data-index="${index}">Delete</button>
                </td>
            `;

            tbody.appendChild(row);
        });

        // Attach delete event to all buttons
        document.querySelectorAll(".deleteBtn").forEach(button => {
            button.addEventListener("click", function () {
                const idx = this.getAttribute("data-index");

                let students = JSON.parse(localStorage.getItem("students")) || [];
                students.splice(idx, 1); // remove student at index

                localStorage.setItem("students", JSON.stringify(students));
                loadStudents(); // reload table
            });
        });
    }

    loadStudents(); // initial load
});
