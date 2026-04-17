function generateQR(){

    let amount = document.getElementById('amount').value;
    let username = document.getElementById('username').value;

    if(!amount){
        alert("กรอกจำนวนเงินก่อน");
        return;
    }

    if(!username){
        alert("นาย ยรรยง รัตนจุฑาภรณ์");
        return;
    }

    // เปลี่ยนเบอร์ตรงนี้เป็นของคุณ
    let phone = "1509901258972";

    let qrUrl = `https://promptpay.io/${phone}/${amount}.png`;

 document.getElementById('qrBox').innerHTML = `
    <div class="qr-card">

        <img src="${qrUrl}" class="qr-img">

        <p class="pay-text">📱 สแกนเพื่อจ่าย ${amount} บาท</p>
        <p class="user-text">👤 Username: ${username}</p>

        <div class="alert-box">
            ⚠️ กรุณาโอนตามจำนวน ${amount} บาท และอัปสลิปให้ตรง Username นี้
        </div>

    </div>
`;
