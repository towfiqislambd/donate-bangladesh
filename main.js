// donation and history button
document.getElementById('history-btn').addEventListener('click', function () {
    document.getElementById('donation-btn').classList.remove('bg-lime-300')
    document.getElementById('history-btn').classList.add('bg-lime-300')
    document.getElementById('history-btn').classList.remove('border-gray-300')
    document.getElementById('parent-section').classList.add('hidden')
    document.getElementById('history').classList.remove('hidden')
})
document.getElementById('donation-btn').addEventListener('click', function () {
    document.getElementById('donation-btn').classList.add('bg-lime-300')
    document.getElementById('history-btn').classList.remove('bg-lime-300')
    document.getElementById('parent-section').classList.remove('hidden')
    document.getElementById('history').classList.add('hidden')
})

// Blog Page
document.getElementById('blog-btn').addEventListener('click', function () {
    window.location.href = 'blog.html'
})

// Card 1
document.getElementById('donate-now-btn1').addEventListener('click', function () {
    const donationAmount = handleDonationValueById('donation-amount1');
    const totalDonation = handleDonationAmountById('total-donation');
    if (donationAmount < 0 || isNaN(donationAmount) || donationAmount > totalDonation || !donationAmount) {
        return alert('Invalid Donation Amount')
    }
    const currentDonation = handleDonationAmountById('donation-bdt1');
    const currentAmount = currentDonation + donationAmount;
    const newAmount = totalDonation - donationAmount;
    document.getElementById('donation-bdt1').innerText = currentAmount;
    document.getElementById('total-donation').innerText = newAmount
    my_modal_1.showModal()

    document.getElementById('history').innerHTML += `
        <div class="border p-5 rounded-lg mb-3">
            <p class="mb-2 font-medium">
                ${donationAmount} Taka ${document.getElementById('donation-heading1').innerText}
            </p>
            <p class="text-gray-600">${new Date()}</p>
        </div>
    `
})

// Card 2
document.getElementById('donate-now-btn2').addEventListener('click', function () {
    const donationAmount = handleDonationValueById('donation-amount2');
    const totalDonation = handleDonationAmountById('total-donation');
    if (donationAmount < 0 || isNaN(donationAmount) || donationAmount > totalDonation || !donationAmount) {
        return alert('Invalid Donation Amount')
    }
    const currentDonation = handleDonationAmountById('donation-bdt2');
    const currentAmount = currentDonation + donationAmount;
    const newAmount = totalDonation - donationAmount;
    document.getElementById('donation-bdt2').innerText = currentAmount;
    document.getElementById('total-donation').innerText = newAmount
    my_modal_1.showModal()

    document.getElementById('history').innerHTML += `
        <div class="border p-5 rounded-lg mb-3">
            <p class="mb-2 font-medium">
                ${donationAmount} Taka ${document.getElementById('donation-heading2').innerText}
            </p>
            <p class="text-gray-600">${new Date()}</p>
        </div>
    `
})

// Card 3
document.getElementById('donate-now-btn3').addEventListener('click', function () {
    const donationAmount = handleDonationValueById('donation-amount3');
    const totalDonation = handleDonationAmountById('total-donation');
    if (donationAmount < 0 || isNaN(donationAmount) || donationAmount > totalDonation || !donationAmount) {
        return alert('Invalid Donation Amount')
    }
    const currentDonation = handleDonationAmountById('donation-bdt3');
    const currentAmount = currentDonation + donationAmount;
    const newAmount = totalDonation - donationAmount;
    document.getElementById('donation-bdt3').innerText = currentAmount;
    document.getElementById('total-donation').innerText = newAmount
    my_modal_1.showModal()

    document.getElementById('history').innerHTML += `
        <div class="border p-5 rounded-lg mb-3">
            <p class="mb-2 font-medium">
                ${donationAmount} Taka ${document.getElementById('donation-heading3').innerText}
            </p>
            <p class="text-gray-600">${new Date()}</p>
        </div>
    `
})