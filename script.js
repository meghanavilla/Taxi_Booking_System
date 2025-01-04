document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const pickup = document.getElementById('pickup').value;
    const dropoff = document.getElementById('dropoff').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    const confirmationMessage = `Thank you, ${name}. Your taxi has been booked from ${pickup} to ${dropoff} on ${date} at ${time}. We will contact you at ${phone}.`;
    
    document.getElementById('confirmationMessage').innerText = confirmationMessage;
    document.getElementById('confirmation').classList.remove('hidden');
    document.getElementById('bookingForm').reset();
});
