function generateQR(){

    let amount = document.getElementById('amount').value;

    if(!amount){
        alert("กรอกจำนวนเงินก่อน");
        return;
    }

    // เปลี่ยนเบอร์ตรงนี้เป็นของคุณ
    let phone = "0949537246";

    let qrUrl = `https://promptpay.io/${phone}/${amount}.png`;

    document.getElementById('qrBox').innerHTML = `
        <img src="${qrUrl}" width="220">
        <p>📱 สแกนเพื่อจ่าย ${amount} บาท</p>
    `;
}
