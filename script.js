document.getElementById('withdrawalForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission

    // Get form values
    const easypaisaName = document.getElementById('easypaisaName').value;
    const easypaisaNumber = document.getElementById('easypaisaNumber').value;
    const withdrawalAmount = document.getElementById('withdrawalAmount').value;

    // Create withdrawal record
    const withdrawalRecord = {
        dateTime: new Date().toLocaleString(),
        easypaisaName: easypaisaName,
        easypaisaNumber: easypaisaNumber,
        amount: withdrawalAmount,
    };

    // Save withdrawal record to local storage
    const withdrawalHistory = JSON.parse(localStorage.getItem('withdrawalHistory')) || [];
    withdrawalHistory.push(withdrawalRecord);
    localStorage.setItem('withdrawalHistory', JSON.stringify(withdrawalHistory));

    // Reset the form
    document.getElementById('withdrawalForm').reset();

    // Update withdrawal history table
    updateWithdrawalHistory();
});

// Function to update withdrawal history table
function updateWithdrawalHistory() {
    const withdrawalHistory = JSON.parse(localStorage.getItem('withdrawalHistory')) || [];
    const tbody = document.querySelector('#withdrawalHistory tbody');
    tbody.innerHTML = ''; // Clear existing rows

    withdrawalHistory.forEach(record => {
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
updateWithdrawalHistory();
