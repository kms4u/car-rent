import '../scss/style.scss'

document.getElementById('openModal').addEventListener('click', openModal);
document.getElementById('openModal2').addEventListener('click', openModal);
document.getElementById('openModal3').addEventListener('click', openModal);
document.getElementById('openModal4').addEventListener('click', openModal);
document.getElementById('openModal5').addEventListener('click', openModal);
document.getElementById('openModal6').addEventListener('click', openModal);
document.getElementById('openModal7').addEventListener('click', openModal);
document.getElementById('openModal8').addEventListener('click', openModal);
document.getElementById('openModal9').addEventListener('click', openModal);
document.getElementById('openModal0').addEventListener('click', openModal);
// car rent function
function openModal() {
    document.getElementById('modalRent').classList.add("open")
}

document.getElementById('closeModal').addEventListener('click', closeModal);

function closeModal() {
    document.getElementById('modalRent').classList.remove("open")
}

// sig Up function
document.getElementById('signUp').addEventListener('click', opensginUP);
function opensginUP() {
    document.getElementById('modalSignUp').classList.add("open")
}

document.getElementById('submit').addEventListener('click', closeSigUp);
function closeSigUp() {
    document.getElementById('modalSignUp').classList.remove("open")
}

// log in function
document.getElementById('logIn').addEventListener('click', openLogIn);
function openLogIn() {
    document.getElementById('modalLogIn').classList.add("open")
}

document.getElementById('logInBtn').addEventListener('click', closeLogIn);
function closeLogIn() {
    document.getElementById('modalLogIn').classList.remove("open")
}