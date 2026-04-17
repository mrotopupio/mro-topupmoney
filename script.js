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
    <img src="${qrUrl}" width="220">
    <p>📱 สแกนเพื่อจ่าย ${amount} บาท</p>
    <p>👤 Username: ${username}</p>

    <p style="color:orange; font-weight:bold;">
    ⚠️ กรุณาโอนตามจำนวน ${amount} บาท และอัปสลิปให้ตรง Username นี้
    </p>
`;
