function generateQR() {

    let amount = document.getElementById('amount').value.trim();
    let username = document.getElementById('username').value.trim();

    if (!amount) {
        alert("กรอกจำนวนเงินก่อน");
        return;
    }

    if (!username) {
        alert("กรอกชื่อผู้ใช้ก่อน");
        return;
    }

    let phone = "0949537846";
    let accountName = "นาย ยรรยง รัตนจุฑาภรณ์";
    let qrUrl = `https://promptpay.io/${phone}/${amount}.png`;

    document.getElementById('qrBox').innerHTML = `
        <div class="qr-card">
        
        <form action="https://mro-topupmoney.rf.gd/upload.php" method="POST" enctype="multipart/form-data">

    <input type="text" name="username" id="formUsername" placeholder="👤 Username" required>

    <input type="number" name="amount" id="formAmount" placeholder="💰 จำนวนเงิน" required>

    <input type="file" name="slip" accept="image/*" required>

    <button type="submit">📤 อัปโหลดสลิป</button>

</form>

            <img src="${qrUrl}" class="qr-img">

            <p class="pay-text">📱 สแกนเพื่อจ่าย ${amount} บาท</p>
            <p class="user-text">👤 Username: ${username}</p>
            <p class="bank-text">🏦 ${accountName}</p>

            <a href="${qrUrl}" download="qr.png" class="copy-btn">
                💾 บันทึก QR Code
            </a>

            <input type="file" id="slipFile" accept="image/*" style="margin-top:15px;">

            <button class="copy-btn" onclick="submitSlip()">
                ✅ โอนแล้ว
            </button>

        </div>
    `;
}

function submitSlip() {

    let file = document.getElementById("slipFile").files[0];

    if (!file) {
        alert("กรุณาแนบสลิปก่อน");
        return;
    }

    document.getElementById("qrBox").innerHTML = `
        <div class="qr-card">
            <h2 style="color:#00ff99;">✅ ส่งสลิปเรียบร้อย</h2>
            <p>ระบบได้รับข้อมูลแล้ว</p>
            <p>กรุณารอแอดมินตรวจสอบ</p>
        </div>
    `;
}
