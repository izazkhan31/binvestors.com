// Plan details
const plans = [
    { amount: 500, dailyReturn: 0.15, days: 30 },
    { amount: 1000, dailyReturn: 0.15, days: 30 },
    { amount: 1500, dailyReturn: 0.15, days: 30 },
    { amount: 2000, dailyReturn: 0.15, days: 30 },
    // Add up to 10 plans
];

// Function to calculate total income
function calculateTotalIncome(amount, dailyReturn, days) {
    return amount + (amount * dailyReturn * days);
}

// Display total income for each plan
document.getElementById('total1').innerText = calculateTotalIncome(plans[0].amount, plans[0].dailyReturn, plans[0].days).toFixed(2);
document.getElementById('total2').innerText = calculateTotalIncome(plans[1].amount, plans[1].dailyReturn, plans[1].days).toFixed(2);
document.getElementById('total3').innerText = calculateTotalIncome(plans[2].amount, plans[2].dailyReturn, plans[2].days).toFixed(2);
document.getElementById('total4').innerText = calculateTotalIncome(plans[3].amount, plans[3].dailyReturn, plans[3].days).toFixed(2);
// Add similar lines for the remaining plans
