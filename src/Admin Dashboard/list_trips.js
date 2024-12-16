<!DOCTYPE html>
<html lang="ar">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>عرض قائمة الرحلات</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="list_trips.css">
</head>
<body>

    <div class="burger-icon">
        <i class="fa fa-bars"></i>
    </div>
    
    <div class="sidebar">
        <div class="sidebar-header">
            <h2>لوحة التحكم</h2>
        </div>
        <ul class="sidebar-menu">
            <li><a href="add_new_trip.html">أضف رحلة جديدة</a></li>
            <li><a href="edit_trip_info.html">عدل بيانات رحلة</a></li>
            <li><a href="list_trips.html">عرض قائمة الرحلات</a></li>
            <li><a href="clients.html">العملاء</a></li>
        </ul>
    </div>

    <div class="content">
        <div class="container">
            <h2>عرض قائمة الرحلات</h2>
            <table id="trips-table">
                <thead>
                    <tr>
                        <th>محطة الانطلاق</th>
                        <th>محطة الوجهة</th>
                        <th>تاريخ الرحلة</th>
                        <th>الأوقات المتاحة</th>
                    </tr>
                </thead>
                <tbody id="trips-table-body"></tbody>

            </table>
        </div>
    </div>

    <script src="https://unpkg.com/parse/dist/parse.min.js"></script>
    <script>
                // MONGO DB 
        Parse.initialize("4PQmzoc4qvrK8L21r91x2WebagCoXXdxxsbxlLzu", "qxtI4vBiDsXvkK7DjGRIywVRhLOqgEW4v5ThoEaN");
        Parse.serverURL = 'https://parseapi.back4app.com/parse';


        const Trip = Parse.Object.extend("Trip");
        const query = new Parse.Query(Trip);

        // Fetch trips from Parse Server
        query.find().then((trips) => {
            const tableBody = document.getElementById('trips-table-body');
            trips.forEach((trip) => {
                const departure = trip.get('departure');
                const destination = trip.get('destination');
                const date = trip.get('date').toLocaleDateString('ar-EG'); // Adjust date format as needed
                const times = trip.get('times').join(', ');

                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${departure}</td>
                    <td>${destination}</td>
                    <td>${date}</td>
                    <td>${times}</td>
                `;
                tableBody.appendChild(row);
            });
            }) .catch((error) => {
             console.error('Error fetching trips: ', error);
             alert('حدث خطأ أثناء جلب الرحلات');
            });

            document.querySelector('.burger-icon').addEventListener('click', function() {
            document.querySelector('.sidebar').classList.toggle('active');
        });
    </script>
</body>
</html>
