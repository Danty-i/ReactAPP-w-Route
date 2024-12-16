<!DOCTYPE html>
<html lang="ar">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>إضافة رحلة جديدة</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="add_new_trip.css">
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
            <h2>إضافة رحلات جديدة</h2>
            <form id="admin-form">
                <div class="form-group">
                    <label for="departure">محطة الانطلاق</label>
                    <input type="text" id="departure" required>
                </div>
                <div class="form-group">
                    <label for="destination">محطة الوجهة</label>
                    <input type="text" id="destination" required>
                </div>
                <div class="form-group">
                    <label for="date">تاريخ الرحلة</label>
                    <input type="date" id="date" required>
                </div>
                <div class="form-group">
                    <label for="times">الأوقات المتاحة (افصل بين الأوقات بفاصلة)</label>
                    <input type="text" id="times" required>
                </div>
                <button type="submit">إضافة الرحلة</button>
            </form>
        </div>
    </div>

    <script src="https://unpkg.com/parse/dist/parse.min.js"></script>
    <script>
        Parse.initialize("4PQmzoc4qvrK8L21r91x2WebagCoXXdxxsbxlLzu", "qxtI4vBiDsXvkK7DjGRIywVRhLOqgEW4v5ThoEaN");
        Parse.serverURL = 'https://parseapi.back4app.com/parse';

        document.getElementById('admin-form').addEventListener('submit', function(event) {
            event.preventDefault();
            const departure = document.getElementById('departure').value;
            const destination = document.getElementById('destination').value;
            const date = document.getElementById('date').value;
            const times = document.getElementById('times').value.split(',').map(time => time.trim());

            // Create a Parse Object for storing trips
            const Trip = Parse.Object.extend("Trip");
            const trip = new Trip();

            // Set properties
            trip.set("departure", departure);
            trip.set("destination", destination);
            trip.set("date", new Date(date));
            trip.set("times", times);

            // Save the trip object
            trip.save().then((trip) => {
                alert('تمت إضافة الرحلة بنجاح');
                document.getElementById('admin-form').reset();
            }).catch((error) => {
                alert('حدث خطأ أثناء إضافة الرحلة: ' + error.message);
            });
        });

        document.querySelector('.burger-icon').addEventListener('click', function() {
            document.querySelector('.sidebar').classList.toggle('active')
        });
    </script>
</body>

</html>
