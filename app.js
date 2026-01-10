function saveData() {
    event.preventDefault();
    // Function to save data
    let contactName = document.getElementById('contactName').value;
    let contactEmail = document.getElementById('ContactEmail').value;
    let contactMessage = document.getElementById('ContactMessage').value;
let user={
    name:contactName,
    email:contactEmail,
    message:contactMessage
};
console.log(user);
}