document.addEventListener("DOMContentLoaded", function () {
    const dateInput = document.getElementById("date");

    // Set the date limits
    const today = new Date();
    const maxDate = new Date();
    maxDate.setDate(today.getDate() + 7);

    const formattedToday = today.toISOString().split('T')[0];
    const formattedMaxDate = maxDate.toISOString().split('T')[0];

    dateInput.setAttribute("min", formattedToday);
    dateInput.setAttribute("max", formattedMaxDate);

    document.getElementById("date-time-form").addEventListener("submit", function (event) {
        event.preventDefault();
        const selectedDate = dateInput.value;
        const selectedTimeSlot = document.querySelector('input[name="time-slot"]:checked').value;
        const queryParams = `date=${selectedDate}&timeSlot=${encodeURIComponent(selectedTimeSlot)}`;
        window.location.href = `../Details Page/index.html?${queryParams}`;
    });
});
