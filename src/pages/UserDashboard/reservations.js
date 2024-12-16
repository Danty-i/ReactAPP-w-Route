<!DOCTYPE html>
<html lang="ar">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0;">
    <title>الحجوزات</title>
    <link rel="stylesheet" href="css/bootstrap-grid.css">
    <link rel="stylesheet" href="css/userdashstyle.css">
    <link rel="stylesheet" href="css/css-comps.css">
    <link rel="stylesheet" href="css/re575.css">
    <link rel="stylesheet" href="css/re768.css">
    <link rel="stylesheet" href="css/re991.css">
    <link rel="stylesheet" href="css/re1200.css">
    <link href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp" rel="stylesheet">
    <link rel="stylesheet" href="css/font-awesome.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

    <style>
        #confirmationModal {
            display: none;
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: white;
            padding: 20px;
            border: 1px solid black;
            z-index: 1000;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            border-radius: 8px;
        }
        #overlay {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            z-index: 999;
        }
        .modal-buttons {
            text-align: center;
            margin-top: 15px;
        }
        .modal-buttons button {
            margin: 0 10px;
            padding: 8px 16px;
            border: none;
            background-color: #007bff;
            color: white;
            border-radius: 4px;
            cursor: pointer;
        }
        .modal-buttons button#cancelBtn {
            background-color: #dc3545;
        }
        .modal-buttons button:hover {
            opacity: 0.8;
        }
    </style>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/parse/3.3.0/parse.min.js"></script>
</head>

<body>

<div class="right-side-block">
    <aside>
        <span class="material-icons material-icons-outlined bars">menu</span>
        <div class="profile-block">
            <div class="profile__img">
                <img src="img/profile-image.png" alt="Profile Image">
            </div>
            <!-- <span class="profile__name" id="username">اسم العميل</span> -->
        </div>
        <br>
        <ul>
            <li class="is-active"><a href="user_dashboard.html"><span class="material-icons material-icons-outlined ic"></span>الرئيسية</a></li>
            <li><a href="#"><span class="material-icons material-icons-outlined ic"></span>جدول حجوزاتي</a></li>
        </ul>
    </aside>
</div>

<div class="left-side-block">
    <header class="header">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 header-block">
                    <div class="header__right">
                        <a href="#" class="menu-icon bars">
                            <div class="material-icons md-24 material-icons-outlined">menu</div>
                        </a>
                    </div>
                    <div class="header__left">
                        <a href="../login.html" id="logout-icon">
                            <span class="material-icons material-icons-outlined" title="logout">exit_to_app</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </header>
    
    <div class="main-content">
        <div class="table__table">
            <table class="table">
                <thead role="rowgroup">
                    <tr role="row" class="title-row">
                        <!-- <th>رقم الحجز</th> -->
                        <th>محطة الانطلاق</th>
                        <th>محطة الوجهة</th>
                        <th>تاريخ الرحلة</th>
                        <th>توقيت الرحلة</th>
                        <th>رقم الرحلة</th>
                        <th>رقم الباص</th>
                        <th>حالة الدفع</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody id="reservations-table-body">
                    <!-- سيتم إدراج البيانات هنا بواسطة JavaScript -->
                </tbody>
            </table>
        </div>
    </div>
</div>

<!-- Confirmation Modal -->
<div id="confirmationModal">
    <p>هل تريد إلغاء الحجز؟</p>
    <div class="modal-buttons">
        <button id="confirmBtn">تأكيد</button>
        <button id="cancelBtn">إلغاء</button>
    </div>
</div>
<div id="overlay"></div>

<script src="js/jquery.js"></script>
<script src="js/main.js"></script>

<script>
    Parse.initialize("4PQmzoc4qvrK8L21r91x2WebagCoXXdxxsbxlLzu", "qxtI4vBiDsXvkK7DjGRIywVRhLOqgEW4v5ThoEaN");
    Parse.serverURL = 'https://parseapi.back4app.com/parse';

    document.addEventListener('DOMContentLoaded', function() {
        const currentUser = Parse.User.current(); // احصل على معلومات المستخدم الحالي
        if (!currentUser) {
            alert('يجب تسجيل الدخول لعرض الحجوزات.');
            return;
        }

        const Reservations = Parse.Object.extend('Reservation');
        const query = new Parse.Query(Reservations);
        query.equalTo('userId', currentUser.id); // ابحث عن الحجوزات التي تنتمي للمستخدم الحالي
        query.find().then((results) => {
            const tableBody = document.getElementById('reservations-table-body');
            results.forEach((reservation) => {
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
                    <td>
                        <a href="confirmation_page.html?reservationId=${reservation.id}" class="material-icons material-icons-outlined view-icon" title="اظهار التذكرة">remove_red_eye</a>
                        &nbsp; 
                        <a href="#" class="material-icons material-icons-outlined close-icon" title="الغاء الحجز">close</a>
                    </td> 
                `;
                tableBody.appendChild(newRow);
            });

            // إضافة الكود الخاص بفتح النافذة المنبثقة للتأكيد وحذف الحجز
            document.querySelectorAll('.close-icon').forEach(closeIcon => {
                closeIcon.addEventListener('click', function(event) {
                    event.preventDefault();
                    const modal = document.getElementById('confirmationModal');
                    const overlay = document.getElementById('overlay');

                    modal.style.display = 'block';
                    overlay.style.display = 'block';

                    const reservationRow = this.closest('.reservation-row');
                    const tripNumber = reservationRow.querySelector('td:nth-child(5)').textContent;

                    document.getElementById('confirmBtn').onclick = function() {
                        modal.style.display = 'none';
                        overlay.style.display = 'none';
                        reservationRow.remove();

                        // حذف الحجز من قاعدة البيانات
                        const query = new Parse.Query(Reservations);
                        query.equalTo('tripNumber', tripNumber);
                        query.first().then((reservation) => {
                            if (reservation) {
                                reservation.destroy().then(() => {
                                    alert('تم إلغاء الحجز بنجاح.');
                                }).catch((error) => {
                                    console.error('Error deleting reservation: ', error);
                                    alert('حدث خطأ أثناء إلغاء الحجز.');
                                });
                            }
                        }).catch((error) => {
                            console.error('Error finding reservation: ', error);
                            alert('حدث خطأ أثناء البحث عن الحجز.');
                        });
                    };

                    document.getElementById('cancelBtn').onclick = function() {
                        modal.style.display = 'none';
                        overlay.style.display = 'none';
                    };
                });
            });
        }).catch((error) => {
            console.error('Error fetching reservations: ', error);
            alert('حدث خطأ أثناء جلب بيانات الحجوزات.');
        });


        // إضافة الكود الخاص بتسجيل الخروج
        document.getElementById('logout-icon').addEventListener('click', function(event) {
            event.preventDefault();
            // localStorage.removeItem('username'); // مسح اسم المستخدم المخزن
            window.location.href = '../login.html'; // إعادة توجيه إلى صفحة تسجيل الدخول
        });
    });
</script>
</body>
</html>
