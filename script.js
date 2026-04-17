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

            <img src="${qrUrl}" class="qr-img" id="qrImage">

            <p class="pay-text">📱 สแกนเพื่อจ่าย ${amount} บาท</p>
            <p class="user-text">👤 Username: ${username}</p>
            <p class="bank-text">🏦 ${accountName}</p>

            <a href="${qrUrl}" download="QR-${amount}.png" class="copy-btn">
                💾 บันทึก QR Code
            </a>

            <button class="copy-btn" onclick="paymentSuccess()">
                ✅ ฉันโอนแล้ว
            </button>

        </div>
    `;
}

function paymentSuccess() {
    document.getElementById("qrBox").innerHTML = `
        <div class="qr-card">
            <h2 style="color:#00ff99;">✅ โอนเงินสำเร็จ</h2>
            <p>ระบบได้รับข้อมูลแล้ว</p>
            <p>กรุณารอแอดมินตรวจสอบ</p>
        </div>
    `;
}
