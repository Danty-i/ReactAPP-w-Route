<!DOCTYPE html>
<html lang="ar">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>حجز مقعد جديد</title>
    <link rel="stylesheet" href="styles.css">
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

    <div class="background"></div>
    <div class="overlay"></div>

    <div class="container">
        <div class="progress-bar">
            <div class="step active" data-step="1">1. اختيار الرحلة</div>
            <div class="step" data-step="2">2. الحجز المؤقت</div>
            <div class="step" data-step="3">3. تأكيد الحجز</div>
        </div>

        <div class="form-container">
            <form id="bookingForm">
                <div class="page active" id="page-1">
                    <h2>اختيار الرحلة</h2>
                    <div class="form-group">
                        <label for="departure">اختر محطة الانطلاق</label>
                        <select id="departure" name="departure" required>
                            <option value="" disabled selected>اختر محطة الانطلاق</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="destination">اختر محطة الوجهة</label>
                        <select id="destination" name="destination" required>
                            <option value="" disabled selected>اختر محطة الوجهة</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="date">اختر تاريخ الرحلة</label>
                        <select id="date" name="date" required>
                            <option value="" disabled selected>اختر تاريخ الرحلة</option>
                        </select>
                    </div>

                    <button type="button" onclick="nextPage()">الخطوة التالية</button>
                </div>

                <div class="page" id="page-2">
                    <h2>الحجز المؤقت</h2>
                    <div class="form-group">
                        <label for="name">اسم المسافر</label>
                        <input type="text" id="name" name="name" placeholder="أدخل اسمك الكامل" required readonly>
                    </div>

                    <div class="form-group">
                        <label for="national-id">ادخل الرقم الوطني</label>
                        <input type="text" id="national-id" name="national-id" required readonly>
                    </div>

                    <div class="form-group">
                        <label for="trip">اختر توقيت الرحلة المتاحة</label>
                        <select id="trip" name="trip" required>
                            <option value="" disabled selected>اختر توقيت الرحلة المتاحة</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="seats">عدد المقاعد</label>
                        <input type="number" id="seats" name="seats" min="1" max="10" required>
                    </div>
                    
                    <button type="button" onclick="prevPage()">الخطوة السابقة</button>
                    <button type="button" onclick="nextPage()">الخطوة التالية</button>
                </div>

                <div class="page" id="page-3">
                    <h2>تأكيد الحجز</h2>
                    <p>هل أنت متأكد من معلومات الحجز؟</p>
                    <div class="table-container">
                        <table>
                            <tr>
                                <th>الاسم</th>
                                <td id="confirmation-name"></td>
                            </tr>
                            <tr>
                                <th>محطة الانطلاق</th>
                                <td id="confirmation-departure"></td>
                            </tr>
                            <tr>
                                <th>محطة الوجهة</th>
                                <td id="confirmation-destination"></td>
                            </tr>
                            <tr>
                                <th>تاريخ الرحلة</th>
                                <td id="confirmation-date"></td>
                            </tr>
                            <tr>
                                <th>توقيت الرحلة</th>
                                <td id="confirmation-trip"></td>
                            </tr>
                            <tr>
                                <th>الرقم الوطني</th>
                                <td id="confirmation-national-id"></td>
                            </tr>
                            <tr>
                                <th>عدد المقاعد</th>
                                <td id="confirmation-seats"></td>
                            </tr>
                        </table>
                    </div>
                    <button type="button" onclick="prevPage()">الخطوة السابقة</button>
                    <button type="submit">تأكيد</button>
                </div>
            </form>
        </div>
    </div>
    <script src="https://unpkg.com/parse/dist/parse.min.js"></script>
    <script>
        Parse.initialize("4PQmzoc4qvrK8L21r91x2WebagCoXXdxxsbxlLzu", "qxtI4vBiDsXvkK7DjGRIywVRhLOqgEW4v5ThoEaN");
        Parse.serverURL = 'https://parseapi.back4app.com/parse';

        document.addEventListener('DOMContentLoaded', function () {
            const departureSelect = document.getElementById('departure');
            const destinationSelect = document.getElementById('destination');
            const dateSelect = document.getElementById('date');
            const tripSelect = document.getElementById('trip');

            // جلب الرحلات من Parse Server
            const query = new Parse.Query('Trip');
            query.find().then((trips) => {
                const uniqueDepartures = [...new Set(trips.map(trip => trip.get('departure')))];
                uniqueDepartures.forEach((departure) => {
                    const option = document.createElement('option');
                    option.textContent = departure;
                    option.value = departure;
                    departureSelect.appendChild(option);
                });
            }).catch((error) => {
                console.error('Error fetching trips: ', error);
                alert('حدث خطأ أثناء جلب الرحلات');
            });

            // استجابة لتغييرات اختيار المستخدم
            departureSelect.addEventListener('change', function () {
                const departure = this.value;
                updateDestinationSelect(departure);
                updateDateSelect(departure); // تحديث حقل تاريخ الرحلة بناءً على الانطلاق المحدد
                updateTripSelect(departure); // تحديث حقل توقيت الرحلة بناءً على الانطلاق المحدد
            });

            function updateDestinationSelect(departure) {
                destinationSelect.innerHTML = ''; // مسح الخيارات الحالية
                const option = document.createElement('option');
                option.textContent = 'اختر محطة الوجهة';
                option.disabled = true;
                option.selected = true;
                destinationSelect.appendChild(option);

                // جلب الوجهات المتاحة للانطلاق المحدد
                const query = new Parse.Query('Trip');
                query.equalTo('departure', departure);
                query.find().then((trips) => {
                    const uniqueDestinations = [...new Set(trips.map(trip => trip.get('destination')))];
                    uniqueDestinations.forEach((destination) => {
                        const option = document.createElement('option');
                        option.textContent = destination;
                        option.value = destination;
                        destinationSelect.appendChild(option);
                    });
                }).catch((error) => {
                    console.error('Error fetching destinations: ', error);
                    alert('حدث خطأ أثناء جلب الوجهات');
                });
            }

            function updateDateSelect(departure) {
                dateSelect.innerHTML = ''; // مسح الخيارات الحالية
                const option = document.createElement('option');
                option.textContent = 'اختر تاريخ الرحلة';
                option.disabled = true;
                option.selected = true;
                dateSelect.appendChild(option);

                // جلب التواريخ المتاحة للانطلاق المحدد
                const query = new Parse.Query('Trip');
                query.equalTo('departure', departure);
                query.find().then((trips) => {
                    const uniqueDates = [...new Set(trips.map(trip => trip.get('date').toISOString().split('T')[0]))];
                    uniqueDates.forEach((date) => {
                        const option = document.createElement('option');
                        option.textContent = date;
                        option.value = date;
                        dateSelect.appendChild(option);
                    });
                }).catch((error) => {
                    console.error('Error fetching dates: ', error);
                    alert('حدث خطأ أثناء جلب التواريخ');
                });
            }

            function updateTripSelect(departure) {
                tripSelect.innerHTML = ''; // مسح الخيارات الحالية
                const option = document.createElement('option');
                option.textContent = 'اختر توقيت الرحلة';
                option.disabled = true;
                option.selected = true;
                tripSelect.appendChild(option);

                // جلب الأوقات المتاحة للانطلاق المحدد
                const query = new Parse.Query('Trip');
                query.equalTo('departure', departure);
                query.find().then((trips) => {
                    trips.forEach((trip) => {
                        const times = trip.get('times');
                        times.forEach((time) => {
                            const option = document.createElement('option');
                            option.textContent = time;
                            option.value = time;
                            tripSelect.appendChild(option);
                        });
                    });
                }).catch((error) => {
                    console.error('Error fetching times: ', error);
                    alert('حدث خطأ أثناء جلب الأوقات');
                });
            }
        });

        // function nextPage() {
        //     const current = document.querySelector('.page.active');
        //     const inputs = current.querySelectorAll('input, select');
        //     let allFilled = true;

        //     inputs.forEach(input => {
        //         if (!input.value) {
        //             input.classList.add('error');
        //             allFilled = false;
        //         } else {
        //             input.classList.remove('error');
        //         }
        //     });

        //     if (allFilled) {
        //         const next = current.nextElementSibling;
        //         if (next) {
        //             current.classList.remove('active');
        //             next.classList.add('active');
        //             updateProgressBar(next.dataset.step);
        //             if (next.id === "page-3") {
        //                 fillConfirmationDetails();
        //             }
        //         }
        //     } else {
        //         alert('يرجى ملء جميع الحقول قبل الانتقال إلى الخطوة التالية.');
        //     }
        // }
        function nextPage() {
    const current = document.querySelector('.page.active');
    const inputs = current.querySelectorAll('input, select');
    let allFilled = true;

    inputs.forEach(input => {
        if (!input.value) {
            input.classList.add('error');
            allFilled = false;
        } else {
            input.classList.remove('error');
        }
    });

    // تحقق من عدد المقاعد
    const seatsInput = document.getElementById('seats');
    if (seatsInput && seatsInput.value > 10) {
        alert('لا يمكنك حجز أكثر من 10 مقاعد.');
        seatsInput.classList.add('error');
        allFilled = false;
    }

    if (allFilled) {
        const next = current.nextElementSibling;
        if (next) {
            current.classList.remove('active');
            next.classList.add('active');
            updateProgressBar(next.dataset.step);
            if (next.id === "page-3") {
                fillConfirmationDetails();
            }
        }
    } else {
        alert('يرجى ملء جميع الحقول قبل الانتقال إلى الخطوة التالية.');
    }
}


        function prevPage() {
            const current = document.querySelector('.page.active');
            const prev = current.previousElementSibling;
            if (prev) {
                current.classList.remove('active');
                prev.classList.add('active');
                updateProgressBar(prev.dataset.step);
            }
        }

        function updateProgressBar(step) {
            document.querySelectorAll('.progress-bar .step').forEach((element) => {
                element.classList.remove('active');
                if (element.dataset.step <= step) {
                    element.classList.add('active');
                }
            });
        }

        function fillConfirmationDetails() {
            document.getElementById('confirmation-name').textContent = document.getElementById('name').value;
            document.getElementById('confirmation-departure').textContent = document.getElementById('departure').value;
            document.getElementById('confirmation-destination').textContent = document.getElementById('destination').value;
            document.getElementById('confirmation-date').textContent = document.getElementById('date').value;
            document.getElementById('confirmation-trip').textContent = document.getElementById('trip').value;
            document.getElementById('confirmation-national-id').textContent = document.getElementById('national-id').value;
            document.getElementById('confirmation-seats').textContent = document.getElementById('seats').value;
        }

        document.getElementById('bookingForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const nationalId = document.getElementById('national-id').value;
    const departure = document.getElementById('departure').value;
    const destination = document.getElementById('destination').value;
    const date = document.getElementById('date').value;
    const tripTime = document.getElementById('trip').value;
    const seats = document.getElementById('seats').value;

    const tripNumber = generateTripNumber();
    const busNumber = generateBusNumber();

    const currentUser = Parse.User.current();
    if (!currentUser) {
        alert('يجب تسجيل الدخول لإكمال عملية الحجز.');
        return;
    }

    const userId = currentUser.id; // احصل على معرف المستخدم

    const Reservation = Parse.Object.extend('Reservation');
    const reservation = new Reservation();

    reservation.set('name', name);
    reservation.set('nationalId', nationalId);
    reservation.set('departure', departure);
    reservation.set('destination', destination);
    reservation.set('date', date);
    reservation.set('tripTime', tripTime);
    reservation.set('seats', parseInt(seats));
    reservation.set('tripNumber', tripNumber);
    reservation.set('busNumber', busNumber);
    reservation.set('userId', userId); // اضافة معرف المستخدم للحجز

    try {
        await reservation.save();
        alert('تم تأكيد الحجز بنجاح!');
        window.location.href = `confirmation_page.html?reservationId=${reservation.id}`;
    } catch (error) {
        console.error('Error saving reservation: ', error);
        alert('حدث خطأ أثناء تأكيد الحجز');
    }
});


        // دوال لتوليد رقم الرحلة ورقم الباص تلقائيًا
        function generateTripNumber() {
            return 'TRIP-' + Math.floor(1000 + Math.random() * 9000); // توليد رقم عشوائي بين 1000 و 9999
        }

        function generateBusNumber() {
            return 'BUS-' + Math.floor(100 + Math.random() * 900); // توليد رقم عشوائي بين 100 و 999
        }

        // استرجاع بيانات المستخدم المسجل
        const currentUser = Parse.User.current();
        if (currentUser) {
            const username = currentUser.get('username'); // استرجاع اسم المستخدم
            const nationalId = currentUser.get('nationalId'); // استرجاع الرقم الوطني (مثال)

            // ملء حقول النموذج بالبيانات المسترجعة
            document.getElementById('name').value = username;
            document.getElementById('national-id').value = nationalId;
        } else {
            // إذا لم يكن هناك مستخدم مسجل، يمكنك توجيه المستخدم لتسجيل الدخول أو تقديم تعليمات لإدخال البيانات يدويًا
            alert('يجب عليك تسجيل الدخول لتعبئة هذه البيانات تلقائيًا.');
        }



    </script>
</body>

</html>
