function generateQR(){

    let amount = document.getElementById('amount').value;
    let username = document.getElementById('username').value;

    if(!amount){
        alert("⚠️ กรุณากรอกจำนวนเงิน");
        return;
    }

    if(!username){
        alert("⚠️ กรุณากรอก Username");
        return;
    }

    let phone = "1509901258972"; // 🔥 เปลี่ยนเป็นของคุณ
    let accountName = "นาย ยรรยง รัตนจุฑาภรณ์";

    let qrUrl = `https://promptpay.io/${phone}/${amount}.png`;

    // 🔥 loading effect
    document.getElementById('qrBox').innerHTML = `
        <div class="qr-card">
            <p>⏳ กำลังสร้าง QR...</p>
        </div>
    `;

    // 🔥 delay เล็กน้อยให้ดู smooth
    setTimeout(() => {

        document.getElementById('qrBox').innerHTML = `
            <div class="qr-card">

                <img src="${qrUrl}" class="qr-img">

                <h3 class="amount-text">💸 ${amount} บาท</h3>

                <p class="user-text">👤 ${username}</p>
                <p class="bank-text">🏦 ${accountName}</p>

                <div class="alert-box">
                    ⚠️ โอน ${amount} บาท เท่านั้น<br>
                    และตรวจสอบชื่อบัญชีให้ถูกต้อง
                </div>

                <button class="copy-btn" onclick="copyAmount(${amount})">
                    📋 คัดลอกจำนวนเงิน
                </button>

            </div>
        `;

    }, 500);
}

/* 🔥 ปุ่มคัดลอก */
function copyAmount(amount){
    navigator.clipboard.writeText(amount);
    alert("คัดลอกจำนวนเงินแล้ว: " + amount + " บาท");
}
