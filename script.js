// Funkcija za validaciju imena i prezimena
function validateName(name) {
    const nameRegex = /^[A-ZА-Я][a-zа-яčćžšđ]+([ -][A-ZА-Я][a-zа-яčćžšđ]+)*$/;
    const nameError = document.getElementById("nameError");
    const nameField = document.getElementById("name");

    if (!nameRegex.test(name) || name.length < 5 || name.length > 180) {
        nameError.textContent = "Ime i prezime nije pravilno napisano";
        nameField.classList.add("error-input");
        return false;
    } else {
        nameError.textContent = "";
        nameField.classList.remove("error-input");
        return true;
    }
}

// Funkcija za proveru da li je email u ispravnom formatu
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailError = document.getElementById("emailError");
    const emailField = document.getElementById("email");

    if (!emailRegex.test(email)) {
        emailError.textContent = "Email nije validan";
        emailField.classList.add("error-input");
        return false;
    } else {
        emailError.textContent = "";
        emailField.classList.remove("error-input");
        return true;
    }
}

// Funkcija za validaciju lozinke
function validatePassword(password) {
    const passwordError = document.getElementById("passwordError");
    const passwordField = document.getElementById("password");

    // Proveravamo da li lozinka ima minimalnu duzinu
    if (password.length < 6) {
        passwordError.textContent = "Lozinka mora biti duža od 6 karaktera";
        passwordField.classList.add("error-input");
        return false;
    }

    // Proveravamo da li lozinka sadrži bar jedno veliko slovo
    const upperCaseRegex = /[A-Z]/;
    if (!upperCaseRegex.test(password)) {
        passwordError.textContent = "Lozinka mora sadržati bar jedno veliko slovo";
        passwordField.classList.add("error-input");
        return false;
    }

    // Proveravamo da li lozinka sadrži bar jedno malo slovo
    const lowerCaseRegex = /[a-z]/;
    if (!lowerCaseRegex.test(password)) {
        passwordError.textContent = "Lozinka mora sadržati bar jedno malo slovo";
        passwordField.classList.add("error-input");
        return false;
    }

    // Proveravamo da li lozinka sadrži bar jedan broj
    const numberRegex = /[0-9]/;
    if (!numberRegex.test(password)) {
        passwordError.textContent = "Lozinka mora sadržati bar jedan broj";
        passwordField.classList.add("error-input");
        return false;
    }

    // Proveravamo da li lozinka sadrži specijalni znak
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
    if (!specialCharRegex.test(password)) {
        passwordError.textContent = "Lozinka mora sadržati bar jedan specijalni znak";
        passwordField.classList.add("error-input");
        return false;
    }

    // Ako su svi uslovi ispunjeni
    passwordError.textContent = "";
    passwordField.classList.remove("error-input");
    return true;
}

// Funkcija za proveru poklapanja lozinki
function validateConfirmPassword(confirmPassword, password) {
    const confirmPasswordError = document.getElementById("confirmPasswordError");
    const confirmPasswordField = document.getElementById("confirmPassword");

    if (confirmPassword !== password) {
        confirmPasswordError.textContent = "Lozinke se ne poklapaju";
        confirmPasswordField.classList.add("error-input");
        return false;
    } else {
        confirmPasswordError.textContent = "";
        confirmPasswordField.classList.remove("error-input");
        return true;
    }
}

// Funkcija za validaciju telefona
function validatePhone(phone) {
    const phoneRegex = /^\+([1-9])([0-9]{8,13})$/;
    const phoneError = document.getElementById("phoneError");
    const phoneField = document.getElementById("phone");

    if (phone !== '' && !phoneRegex.test(phone)) {
        phoneError.textContent = "Телефон није исправан";
        phoneField.classList.add("error-input");
        return false;
    } else {
        phoneError.textContent = "";
        phoneField.classList.remove("error-input");
        return true;
    }
}

// Funkcija koja se poziva kada se form šalje
document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const phone = document.getElementById("phone").value;

    let valid = true;

    valid = valid && validateName(name);  // Koristimo '&&' umesto '&='
    valid = valid && validateEmail(email);
    valid = valid && validatePassword(password);
    valid = valid && validateConfirmPassword(confirmPassword, password);
    valid = valid && validatePhone(phone);  // Dodata validacija za telefon

    if (valid) {
        // Submit form or handle further logic
        alert("Formular je validan!");
    }
});

// Pozivanje validacije na napuštanje polja za ime i prezimene
document.getElementById("name").addEventListener("blur", function() {
    validateName(this.value);
});

// Pozivanje validacije na napuštanje polja za email
document.getElementById("email").addEventListener("blur", function() {
    validateEmail(this.value);
});

// Pozivanje validacije na napuštanje polja za lozinku
document.getElementById("password").addEventListener("blur", function() {
    validatePassword(this.value);
});

// Pozivanje validacije na napuštanje polja za potvrdu lozinke
document.getElementById("confirmPassword").addEventListener("blur", function() {
    validateConfirmPassword(this.value, document.getElementById("password").value);
});

// Pozivanje validacije na napuštanje polja za telefon
document.getElementById("phone").addEventListener("blur", function() {
    validatePhone(this.value);
});
