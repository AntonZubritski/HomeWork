"use strict";



/*---------------------Pagination-----------------------*/
let notesOnPage = 4; /*Колличество элементов на странице*/
let paginationAmount = Math.ceil(goods.length / notesOnPage);

let pagination = document.getElementById('pagination');

const paginationActiveAmount = () => {
    for (let i = 0; i < paginationAmount; i++) {

        let li = document.createElement('li');
        pagination.appendChild(li);

        let findLi = document.querySelectorAll('#pagination li')[i];
        findLi.classList.add('page-item');

        let a = document.createElement('a');
        findLi.appendChild(a);
        let findA = document.querySelectorAll('#pagination li a')[i];
        findA.classList.add('page-link');
        a.innerHTML = i + 1;

        let items = document.querySelectorAll('#pagination li a');
        for (let item of items) {
            item.addEventListener("click", function () {
                let li = document.querySelector(".page-item.active");
                li.classList.remove("active");
                this.parentNode.classList.add("active");


                let pageNum = +this.innerHTML;
                let start = (pageNum - 1) * notesOnPage ;
                let end = start + notesOnPage;
                let notes = goods.slice(start, end);
                renderCards(notes);
                btnActiveGood();

            }  )}

    }
};

let btnClick = e => {
    let id = e.getAttribute('data-id');

    if (e.classList.contains('active')) {

        e.classList.remove("active");
        e.innerHTML = "Добавить в корзину";
        cartCount.pop(id);
        localStorage.setItem('Key', JSON.stringify(cartCount));
        counter();

    } else {

        e.classList.add("active");
        e.innerHTML = "Удалить из корзины";
        cartCount.push(id);
        localStorage.setItem('Key', JSON.stringify(cartCount));
        counter();
    }

};


/*---------------------Goods Render-----------------------*/
const renderCards = notes => {
    return document.querySelector('#goodsItem').innerHTML = notes.map(note => {
        return (
            `<div class="col-lg-3 col-md-6 mb-4" >
                     <div class="card">
                         <div class="view overlay">
                             <img class="card-img-top" src="${note.img}" alt="">
                             <a href="#">
                                 <div class="mask rgba-white-slight"></div>
                             </a>
                         </div>
                         <div class="card-body text-center">
                             <a href="" class="grey-text">
                                 <h5>Кожа</h5>
                             </a>
                             <h5>
                                 <strong>
                                     <a href="#" class="dark-grey-text">${note.name}
                                         <span class="badge badge-pill green">${note.stat}</span></a>
                                 </strong>
                             </h5>
                             <h4 class="font-weight-lighter light-green-text">
                                 <strong>${note.cost}$</strong>
                             </h4>
                             
                             <button type="submit" data-id = ${note.id} data-toggle="modal" data-target="#myModal" class="btn btn-md my-0 btnGoods" onclick="btnClick(this); renderModal(this)">
                                 Добавить в корзину <i class="fa fa-shopping-cart ml-1"></i>
                             </button>
                             
                    </form>
                         </div>
                     </div>
                </div>`
        )
    }).join("");
};



const btnActiveGood = () => {
    let btnGoods = document.querySelectorAll('.btnGoods');
    for (let btnGood of btnGoods) {
        for (let cartCountStore of cartCountStorSplit)
            if (cartCountStore == btnGood.dataset.id) {
                btnGood.classList.add("active");
                btnGood.innerHTML = "Удалить из корзины";
            }
    }
};



/*---------------------Win.ONLOAD-----------------------*/
// pagination.addEventListener('click', btnActiveGood());



if (window.location.pathname == '/Desktop/Home/bootstrap%20coursework/catalog.html' || '/Desktop/Home/bootstrap%20coursework/cart.html') {
    window.onload = function(){
        let pageNum = 1;
        let start = (pageNum - 1) * notesOnPage;
        let end = start + notesOnPage;
        let notes = goods.slice(start, end);
        paginationActiveAmount();
        renderCards(notes);
        counter();
        btnActiveGood();
        document.querySelector(".page-item").classList.add("active");

    }}



// let items = document.querySelectorAll('#pagination li a');
// for (let item of items) {
//     item.addEventListener("click", function () {
//         let li = document.querySelector(".page-item.active");
//         li.classList.remove("active");
//         this.parentNode.classList.add("active");
//
//
//         let pageNum = +this.innerHTML;
//         let start = (pageNum - 1) * notesOnPage ;
//         let end = start + notesOnPage;
//         let notes = goods.slice(start, end);
//         renderCards(notes);
//
//     }  )}


/*---------------------Add Class Button + LocalStorage-----------------------*/
// let btnGoods = document.querySelectorAll('.btnGoods');
// for (let btnGood of btnGoods) {
//     btnGoods.addEventListener('click', function () {
//         let id = this.getAttribute('data-id');
//         console.log("id", id);
//         if (this.classList.contains('active')) {
//
//             this.classList.remove('active');
//             this.innerHTML = 'Добавить в корзину';
//             cartCount.pop(id);
//             localStorage.setItem('Key', JSON.stringify(cartCount));
//             counter();
//
//         } else {
//
//             this.classList.add('active');
//             this.innerHTML = 'Удалить из корзины';
//             cartCount.push(id);
//             localStorage.setItem('Key', JSON.stringify(cartCount));
//             counter();
//     }
// })}







/*---------------------Active menu -----------------------*/




// let navActiveAll = document.querySelectorAll('#navbarContent li.nav-item');
//
// for (let navActive of navActiveAll) {
//     navActive.addEventListener("click", function (e) {
//
//             e.classList.add("active");
//
//
//     })
// }

/*---------------------Cart.HTML Import-----------------------*/

