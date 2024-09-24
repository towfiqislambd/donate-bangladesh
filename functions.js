// Common Function 1 (Challenge Part)
function handleDonationValueById(id) {
    const donationValue = document.getElementById(id).value;
    const donationNumber = Number(donationValue);
    return donationNumber
}

// Common Function 2 (Challenge Part)
function handleDonationAmountById(id) {
    const totalDonationAmount = document.getElementById(id).innerText;
    const totalDonationNumber = Number(totalDonationAmount);
    return totalDonationNumber
}