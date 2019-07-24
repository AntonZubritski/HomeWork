
let cartCount = [];
let cartCountStor = "";
let cartCountStorSplit = 0;

let counter = () => {
    let count = document.getElementById("counter");

    cartCountStor = localStorage.getItem('Key').replace(/[^,\d;]/g, '');

    cartCountStorSplit = cartCountStor.split(',');
    count.innerText = "";
    count.innerText = cartCountStorSplit[0] === "" && cartCountStorSplit.length == 1 ? "" : cartCountStorSplit.length;
};



const renderTable = () => {
    let container = document.querySelector('#contentContainer');
    container.innerHTML = goods.map((good, index) => {

            const {id = ""} = good;
            let result = [];
            if (cartCountStorSplit.includes(id)) {

                result.push( `<tr>
                    <th scope="row">${index + 1}</th>
                    <td>${good.name}</td>
                    <td><img class="img-fluid img-size" src=${good.img} alt=""></td>
                    <td>"empty"</td>
                    <td>${good.cost} $</td>
                </tr>`)}
                return result;

    }).join("");
    return container.innerHTML += `  <tr class="green">
        <th scope="row">Итого</th>
        <td colspan="1">65$</td>
    </tr>`
};

let catalog = '/Desktop/Home/bootstrap%20coursework/catalog.html';
let cart = '/Desktop/Home/bootstrap%20coursework/cart.html';


if (window.location.pathname == catalog || cart){
window.onload = function(){
    counter();
    renderTable();
}}

