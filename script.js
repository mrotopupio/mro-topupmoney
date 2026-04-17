function generateQR(){

    let amount = document.getElementById('amount').value;
    let username = document.getElementById('username').value;

    if(!amount){
        alert("กรอกจำนวนเงินก่อน");
        return;
    }

    if(!username){
        alert("กรอกชื่อผู้ใช้ก่อน");
        return;
    }

    // 🔥 ใส่เบอร์ PromptPay ของคุณ
    let phone = "1509901258972";

    // 🔥 ชื่อบัญชีจริง
    let accountName = "นาย ยรรยง รัตนจุฑาภรณ์";

    let qrUrl = `https://promptpay.io/${phone}/${amount}.png`;

    document.getElementById('qrBox').innerHTML = `
        <div class="qr-card">

            <img src="${qrUrl}" class="qr-img">

            <p class="pay-text">📱 สแกนเพื่อจ่าย ${amount} บาท</p>
            <p class="user-text">👤 Username: ${username}</p>
            <p class="bank-text">🏦 บัญชี: ${accountName}</p>

            <div class="alert-box">
                ⚠️ กรุณาโอน ${amount} บาท และตรวจสอบชื่อบัญชี "${accountName}"
            </div>

        </div>
    `;
}
