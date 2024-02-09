function togglePasswordVisibility() {
    var passwordfield = document.getElementById("passwordfield");
    var eyeIcon = document.querySelector(".toggle-password");

    if (passwordfield.type === "password") {
        passwordfield.type = "text";
        eyeIcon.classList.add("fa-eye-slash");
        eyeIcon.classList.remove("fa-eye");
    } else {
        passwordfield.type = "password";
        eyeIcon.classList.add("fa-eye");
        eyeIcon.classList.remove("fa-eye-slash");
    }
}

function togglePasswordVisibility1() {
    var passwordfield = document.getElementById("passwordfield1");
    var eyeIcon = document.querySelector(".toggle-password1");

    if (passwordfield.type === "password") {
        passwordfield.type = "text";
        eyeIcon.classList.add("fa-eye-slash");
        eyeIcon.classList.remove("fa-eye");
    } else {
        passwordfield.type = "password";
        eyeIcon.classList.add("fa-eye");
        eyeIcon.classList.remove("fa-eye-slash");
    }
}
