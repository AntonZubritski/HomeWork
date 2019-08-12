'use strict';


let frmPerson = document.getElementById('frmPerson');
let name = document.getElementById('name');
let cost = document.getElementById('cost');
let oldCost = document.getElementById('oldCost');
let img = document.getElementById('img');
let stat = document.getElementById('stat');
let categorysList = document.getElementById('categorysList');
let btnSaveCategory = document.getElementById('btnSaveCategory');
let btnDeleteCategory = document.getElementById('btnDeleteCategory');
let category = document.getElementById('category');
let warningText = document.getElementById('warningText');
let cat = document.getElementById('cat');
let operation = 'C'; //"C"=Сreate
let selected_index = -1; //Индекс выбранного элемента в списке

// Добавление Товаров из Goods.js в tblPersons
const localCopy = localStorage.getItem('tblPersons');

localStorage.setItem('tblPersons', JSON.stringify(goods));
let tblPersons = localCopy !== null ? localCopy : localStorage.getItem('tblPersons');

// let tblPersons = localStorage.getItem('tblPersons'); //вернуть сохраненные данные
tblPersons = JSON.parse(tblPersons); //преобразовать строку в объект

    if (tblPersons === null) { // если нет данных, запускаем пустой массив
        tblPersons = [];
    }

    function Create() {
        // Получить входные значения в HTML и преобразовать их в строку
        let person = {
            name: name.value,
            cost: cost.value,
            oldCost: oldCost.value,
            img: img.value,
            stat: stat.value,
            cat: cat.value
        };
        tblPersons.push(person);


        // Сохраняем данные в localStorage
        localStorage.setItem("tblPersons", JSON.stringify(tblPersons));
        alert("Данный сохранены"); //Оповещение
        List();
        return true;
    }

    function Edit() {
        // Редактировать выбранный элемент в таблице
        tblPersons[selected_index] = {
            name: name.value,
            cost: cost.value,
            oldCost: oldCost.value,
            img: img.value,
            stat: stat.value,
            cat: cat.value
        };

        //Хранить предметы в localStorage
        localStorage.setItem("tblPersons", JSON.stringify(tblPersons));
        alert("Данные отредактированы"); //Оповещение
        return true;
    }

    function Delete() {
        // Удалить выбранный элемент в таблице
        tblPersons.splice(selected_index, 1);
        // Обновить данные локального хранилища
        localStorage.setItem("tblPersons", JSON.stringify(tblPersons));
        alert("Товар удален"); //Оповещение
    }


    function List() {
        let tblList = document.getElementById('tblList');

        tblList.innerHTML = '';
        tblList.innerHTML = `
            <thead class="">
                <tr>
                <th>Товар</th>
                <th>Цена</th>
                <th>Старая цена</th>
                <th>Картинка</th>
                <th>Статус</th>
                <th>Категория</th>
                <th>Действия</th>
                </tr>
                </thead>
                <tbody>
                </tbody>
            `;//Добавить таблицу в структуру HTML


        for (let i in tblPersons) {
            let per = tblPersons[i];
            let tbody = document.querySelector('#tblList tbody');

            tbody.innerHTML += `<tr> 
                <td>${per.name}</td>
                <td>${per.cost}</td>
                <td>${per.oldCost}</td>
                <td>${per.img}</td>
                <td>${per.stat}</td>
                <td>${per.cat}</td>
                <td>
                
                <div class="text-center">
                   <i class="fa fa-pencil-square-o mr-3 color-icon" title='Edit${i}' id='btnEdit' onclick="edi(this)" ></i>  
                   <i class="fa fa-times-circle mr-3 color-icon" title='Delete${i}' id='btnDelete' onclick="del(this)"></i>
                </div>

                </td>
                </tr>`;
        } //загрузить и вставить элементы в таблицу
    }

    //----------------------------Category----------------------------------

    cat.innerHTML = `${categoryArray.map(it => `<option>${it}</option>`)}`;
    categorysList.innerHTML = `${categoryArray.map(it => `<option>${it}</option>`)}`;


    btnSaveCategory.addEventListener('click', function () {
        let categoryValue = category.value;

        if (!categoryValue.trim()) {
            warningText.innerHTML = `Please check input`;
        } else {
            warningText.innerHTML = null;
            categoryArray.push(categoryValue);
            categorysList.innerHTML = `${categoryArray.map(it => `<option>${it}</option>`)}`;
            cat.innerHTML = `${categoryArray.map(it => `<option>${it}</option>`)}`;
            List();
        }
    });


    btnDeleteCategory.addEventListener('click', function () {
        let categoryValue = category.value;

        if (!categoryValue.trim()) {
            warningText.innerHTML = `Please check input`;
        } else {
            warningText.innerHTML = null;
            if (categoryArray.includes(categoryValue)){
                categoryArray[categoryArray.indexOf(categoryValue)] = null;
                categorysList.innerHTML = `${categoryArray.map(it => `<option>${it}</option>`)}`;
                cat.innerHTML = `${categoryArray.map(it => `<option>${it}</option>`)}`;
                warningText.innerHTML = null;
                List();
            } else {
                warningText.innerHTML = 'Такой категории нет'
            }
        }
    });




//--------------------------------------------------------------

    frmPerson.addEventListener('submit', function () {
        if (operation === 'C') {
            return Create();
        } else {
            return Edit();
        }

    });
    List();

    function edi (e) {
        operation = 'E'; //'E' = Edit
        // Получить идентификатор элемента для редактирования
        selected_index = e.getAttribute('title').replace('Edit', '');

        // Конвертация JSON в правильный формат для элементов, подлежащих редактированию
        let per = tblPersons[selected_index];
        name.value = per.name;
        cost.value = per.cost;
        oldCost.value = per.oldCost;
        stat.value = per.stat;
        cat.value = per.cat;
    }

    function del (e) {
        // Получить идентификатор элемента, который нужно удалить
        selected_index = e.getAttribute('title').replace('Delete', '');

        Delete(); //удалить элемент
        List(); //Вернуться к пунктам, перечисленным в таблице
    }


