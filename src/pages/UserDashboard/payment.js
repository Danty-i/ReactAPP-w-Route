<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div id="paymentModal" class="modal">
        <div class="modal-content">
          <span class="close-btn" onclick="closeModal()">&times;</span>
          <h2>تفاصيل الدفع</h2>
          <form id="paymentForm">
            <div class="form-group">
              <label for="cardNumber">رقم البطاقة:</label>
              <input type="text" id="cardNumber" name="cardNumber" required>
      
              <label for="expiryDate">تاريخ الانتهاء:</label>
              <input type="text" id="expiryDate" name="expiryDate" placeholder="MM/YY" required>
            </div>
            <div class="form-group"> 
              <label for="cvv">CVV:</label>
              <input type="text" id="cvv" name="cvv" required>
      
              <label for="cardholderName">اسم صاحب البطاقة:</label>
              <input type="text" id="cardholderName" name="cardholderName" required>
            </div>
            <button type="submit" onclick="processPayment(event)">دفع الآن</button>
          </form>
        </div>
      </div>
      
    
</body>
</html>