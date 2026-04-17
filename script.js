function generateQR(){

    let amount = document.getElementById('amount').value;

    document.getElementById('qrBox').innerHTML =
        `<img src="https://yourdomain.com/api/generateQR.php?amount=${amount}" width="200">`;
}

function uploadSlip(){

    let file = document.getElementById('slip').files[0];
    let username = document.getElementById('username').value;
    let amount = document.getElementById('amount').value;

    let formData = new FormData();
    formData.append("slip", file);
    formData.append("username", username);
    formData.append("amount", amount);

    fetch('https://yourdomain.com/api/uploadSlip.php', {
        method: 'POST',
        body: formData
    })
    .then(res => res.text())
    .then(data => {
        document.getElementById('status').innerText = data;
    });
}