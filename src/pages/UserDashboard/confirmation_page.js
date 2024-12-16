<!DOCTYPE html>
<html lang="ar">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>صفحة التأكيد</title>
    <!-- <link rel="stylesheet" href="styles.css"> -->
    <link rel="stylesheet" href="styles-confirmation.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/parse/3.3.0/parse.min.js"></script>
</head>
<body>
    <nav>
        <ul>
            <li><a href="user_dashboard.html">الرئيسية</a></li>
            <li><a href="reservations.html" target="_blank">حجوزاتي</a></li>
            <li><a href="#">مساعدة وتعليمات</a></li>
        </ul>
    </nav>

    <div class="container">
        <h1>معلومات الحجز</h1>
        <div id="reservation-details">
            <p>الاسم: <span id="confirmation-name"></span></p>
            <p>محطة الانطلاق: <span id="confirmation-departure"></span></p>
            <p>محطة الوجهة: <span id="confirmation-destination"></span></p>
            <p>تاريخ الرحلة: <span id="confirmation-date"></span></p>
            <p>توقيت الرحلة: <span id="confirmation-trip"></span></p>
            <p>الرقم الوطني: <span id="confirmation-national-id"></span></p>
            <p>عدد المقاعد: <span id="confirmation-seats"></span></p>
            <p>رقم الرحلة: <span id="confirmation-trip-number"></span></p>
            <p>رقم الباص: <span id="confirmation-bus-number"></span></p>
        </div>
        <a href="user_dashboard.html">العودة الى الصفحة الشخصية</a> | <a href="reservations.html">حجوزاتي</a>
    </div>

    <script>
        Parse.initialize("4PQmzoc4qvrK8L21r91x2WebagCoXXdxxsbxlLzu", "qxtI4vBiDsXvkK7DjGRIywVRhLOqgEW4v5ThoEaN");
        Parse.serverURL = 'https://parseapi.back4app.com/parse';

        document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const reservationId = urlParams.get('reservationId');

    if (reservationId) {
        const query = new Parse.Query('Reservation');
        query.get(reservationId).then((reservation) => {
            document.getElementById('confirmation-name').textContent = reservation.get('name');
            document.getElementById('confirmation-departure').textContent = reservation.get('departure');
            document.getElementById('confirmation-destination').textContent = reservation.get('destination');
            document.getElementById('confirmation-date').textContent = reservation.get('date');
            document.getElementById('confirmation-trip').textContent = reservation.get('tripTime');
            document.getElementById('confirmation-national-id').textContent = reservation.get('nationalId');
            document.getElementById('confirmation-seats').textContent = reservation.get('seats');
            document.getElementById('confirmation-trip-number').textContent = reservation.get('tripNumber');
            document.getElementById('confirmation-bus-number').textContent = reservation.get('busNumber');
        }).catch((error) => {
            console.error('Error fetching reservation: ', error);
            alert('حدث خطأ أثناء جلب بيانات الحجز.');
        });
    } else {
        alert('لا يوجد حجز مؤكد.');
    }
});


    
    </script>
</body>
</html>
