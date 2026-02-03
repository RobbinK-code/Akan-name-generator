// script.js
// Akan Name Generator Script
document.getElementById('akanForm').addEventListener('submit', findname);
function findname(event) {
    event.preventDefault();
    const dobInput = document.getElementById('dob').value;
    const genderInput = document.getElementById('gender').value;

    if (!dobInput) {
        alert("Please enter your date of birth.");
        return;
    }

    if (!genderInput) {
        alert("Please select your gender.");
        return;
    }

    const dob = new Date(dobInput);
    const dayOfWeek = dob.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday

    const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

    let name;
    if (genderInput === 'male') {
        name = maleNames[dayOfWeek];
    } else {
        name = femaleNames[dayOfWeek];
    }

    document.getElementById('result-box').innerHTML = `<h2>Your Akan Name is: ${name}</h2>`;
}






