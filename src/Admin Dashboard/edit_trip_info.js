<!DOCTYPE html>
<html lang="ar">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>تعديل بيانات رحلة</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="edit_trip_info.css">
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
            <h2>تعديل بيانات رحلة</h2>
            <form id="edit-form">
                <div class="form-group">
                    <label for="trip-select">اختر الرحلة</label>
                    <select id="trip-select" required>
                        <option value="">اختر الرحلة</option>
                    </select>
                </div>
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
                <button type="submit">تعديل الرحلة</button>
                <button type="button" id="cancel-button">إلغاء الرحلة</button>
            </form>
        </div>
    </div>

    <script src="https://unpkg.com/parse/dist/parse.min.js"></script>
    <script>

        Parse.initialize("4PQmzoc4qvrK8L21r91x2WebagCoXXdxxsbxlLzu", "qxtI4vBiDsXvkK7DjGRIywVRhLOqgEW4v5ThoEaN");
        Parse.serverURL = 'https://parseapi.back4app.com/parse';

        const Trip = Parse.Object.extend("Trip");
        const query = new Parse.Query(Trip);

        // Populate trip select options
        query.find().then((results) => {
            const tripSelect = document.getElementById('trip-select');
            results.forEach((trip) => {
                const option = document.createElement('option');
                option.value = trip.id;
                option.textContent = `${trip.get('departure')} إلى ${trip.get('destination')} - ${trip.get('date')}`;
                tripSelect.appendChild(option);
            });
        }).catch((error) => {
            console.error('Error fetching trips from Parse: ', error);
        });

        // Display trip data when a trip is selected
        document.getElementById('trip-select').addEventListener('change', function() {
            const tripId = this.value;
            if (tripId) {
                query.get(tripId).then((trip) => {
                    document.getElementById('departure').value = trip.get('departure');
                    document.getElementById('destination').value = trip.get('destination');
                    document.getElementById('date').value = trip.get('date');
                    document.getElementById('times').value = trip.get('times').join(', ');
                }).catch((error) => {
                    console.error('Error fetching trip details from Parse: ', error);
                });
            } else {
                document.getElementById('edit-form').reset();
            }
        });

        // Edit trip data
        document.getElementById('edit-form').addEventListener('submit', function(event) {
            event.preventDefault();
            const tripId = document.getElementById('trip-select').value;
            const departure = document.getElementById('departure').value;
            const destination = document.getElementById('destination').value;
            const date = document.getElementById('date').value;
            const times = document.getElementById('times').value.split(',').map(time => time.trim());

            query.get(tripId).then((trip) => {
                trip.set('departure', departure);
                trip.set('destination', destination);
                trip.set('date', new Date(date));
                trip.set('times', times);

                return trip.save();
            }).then(() => {
                alert('تم تعديل الرحلة بنجاح');
                window.location.href = 'list_trips.html';
            }).catch((error) => {
                console.error('Error updating trip: ', error);
                alert('حدث خطأ أثناء تعديل الرحلة');
            });
        });

        // Cancel trip
        document.getElementById('cancel-button').addEventListener('click', function() {
            const tripId = document.getElementById('trip-select').value;
            if (tripId && confirm('هل أنت متأكد أنك تريد إلغاء الرحلة؟')) {
                query.get(tripId).then((trip) => {
                    return trip.destroy();
                }).then(() => {
                    alert('تم إلغاء الرحلة بنجاح');
                    window.location.href = 'list_trips.html';
                }).catch((error) => {
                    console.error('Error cancelling trip: ', error);
                    alert('حدث خطأ أثناء إلغاء الرحلة');
                });
            }
        });
// ============================================== 
        // const Trip = Parse.Object.extend("Trip");

        // // Populate trip select options
        // const query = new Parse.Query(Trip);
        // query.find().then((results) => {
        //     const tripSelect = document.getElementById('trip-select');
        //     results.forEach((trip) => {
        //         const option = document.createElement('option');
        //         option.value = trip.id;
        //         option.textContent = `${trip.get('departure')} إلى ${trip.get('destination')} - ${trip.get('date')}`;
        //         tripSelect.appendChild(option);
        //     });
        // }).catch((error) => {
        //     console.error('Error fetching trips from Parse: ', error);
        // });

        // // Display trip data when a trip is selected
        // document.getElementById('trip-select').addEventListener('change', function() {
        //     const tripId = this.value;
        //     if (tripId) {
        //         query.get(tripId).then((trip) => {
        //             document.getElementById('departure').value = trip.get('departure');
        //             document.getElementById('destination').value = trip.get('destination');
        //             document.getElementById('date').value = trip.get('date');
        //             document.getElementById('times').value = trip.get('times').join(', ');
        //         }).catch((error) => {
        //             console.error('Error fetching trip details from Parse: ', error);
        //         });
        //     } else {
        //         document.getElementById('edit-form').reset();
        //     }
        // });

        // // Edit trip data
        // document.getElementById('edit-form').addEventListener('submit', function(event) {
        //     event.preventDefault();
        //     const tripId = document.getElementById('trip-select').value;
        //     const departure = document.getElementById('departure').value;
        //     const destination = document.getElementById('destination').value;
        //     const date = document.getElementById('date').value;
        //     const times = document.getElementById('times').value.split(',').map(time => time.trim());

        //     query.get(tripId).then((trip) => {
        //         trip.set('departure', departure);
        //         trip.set('destination', destination);
        //         trip.set('date', new Date(date));
        //         trip.set('times', times);

        //         return trip.save();
        //     }).then(() => {
        //         alert('تم تعديل الرحلة بنجاح');
        //         window.location.href = 'list_trips.html';
        //     }).catch((error) => {
        //         console.error('Error updating trip: ', error);
        //         alert('حدث خطأ أثناء تعديل الرحلة');
        //     });
        // });

        // // Cancel trip
        // document.getElementById('cancel-button').addEventListener('click', function() {
        //     const tripId = document.getElementById('trip-select').value;
        //     if (tripId && confirm('هل أنت متأكد أنك تريد إلغاء الرحلة؟')) {
        //         query.get(tripId).then((trip) => {
        //             return trip.destroy();
        //         }).then(() => {
        //             alert('تم إلغاء الرحلة بنجاح');
        //             window.location.href = 'list_trips.html';
        //         }).catch((error) => {
        //             console.error('Error cancelling trip: ', error);
        //             alert('حدث خطأ أثناء إلغاء الرحلة');
        //         });
        //     }
        // });


        // Toggle sidebar visibility
        document.querySelector('.burger-icon').addEventListener('click', function() {
            document.querySelector('.sidebar').classList.toggle('active');
        });
    </script>
</body>
</html>
