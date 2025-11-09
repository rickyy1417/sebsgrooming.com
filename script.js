//For the form, prints a message.
function handleBooking() {
  alert("Thank you for your booking! We will contact you soon.");
  document.getElementById("bookingForm").reset();
  return false;
}

document.addEventListener('DOMContentLoaded', () => {
  const bookingForm = document.getElementById('bookingForm');
  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      handleBooking();
    });
  }
});