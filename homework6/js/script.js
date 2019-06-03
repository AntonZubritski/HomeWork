let f = document.registration;
function changeBS() {
    if (f.name.value && f.email.value) {
        f.submit.disabled = false;
        document.getElementById("submit").className = "btn2";
    } else {
        f.submit.disabled = true;
        document.getElementById("submit").className = "btn";
    }
}
changeBS();