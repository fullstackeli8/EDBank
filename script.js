// Select buttons by their IDs
const sendMoneyButton = document.getElementById('sendMoney');
const requestMoneyButton = document.getElementById('requestMoney');
const transferBetweenAccountsButton = document.getElementById('transferBetweenAccounts');

// Show "Send Money" modal
sendMoneyButton.addEventListener('click', () => {
    document.getElementById('sendMoneyModal').style.display = 'flex';
});

// Show "Request Money" modal
requestMoneyButton.addEventListener('click', () => {
    document.getElementById('requestMoneyModal').style.display = 'flex';
});

// Redirect to the "Transfer Between Accounts" page
transferBetweenAccountsButton.addEventListener('click', () => {
    window.location.href = 'transfer-accounts.html'; // Navigate to the transfer-accounts page
});

// Handle "Request Money" form submission
document.getElementById('requestMoneyForm').addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent page refresh

    const formData = {
        amount: document.getElementById('amount').value,
        recipientFirstName: document.getElementById('recipientFirstName').value,
        recipientLastName: document.getElementById('recipientLastName').value,
        additionalDetails: document.getElementById('additionalDetails').value,
        zelleUser: document.getElementById('zelleUser').value
    };

    console.log('Request Money Form Submitted:', formData);
    alert(`Money request submitted for ${formData.recipientFirstName} ${formData.recipientLastName}.`);
    closeModal(); // Close modal after form submission
});

// Handle "Send Money" form submission
document.getElementById('sendMoneyForm').addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent page refresh

    const formData = {
        recipientName: document.getElementById('recipientName').value,
        sendAmount: document.getElementById('sendAmount').value,
        paymentNote: document.getElementById('sendDetails').value
    };

    console.log('Send Money Form Submitted:', formData);
    alert(`Money sent to ${formData.recipientName} for $${formData.sendAmount}.`);
    closeModal(); // Close modal after form submission
});

// Function to close any open modal
function closeModal() {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => modal.style.display = 'none');
}

// Close modal when clicking outside of the modal content
window.addEventListener('click', (event) => {
    if (event.target.classList.contains('modal')) {
        closeModal(); // Close modal when background is clicked
    }
});
