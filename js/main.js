document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Booking form submission
    const bookingForm = document.querySelector('.booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your booking request! We will contact you shortly.');
        });
    }

    // Room booking buttons
    document.querySelectorAll('.book-room-btn').forEach(button => {
        button.addEventListener('click', () => {
            document.querySelector('#booking-form').scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
