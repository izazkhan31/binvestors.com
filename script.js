document.getElementById('depositForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Here, you can handle form submission (e.g., send data to the server or log it)
    const amount = document.getElementById('sendingAmount').value;
    const senderName = document.getElementById('senderName').value;
    const senderNumber = document.getElementById('senderNumber').value;
    const trxId = document.getElementById('trxId').value;
    const receipt = document.getElementById('receipt').files[0];

    // You can perform actions like sending data to a server here

    alert(`Deposit submitted:\nAmount: PKR ${amount}\nName: ${senderName}\nNumber: ${senderNumber}\nTRX ID: ${trxId}`);
});
// Function to update deposit history table
function updateDepositHistory() {
    const depositHistory = JSON.parse(localStorage.getItem('depositHistory')) || [];
    const tbody = document.querySelector('#depositHistory tbody');
    tbody.innerHTML = ''; // Clear existing rows

    depositHistory.forEach(record => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${record.dateTime}</td>
            <td>${record.easypaisaName}</td>
            <td>${record.easypaisaNumber}</td>
            <td>${record.amount}</td>
        `;
        tbody.appendChild(row);
    });
}

// Call update function on page load
updateDepositHistory();
document.getElementById('depositForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission

    // Get form values
    const easypaisaName = document.getElementById('easypaisaName').value;
    const easypaisaNumber = document.getElementById('easypaisaNumber').value;
    const depositAmount = document.getElementById('depositAmount').value;

    // Create deposit record
    const depositRecord = {
        dateTime: new Date().toLocaleString(),
        easypaisaName: easypaisaName,
        easypaisaNumber: easypaisaNumber,
        amount: depositAmount,
    };

    // Save deposit record to local storage
    const depositHistory = JSON.parse(localStorage.getItem('depositHistory')) || [];
    depositHistory.push(depositRecord);
    localStorage.setItem('depositHistory', JSON.stringify(depositHistory));

    // Reset the form
    document.getElementById('depositForm').reset();

    // Update deposit history table
    updateDepositHistory();
});

