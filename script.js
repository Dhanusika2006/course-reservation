const courseForm = document.getElementById("courseForm");
const reservationTable = document.getElementById("reservationTable");

courseForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const course = document.getElementById("course").value;
    const date = document.getElementById("date").value;

    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${name}</td>
        <td>${email}</td>
        <td>${course}</td>
        <td>${date}</td>
        <td><button class="delete-btn">Delete</button></td>
    `;

    reservationTable.appendChild(row);

    courseForm.reset();

    row.querySelector(".delete-btn").addEventListener("click", function() {
        row.remove();
    });
});