document.getElementById('hotelBookingForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const checkIn = document.getElementById('checkIn').value;
    const checkOut = document.getElementById('checkOut').value;
    const roomType = document.getElementById('roomType').value;
    const guests = document.getElementById('guests').value;

    // Check if all fields are filled
    if (!fullName || !email || !checkIn || !checkOut || !roomType || !guests) {
        alert('Please fill in all fields.');
        return;
    }

    // Corrected string template
    const confirmationMessage = `Thank you, ${fullName}! Your booking details:\n\n
        Email: ${email}\n
        Check-in Date: ${checkIn}\n
        Check-out Date: ${checkOut}\n
        Room Type: ${roomType}\n
        Number of Guests: ${guests}`;

    // Show confirmation details
    const confirmationSection = document.getElementById('confirmationMessage');
    const confirmationDetails = document.getElementById('confirmationDetails');

    confirmationDetails.textContent = confirmationMessage;
    confirmationSection.style.display = 'block';

    // Reset form
    this.reset();
});
