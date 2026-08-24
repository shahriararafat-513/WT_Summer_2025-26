var hour = new Date().getHours();
var greet = (hour < 12) ? "Good Morning" : (hour < 18) ? "Good Afternoon" : "Good Evening";
document.getElementById('greeting').innerText = greet;

function updateClock() {
    var now = new Date();
    document.getElementById('liveClock').innerText = now.toLocaleTimeString();
}
updateClock();
setInterval(updateClock, 1000);

function toggleTheme() {
    var body = document.body;
    var btn = document.getElementById("themeBtn");

    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        btn.innerText = "Click to switch to Light Mode";
        btn.style.backgroundColor = "white";
        btn.style.color = "black";
        btn.style.border = "2px solid white";
    } else {
        btn.innerText = "Click to switch to Dark Mode";
        btn.style.backgroundColor = "black";
        btn.style.color = "white";
        btn.style.border = "2px solid black";
    }
}

document.getElementById('myForm').addEventListener('submit', function(e) {
    e.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var age = document.getElementById('age').value;
    var pass = document.getElementById('password').value;
    var msg = document.getElementById('message').value;

    var valid = true;

    if (name.length < 3) {
        document.getElementById('nameError').innerText = "Name: Min 3 chars";
        valid = false;
    } else { document.getElementById('nameError').innerText = ""; }

    if (!email.includes("@")) {
        document.getElementById('emailError').innerText = "Invalid Email";
        valid = false;
    } else { document.getElementById('emailError').innerText = ""; }

    if (phone.length !== 10) {
        document.getElementById('phoneError').innerText = "Phone: Must be 10 digits";
        valid = false;
    } else { document.getElementById('phoneError').innerText = ""; }

    if (age < 18) {
        document.getElementById('ageError').innerText = "Must be 18+";
        valid = false;
    } else { document.getElementById('ageError').innerText = ""; }

    var passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passRegex.test(pass)) {
        document.getElementById('passwordError').innerText = "Weak Password";
        valid = false;
    } else { document.getElementById('passwordError').innerText = ""; }

    if (msg.length < 10) {
        document.getElementById('messageError').innerText = "Min 10 characters";
        valid = false;
    } else { document.getElementById('messageError').innerText = ""; }

    if (valid) {
        document.getElementById('myForm').style.display = "none";
        document.getElementById('successMessage').innerHTML = 
        "<h3>Registration Successful!</h3>" +
        "<p>Name: " + name + "</p>" +
        "<p>Email: " + email + "</p>" +
        "<p>Phone: " + phone + "</p>" +
        "<p>Age: " + age + "</p>" +
        "<p>Message: " + msg + "</p>" +
        "<p>Thank you for registering successfully.</p>";
    }
});