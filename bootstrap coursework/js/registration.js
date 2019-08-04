
//CATALOG

let btnRegClick = document.getElementById('btnClickReg');

const adminPanelInn = function () {
    let email = document.getElementById('exampleDropdownFormEmail2');
    let password = document.getElementById('exampleDropdownFormPassword2');

    event.preventDefault();

    if (email.value == 'admin@admin.by' && password.value == 'admin') {

        console.log('validate');

    } else {
        return false;
    }

};
