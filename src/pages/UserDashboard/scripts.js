document.getElementById('departure').addEventListener('change', function() {
    const departure = this.value;
    const destinationSelect = document.getElementById('destination');
    const destinations = ['حمص', 'حلب', 'دمشق'];
    destinationSelect.innerHTML = '<option value="" disabled selected>اختر محطة الوجهة</option>';
    destinations.forEach(destination => {
        if (destination !== departure) {
            const option = document.createElement('option');
            option.value = destination;
            option.text = destination;
            destinationSelect.add(option);
        }
    });
});

document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    nextPage();
});

let currentPage = 1;

function nextPage() {
    const currentPageElement = document.getElementById(`page-${currentPage}`);
    currentPageElement.classList.remove('active');
    if (currentPage < 3) {
        currentPage++;
    }
    const nextPageElement = document.getElementById(`page-${currentPage}`);
    nextPageElement.classList.add('active');
    updateProgressBar();

    if (currentPage === 3) {
        displayConfirmation();
    }
}

function prevPage() {
    const currentPageElement = document.getElementById(`page-${currentPage}`);
    currentPageElement.classList.remove('active');
    if (currentPage > 1) {
        currentPage--;
    }
    const prevPageElement = document.getElementById(`page-${currentPage}`);
    prevPageElement.classList.add('active');
    updateProgressBar();
}

function updateProgressBar() {
    const steps = document.querySelectorAll('.progress-bar .step');
    steps.forEach((step, index) => {
        if (index < currentPage) {
            step.classList.add('completed');
            step.classList.remove('active');
        } else if (index === currentPage - 1) {
            step.classList.add('active');
            step.classList.remove('completed');
        } else {
            step.classList.remove('active');
            step.classList.remove('completed');
        }
    });
}

function displayConfirmation() {
    const name = document.getElementById('name').value;
    const departure = document.getElementById('departure').value;
    const destination = document.getElementById('destination').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const stop = document.getElementById('stop').value;
    const nationalId = document.getElementById('national-id').value;
    const seats = document.getElementById('seats').value;

    document.getElementById('confirmation-name').innerText = name;
    document.getElementById('confirmation-departure').innerText = departure;
    document.getElementById('confirmation-destination').innerText = destination;
    document.getElementById('confirmation-date').innerText = date;
    document.getElementById('confirmation-time').innerText = time;
    document.getElementById('confirmation-stop').innerText = stop;
    document.getElementById('confirmation-national-id').innerText = nationalId;
    document.getElementById('confirmation-seats').innerText = seats;
}

function confirmBooking() {
    const ticketNumber = Math.floor(Math.random() * 100000);
    const busNumber = Math.floor(Math.random() * 100);
    const departureTime = document.getElementById('time').value;

    alert(`تم تأكيد الحجز!\n\nرقم الرحلة: ${ticketNumber}\nرقم الباص: ${busNumber}\nتوقيت الرحلة: ${departureTime}`);
}

document.addEventListener('DOMContentLoaded', function() {
    updateProgressBar();
});

document.querySelectorAll('.progress-bar .step').forEach(step => {
    step.addEventListener('click', function() {
        const stepIndex = parseInt(this.getAttribute('data-step'));
        if (stepIndex <= currentPage) {
            currentPage = stepIndex;
            document.querySelectorAll('.page').forEach(page => {
                page.classList.remove('active');
            });
            document.getElementById(`page-${currentPage}`).classList.add('active');
            updateProgressBar();
        }
    });
});
