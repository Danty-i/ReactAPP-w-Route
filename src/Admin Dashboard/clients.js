<!DOCTYPE html>
<html lang="ar">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>العملاء</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="clients.css">
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
            <li><a href="clients.html" target="_blank">العملاء</a></li>
        </ul>
    </div>

    <div class="content">
        <div class="container">
            <h1>العملاء</h1>
            <table>
                <thead>
                    <tr>
                        <th>الرقم</th>
                        <th>اسم المستخدم</th>
                        <th>الرقم الوطني</th>
                        <th>رقم الموبايل</th>
                        <th>الحجوزات</th>
                        <th>حظر</th>
                    </tr>
                </thead>
                <tbody id="users-table-body">
                    <!-- سيتم إضافة الصفوف هنا بواسطة JavaScript -->
                </tbody>
            </table>
        </div>
    </div>

    <!-- نافذة منبثقة للحجوزات -->
    <div id="modal" class="modal">
        <div class="modal-content">
            <span class="close">&times;</span>
            <h2>حجوزات المستخدم</h2>
            <table>
                <thead>
                    <tr>
                        <th>محطة الانطلاق</th>
                        <th>محطة الوجهة</th>
                        <th>تاريخ الرحلة</th>
                        <th>توقيت الرحلة</th>
                        <th>رقم الرحلة</th>
                        <th>رقم الباص</th>
                        <th>حالة الدفع</th>
                    </tr>
                </thead>
                <tbody id="reservations-table-body">
                    <!-- سيتم إضافة الصفوف هنا بواسطة JavaScript -->
                </tbody>
            </table>
        </div>
    </div>

    <script src="https://unpkg.com/parse/dist/parse.min.js"></script>

    <script>
        // Initialize Parse SDK
        Parse.initialize("4PQmzoc4qvrK8L21r91x2WebagCoXXdxxsbxlLzu", "qxtI4vBiDsXvkK7DjGRIywVRhLOqgEW4v5ThoEaN");
        Parse.serverURL = 'https://parseapi.back4app.com/parse';

        document.addEventListener('DOMContentLoaded', function() {
            const usersTableBody = document.getElementById('users-table-body');

            const query = new Parse.Query(Parse.User);
            query.find().then((users) => {
                users.forEach((user, index) => {
                    const username = user.get('username');
                    const nationalId = user.get('nationalId');
                    const phoneNumber = user.get('mobileNumber');
                    const isBanned = user.get('isBanned') || false; // افتراض أن المستخدم غير محظور إذا لم يتم تعيين هذا الحقل

                    if (!isBanned) { // فقط عرض المستخدمين غير المحظورين
                        const row = document.createElement('tr');
                        row.innerHTML = `
                            <td>${index + 1}</td>
                            <td>${username}</td>
                            <td>${nationalId}</td>
                            <td>${phoneNumber}</td>
                            <td><button class="edit-btn" onclick="showReservations('${user.id}')">اظهار</button></td>
                            <td><button class="delete-btn" onclick="banUser('${user.id}')">حظر</button></td>
                        `;
                        usersTableBody.appendChild(row);
                    }
                });
            }).catch((error) => {
                console.error('Error fetching users: ', error);
                alert('حدث خطأ أثناء جلب المستخدمين');
            });
        });

        function showReservations(userId) {
            const reservationsTableBody = document.getElementById('reservations-table-body');
            reservationsTableBody.innerHTML = ''; // مسح المحتوى الحالي

            const Reservations = Parse.Object.extend('Reservation');
            const query = new Parse.Query(Reservations);
            query.equalTo('userId', userId); // ابحث عن الحجوزات التي تنتمي للمستخدم المحدد
            query.find().then((results) => {
                results.forEach((reservation, index) => {
                    const newRow = document.createElement('tr');
                    newRow.setAttribute('role', 'row');
                    newRow.classList.add('reservation-row');

                    newRow.innerHTML = ` 
                        <td><a href="#">${reservation.get('departure')}</a></td>
                        <td><a href="#">${reservation.get('destination')}</a></td>
                        <td>${reservation.get('date')}</td>
                        <td>${reservation.get('tripTime')}</td>
                        <td>${reservation.get('tripNumber')}</td>
                        <td>${reservation.get('busNumber')}</td>
                        <td>مدفوع</td>
                       
                    `;
                    reservationsTableBody.appendChild(newRow);
                });

                document.getElementById('modal').style.display = "block";
            }).catch((error) => {
                console.error('Error fetching reservations: ', error);
                alert('حدث خطأ أثناء جلب بيانات الحجوزات.');
            });
        }

        // إغلاق النافذة المنبثقة عند الضغط على زر الإغلاق أو خارج النافذة
        document.querySelector('.close').addEventListener('click', function() {
            document.getElementById('modal').style.display = "none";
        });

        window.addEventListener('click', function(event) {
            if (event.target == document.getElementById('modal')) {
                document.getElementById('modal').style.display = "none";
            }
        });

        function banUser(userId) {
            if (confirm('هل أنت متأكد أنك تريد حظر هذا المستخدم؟')) {
                const query = new Parse.Query(Parse.User);
                query.get(userId).then((user) => {
                    user.set('isBanned', true);
                    user.save().then(() => {
                        alert('تم حظر المستخدم بنجاح');
                        window.location.reload();
                    }).catch((error) => {
                        console.error('Error banning user: ', error);
                        alert('حدث خطأ أثناء حظر المستخدم');
                    });
                }).catch((error) => {
                    console.error('Error fetching user: ', error);
                    alert('حدث خطأ أثناء جلب بيانات المستخدم');
                });
            }
        }

        document.querySelector('.burger-icon').addEventListener('click', function() {
            document.querySelector('.sidebar').classList.toggle('active');
        });
    </script>

</body>
</html>
