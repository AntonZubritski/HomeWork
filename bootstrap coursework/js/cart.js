"use strict";

let cartCount = [];
let cartCountStor = "";
let cartCountStorSplit = 0;
let container = document.querySelector('#contentContainer');
let containerFooter = document.getElementById('contentConteinerFooter');
let numberCartAmount = document.querySelectorAll('.numberCartAmount');


let counter = () => {
    let count = document.getElementById("counter");
    cartCountStor = localStorage.getItem('Key').replace(/[^,\d;]/g, '');
    cartCountStorSplit = cartCountStor.split(',');
    count.innerText = "";
    count.innerText = cartCountStorSplit[0] === "" && cartCountStorSplit.length == 1 ? "" : cartCountStorSplit.length;
};

const renderTable = () => {
    container.innerHTML = goods.map((good, index) => {

            const {id = ""} = good;
            let result = [];
            if (cartCountStorSplit.includes(id)) {

                result.push( `<tr>
                    <th scope="row" class = "index">${index + 1}</th>
                    <td>${good.name}</td>
                    <td>
                        <img class="img-fluid img-size" src=${good.img} alt="GoodImg">
                    </td>
                    <td class="inputContainer">
                        <input type="number" value="1" min="1" aria-label="search" style="width: 50px;" class="form-control numberCartAmount" />
                    </td>
                    <td class="cost">${good.cost} $</td>
                    <td id="summCart">${good.cost}</td>
                </tr>`)}
                return result;
    }).join("");
           container.innerHTML += `<tr class="cart-color">
                    <th scope="row">Итого</th>
                    <td colspan="5" class="text-center">0$</td>
                 </tr>`;
           containerFooter.innerHTML += `<div  class="col-md-12 text-center">
        <button type="submit" class="btn cart-color btn-lg">Заказать</button>
        </div>`
};


function listeners() {
    document.querySelectorAll(".numberCartAmount").forEach( item =>{

        item.addEventListener("change", function(e){

            let res = parseInt(event.target.parentNode.parentNode.querySelector('.cost').textContent) * e.target.value;
            event.target.parentNode.parentNode.querySelector('#summCart').innerHTML = res;

            let sum = Array.prototype.slice.call((document.querySelectorAll('#summCart'))).reduce( (res, item) => {
               return  res += parseInt(item.innerText)
            }, 0);

            document.querySelector(".text-center").innerHTML = sum;
    })})
}




window.onload = function () {
    counter()
};
if (container !== null ) {
    window.onload = function(){
        counter();
        renderTable();
        listeners()
    }
}



