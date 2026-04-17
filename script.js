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

    let phone = "1509901258972";
    let accountName = "นาย ยรรยง รัตนจุฑาภรณ์";

    let qrUrl = `https://promptpay.io/${phone}/${amount}.png`;

    let box = document.getElementById('qrBox');

    if (!box) {
        alert("ไม่พบ qrBox ❌");
        return;
    }

    box.innerHTML = `
        <div class="qr-card">
            <img src="${qrUrl}" class="qr-img">

            <p class="pay-text">📱 สแกนเพื่อจ่าย ${amount} บาท</p>
            <p class="user-text">👤 Username: ${username}</p>
            <p class="bank-text">🏦 ${accountName}</p>

            <a href="${qrUrl}" download="qr.png" class="copy-btn">
                💾 บันทึก QR Code
            </a>

            <!-- 🔥 FORM อัปโหลด -->
            <form action="https://mro-topupmoney.rf.gd/upload.php" 
                  method="POST" 
                  enctype="multipart/form-data" 
                  style="margin-top:15px;">

                <input type="hidden" name="username" value="${username}">
                <input type="hidden" name="amount" value="${amount}">

                <input type="file" name="slip" accept="image/*" required>

                <button type="submit" class="copy-btn">
                    📤 อัปโหลดสลิป
                </button>
            </form>
        </div>
    `;
}
}
