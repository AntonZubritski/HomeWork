"use strict";


/*---------------------Product inserts-----------------------*/








/*---------------------Product inserts-----------------------*/





/*  Pagination inner  */

let notesOnPage = 8;
let paginationAmount = Math.ceil(goods.length / notesOnPage);

for (let i = 0; i < paginationAmount; i++) {
        let li = document.createElement('li');
        pagination.appendChild(li);

        let findLi = document.querySelectorAll('#pagination li')[i];
        findLi.classList.add('page-item');

        let a = document.createElement('a');
        findLi.appendChild(a);
        let findA = document.querySelectorAll('#pagination li a')[i];
        findA.classList.add('page-link');

        let b = i + 1;
        a.innerHTML = b;
    }




let items = document.querySelectorAll('#pagination li a');

for (let item of items) {
    item.addEventListener("click", function () {
        // this.classList.add("active");

        let pageNum = +this.innerHTML;

        let start = (pageNum - 1) * notesOnPage ;
        let end = start + notesOnPage;
        let notes = goods.slice(start, end);



let gItem = document.querySelector('#goodsItem');
        for (let note of notes) {
                oneCart(note.name, note.cost, note.img, note.stat)

        }
    })
}


function oneCart(name, cost, img, stat) {

    let gItem = document.querySelector('#goodsItem');

    let div = document.createElement('div');
    gItem.appendChild(div);
    let div1 = document.querySelector('#goodsItem div');
    div1.classList.add('col-lg-3', 'mb-4', 'col-md-6', '1');


    let divChild2 = document.createElement('div');
    div1.appendChild(divChild2);
    let div2 = document.querySelector('#goodsItem div div');
    div2.classList.add('card', '2');


    for (i = 0; i < 2; i++ ) {
        let divChild3 = document.createElement('div');
        div2.appendChild(divChild3);
    }

    let div3 = document.querySelectorAll('#goodsItem div div div')[0];
    div3.classList.add('view', 'overlay', '3');
    let div3_1 = document.querySelectorAll('#goodsItem div div div')[1];
    div3_1.classList.add('card-body', 'text-center', '3_1');

    let imgChild = document.createElement('img');
    div3.appendChild(imgChild);
    let img1 = document.querySelector('#goodsItem div div div img');
    img1.classList.add('card-img-top');

    img1.setAttribute('src', img); /*Элемент вставки - Картинка*/


    let aChild = document.createElement('a');
    div3.appendChild(aChild);
    let a1 = document.querySelector('#goodsItem div div div a');
    a1.href = 'shop-page.html';

    let divChildA = document.createElement('div');
    a1.appendChild(divChildA);
    let divA = document.querySelector('#goodsItem div div div a div');
    divA.classList.add('mask', 'rgba-white-slight', 'divA');

    let aChild2 = document.createElement('a');
    div3_1.appendChild(aChild2);
    let a2 = document.querySelectorAll('#goodsItem div div div a')[1];
    a2.href = 'shop-page.html';
    a2.classList.add('grey-text');

    let aChildH5 = document.createElement('h5');
    a2.appendChild(aChildH5);
    let h5A = document.querySelectorAll('#goodsItem h5')[0];
    h5A.innerText = "Кожа";

    let h5Childdiv = document.createElement('h5');
    div3_1.appendChild(h5Childdiv);
    let h5div = document.querySelectorAll('#goodsItem h5')[1];

    let strong = document.createElement('strong');
    h5div.appendChild(strong);
    let h5strong = document.querySelector('#goodsItem h5 strong');

    let strChildA = document.createElement('a');
    h5strong.appendChild(strChildA);
    let h5A_2 = document.querySelector('#goodsItem h5 strong a');
    h5A_2.href = 'shop-page.html';
    h5A_2.classList.add('dark-grey-text');

    h5A_2.innerText = name; /*Элемент вставки - Имя*/


    let aChildSpan = document.createElement('span');
    h5A_2.appendChild(aChildSpan);
    let aSpan = document.querySelector('#goodsItem h5 strong a span');
    aSpan.classList.add('badge', 'badge-pill', 'green', 'mr-3', 'ml-3');

    aSpan.innerText = stat;/*Элемент вставки - Новинка*/

}


/*---------------------Product inserts-----------------------*/

