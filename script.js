document.addEventListener('DOMContentLoaded', function() {
    const datePicker = document.getElementById('datePicker');
    const timeSlots = document.getElementById('timeSlots');
    const selectedSlot = document.getElementById('selectedSlot');
    const slotText = document.getElementById('slotText');

    const today = new Date();
    const minDate = today.toISOString().split('T')[0];
    const maxDate = new Date(today.setDate(today.getDate() + 7)).toISOString().split('T')[0];
    
    datePicker.setAttribute('min', minDate);
    datePicker.setAttribute('max', maxDate);

    datePicker.addEventListener('change', function() {
        timeSlots.classList.remove('hidden');
        selectedSlot.classList.add('hidden');
    });
});

function selectTimeSlot(slot) {
    const slotText = document.getElementById('slotText');
    const selectedSlot = document.getElementById('selectedSlot');
    slotText.textContent = slot;
    selectedSlot.classList.remove('hidden');
}