// let cartTransition = () => {
//     let tagImport = document.getElementById('import');
//     tagImport.setAttribute('href', 'cart.html');
//
//     document.getElementById('container').style.display = 'none';
//
//     let cart = document.querySelector('link[rel="import"]').import;
//     let text = cart.getElementsByTagName('table');
//
//     document.write.appendChild(text.cloneNode(true));
//
// };




// click => conteiner disply none => добавть <link rel="import" href="cart.html">








//
//
//
//
// let items = document.querySelectorAll('#pagination li a');
//
// for (let item of items) {
//     item.addEventListener("click", function () {
//         // this.classList.add("active");
//
//         let pageNum = +this.innerHTML;
//
//         let start = (pageNum - 1) * notesOnPage ;
//         let end = start + notesOnPage;
//         let notes = goods.slice(start, end);
//


// let gItem = document.querySelector('#goodsItem');
//
//         for (let note of notes) {
//
//                 oneCart(note.name, note.cost, note.img, note.stat)
//
//         }
//     })
// }


// function oneCart(name, cost, img, stat) {
//
//         let div = document.createElement('div');
//         goodsItem.appendChild(div);
//         let div1 = document.querySelectorAll('#goodsItem div')[0];//== 5
//         div.classList.add('col-lg-3', 'mb-4', 'col-md-6', '1');
//
//
//
//
//     let divChild2 = document.createElement('div');
//     div1.appendChild(divChild2);
//     let div2 = document.querySelectorAll('#goodsItem div div')[0];//== 4
//     divChild2.classList.add('card', '2');
//
//
//     for (i = 0; i < 2; i++ ) {
//         let divChild3 = document.createElement('div');
//         div2.appendChild(divChild3);
//     }
//
//     let div3 = document.querySelectorAll('#goodsItem div div div')[0];//== 3
//     div3.classList.add('view', 'overlay', '3');
//     let div3_1 = document.querySelectorAll('#goodsItem div div div')[1];//== 4
//     div3_1.classList.add('card-body', 'text-center', '3_1');
//
//     let imgChild = document.createElement('img');
//     div3.appendChild(imgChild);
//     let img1 = document.querySelectorAll('#goodsItem div div div img')[0];//== 1
//     img1.classList.add('card-img-top');
//
//     img1.setAttribute('src', goods[1].img); /*Элемент вставки - Картинка*/
//
//
//     let aChild = document.createElement('a');
//     div3.appendChild(aChild);
//     let a1 = document.querySelector('#goodsItem div div div a');//== 3
//     a1.href = 'shop-page.html';
//
//     let divChildA = document.createElement('div');
//     a1.appendChild(divChildA);
//     let divA = document.querySelectorAll('#goodsItem div div div a div')[0];//==1
//     divA.classList.add('mask', 'rgba-white-slight', 'divA');
//
//     let aChild2 = document.createElement('a');
//     div3_1.appendChild(aChild2);
//     let a2 = document.querySelectorAll('#goodsItem div div div a')[1];//==4
//     a2.href = 'shop-page.html';
//     a2.classList.add('grey-text');
//
//     let aChildH5 = document.createElement('h5');
//     a2.appendChild(aChildH5);
//     let h5A = document.querySelectorAll('#goodsItem h5')[0];//==2
//     h5A.innerText = "Кожа";
//
//     let h5Childdiv = document.createElement('h5');
//     div3_1.appendChild(h5Childdiv);
//     let h5div = document.querySelectorAll('#goodsItem h5')[1];//==3
//
//     let strong = document.createElement('strong');
//     h5div.appendChild(strong);
//     let h5strong = document.querySelectorAll('#goodsItem h5 strong')[0];//==1
//
//     let strChildA = document.createElement('a');
//     h5strong.appendChild(strChildA);
//     let h5A_2 = document.querySelectorAll('#goodsItem h5 strong a')[0];//==1
//     h5A_2.href = 'shop-page.html';
//     h5A_2.classList.add('dark-grey-text');
//
//     h5A_2.innerText = goods[i].name; /*Элемент вставки - Имя*/
//
//
//     let aChildSpan = document.createElement('span');
//     h5A_2.appendChild(aChildSpan);
//     let aSpan = document.querySelectorAll('#goodsItem h5 strong a span')[0];//==1
//     aSpan.classList.add('badge', 'badge-pill', 'green', 'mr-3', 'ml-3');
//
//     aChildSpan.innerText = stat;/*Элемент вставки - Новинка*/
//
// }


/*---------------------Product inserts-----------------------*/

// for (var i = 0; i <= Object.keys(goods).length; i++) {
//     if(+paginationActive.textContent === 1) {
//         if(i < 8){
//             goodsItem +=`
//                   <div class="col-lg-3 col-md-6 mb-4">
//                       <div class="card">
//                           <div class="view overlay">
//                               <img class="card-img-top" src="${goods[i].img}" alt="">
//                               <a href="shop-page.html">
//                                   <div class="mask rgba-white-slight"></div>
//                               </a>
//                           </div>
//                           <div class="card-body text-center">
//                               <a href="" class="grey-text">
//                                   <h5>Кожа</h5>
//                               </a>
//                               <h5>
//                                   <strong>
//                                       <a href="shop-page.html" class="dark-grey-text">${goods[i].name}
//                                           <span class="badge badge-pill green">NEW</span></a>
//                                   </strong>
//                               </h5>
//                               <h4 class="font-weight-bold blue-text">
//                                   <strong></strong>
//                               </h4>
//                           </div>
//                       </div>
//                   </div>`;
//             if (idGoods) {
//                 idGoods.innerHTML = goodsItem;
//             }
//         }
//     }
// }


/*---------------------Pagination-----------------------*/
