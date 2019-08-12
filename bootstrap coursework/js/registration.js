"use strict";

let email = document.getElementById('email');
let password = document.getElementById('password');
let email2 = document.getElementById('email2');
let password2 = document.getElementById('password2');
let warningText2 = document.getElementById('warningText2');
let navBtnSign = document.querySelectorAll('#navBtnSign li');
let btnRegClick = document.querySelectorAll('.btnClickReg');
let btnPersonData = document.getElementById('btnPersonData');
let dataPersons = localStorage.getItem('dataPersons');


btnRegClick.forEach(regClick => {
    regClick.addEventListener('click', function () {
        for (let i in dataPersons) {
            if (email.value == dataPersons[i].inputEmail && password.value == dataPersons[i].inputPassword) {
                window.open('admin.html');

            } else if (btnPersonData !== null) {

                    if (email2.value == dataPersons[i].inputEmail && password2.value == dataPersons[i].inputPassword) {
                        window.open('admin.html')
                    }
                }
            }
        }
    )
});


/*---------------------sign in/ to /sign up-----------------------*/
navBtnSign.forEach(function(btnLi) {
    btnLi.addEventListener("click", function() {

        if (btnLi.classList.contains('active') == false) {
            navBtnSign.forEach(function (i) {
               i.classList.remove('active')
            });
            btnLi.classList.add('active')
        }
    })
});


/*---------------------Registration person-----------------------*/
dataPersons = JSON.parse(dataPersons);

if (dataPersons === null) {
    dataPersons = [];
}

let firstName = document.getElementById('firstName');
let lastName = document.getElementById('lastName');
let inputEmail2 = document.getElementById('inputEmail2');
let inputPassword2 = document.getElementById('inputPassword2');


function Create() {
    // Получить входные значения в HTML и преобразовать их в строку
    let person = {
        firstName: firstName.value,
        lastName: lastName.value,
        inputEmail: inputEmail2.value,
        inputPassword: inputPassword2.value
    };

    dataPersons.push(person);
    // Сохраняем данные в localStorage
    localStorage.setItem("dataPersons", JSON.stringify(dataPersons));
    alert("Данный сохранены"); //Оповещение
    return true;
}


let adminLogin = function () {
    btnPersonData.addEventListener('click', function () {
        if (firstName.value && lastName.value && inputEmail2.value && inputPassword2.value !== '') {
            warningText.innerHTML = '';
            warningText2.innerHTML = 'Вы успещно зарегестрированы';
            return Create()

        } else {
            return warningText.innerHTML = 'Заполните все данные';
        }
    })
};



if (btnPersonData !== null) {
    window.onload = function () {
        adminLogin();
    }
}
