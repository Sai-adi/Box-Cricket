document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const selectedDate = urlParams.get('date');
    const selectedTimeSlot = urlParams.get('timeSlot');

    const heading = document.getElementById("selected-date-time");
    heading.textContent = `Selected Date: ${selectedDate}, Time Slot: ${selectedTimeSlot}`;

    document.getElementById("registration-form").addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const regNumber = document.getElementById("reg-number").value;
        const department = document.getElementById("department").value;
        const mobile = document.getElementById("mobile").value;

        if (!/^[A-Za-z0-9]{1,10}$/.test(regNumber)) {
            alert("Register number must be alphanumeric and up to 10 characters long.");
            return;
        }

        if (!/^\d{10}$/.test(mobile)) {
            alert("Mobile number must be exactly 10 digits.");
            return;
        }

        const confirmationMessage = `
            <h1>Registration Successful!</h1>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Register Number:</strong> ${regNumber}</p>
            <p><strong>Department:</strong> ${department}</p>
            <p><strong>Mobile Number:</strong> ${mobile}</p>
            <p><strong>Selected Date:</strong> ${selectedDate}</p>
            <p><strong>Selected Time Slot:</strong> ${selectedTimeSlot}</p>
        `;

        const container = document.querySelector('.container');
        container.innerHTML = confirmationMessage;
        container.classList.add('confirmation');
    });
});