// for (var i = 0; i <= Object.keys(goods).length; i++) {
//     if(+paginationActive.textContent === 1) {
//         if(i < 8){
//             goodsItem +=`
//                            <div class="col-lg-3 col-md-6 mb-4">
//                                <div class="card">
//                                    <div class="view overlay">
//                                        <img class="card-img-top" src="${goods[i].img}" alt="">
//                                        <a href="shop-page.html">
//                                            <div class="mask rgba-white-slight"></div>
//                                        </a>
//                                    </div>
//                                    <div class="card-body text-center">
//                                        <a href="" class="grey-text">
//                                            <h5>Кожа</h5>
//                                        </a>
//                                        <h5>
//                                            <strong>
//                                                <a href="shop-page.html" class="dark-grey-text">${goods[i].name}
//                                                    <span class="badge badge-pill green">NEW</span></a>
//                                            </strong>
//                                        </h5>
//                                        <h4 class="font-weight-bold blue-text">
//                                            <strong></strong>
//                                        </h4>
//                                    </div>
//                                </div>
//                            </div>`;
//             if (idGoods) {
//                 idGoods.innerHTML = goodsItem;
//             }
//         }
//     }
// }


/*---------------------Pagination-----------------------*/





/*---------------------Cart-----------------------*/
// function oneCart(name, cost, img, stat) {

// let div = document.createElement('div');
// goodsItem.appendChild(div);
// let div1 = document.querySelector('#goodsItem div');
// div1.classList.add('col-lg-3', 'mb-4', 'col-md-6', '1');
//
//
// let divChild2 = document.createElement('div');
// div1.appendChild(divChild2);
// let div2 = document.querySelector('#goodsItem div div');
// div2.classList.add('card', '2');
//
//
// for (i = 0; i < 2; i++ ) {
//     let divChild3 = document.createElement('div');
//     div2.appendChild(divChild3);
// }
//
// let div3 = document.querySelectorAll('#goodsItem div div div')[0];
// div3.classList.add('view', 'overlay', '3');
// let div3_1 = document.querySelectorAll('#goodsItem div div div')[1];
// div3_1.classList.add('card-body', 'text-center', '3_1');
//
// let imgChild = document.createElement('img');
// div3.appendChild(imgChild);
// let img1 = document.querySelector('#goodsItem div div div img');
// img1.classList.add('card-img-top');
//
// img1.setAttribute('src', goods[1].img); /*Элемент вставки - Картинка*/
//
//
// let aChild = document.createElement('a');
// div3.appendChild(aChild);
// let a1 = document.querySelector('#goodsItem div div div a');
// a1.href = 'shop-page.html';
//
// let divChildA = document.createElement('div');
// a1.appendChild(divChildA);
// let divA = document.querySelector('#goodsItem div div div a div');
// divA.classList.add('mask', 'rgba-white-slight', 'divA');
//
// let aChild2 = document.createElement('a');
// div3_1.appendChild(aChild2);
// let a2 = document.querySelectorAll('#goodsItem div div div a')[1];
// a2.href = 'shop-page.html';
// a2.classList.add('grey-text');
//
// let aChildH5 = document.createElement('h5');
// a2.appendChild(aChildH5);
// let h5A = document.querySelectorAll('#goodsItem h5')[0];
// h5A.innerText = "Кожа";
//
// let h5Childdiv = document.createElement('h5');
// div3_1.appendChild(h5Childdiv);
// let h5div = document.querySelectorAll('#goodsItem h5')[1];
//
// let strong = document.createElement('strong');
// h5div.appendChild(strong);
// let h5strong = document.querySelector('#goodsItem h5 strong');
//
// let strChildA = document.createElement('a');
// h5strong.appendChild(strChildA);
// let h5A_2 = document.querySelector('#goodsItem h5 strong a');
// h5A_2.href = 'shop-page.html';
// h5A_2.classList.add('dark-grey-text');
//
// h5A_2.innerText = goods[i].name; /*Элемент вставки - Имя*/
//
//
// let aChildSpan = document.createElement('span');
// h5A_2.appendChild(aChildSpan);
// let aSpan = document.querySelector('#goodsItem h5 strong a span');
// aSpan.classList.add('badge', 'badge-pill', 'green', 'mr-3', 'ml-3');
//
// aSpan.innerText = "NEW";/*Элемент вставки - Новинка*/
// }
