const form = document.getElementById('contact-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
    if (name && email && phone && message) {
        alert('Thank you for contacting us! We will respond to your message soon.');
        form.reset();
    } else {
        alert('Please fill in all required fields.');
    }
});