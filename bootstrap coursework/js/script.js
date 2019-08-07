"use strict";



/*---------------------Pagination-----------------------*/
let notesOnPage = 8; /*Колличество элементов на странице*/
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
        findA.classList.add('page-link','cart-color');
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
    return document.querySelector('#goodsItem').innerHTML = notes.map((note, index) => {
        return (
            `<div class="col-lg-3 col-md-6 mb-4" >
                     <div class="card">
                         <div class="view overlay">
                             <img class="card-img-top" src="${note.img}" alt="">
                             <a href="">
                                 <div class="mask rgba-white-slight"></div>
                             </a>
                         </div>
                         <div class="card-body text-center">
                             <a href="" class="grey-text">
                                 <h5>${note.cat}</h5>
                             </a>
                             <h5>
                                 <strong>
                                     <a href="#" class="dark-grey-text">${note.name}
                                         <span class="badge badge-pill cart-color">${note.stat}</span></a>
                                 </strong>
                             </h5>
                             <h4 class="font-weight-lighter light-green-text">
                                 <strong>${note.cost}$</strong>
                             </h4>
                             
                             <button type="submit" data-id = ${note.id} data-toggle="modal" data-target="#myModal${index + 1}" class="btn btn-md my-0 btnGoods">
                                 Подробнее<i class="fa fa-shopping-cart ml-1"></i>
                             </button>
                             
                    </form>
                         </div>
                     </div>
                </div>
                
                <div class="modal fade" id="myModal${index + 1}" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div class="modal-body modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">

                            <div class="container dark-grey-text">
                                <div class="row wow fadeInn">
                                    <div class="col-md-4 mb-4">
                                        <img id="imgModal" src="${note.img}" alt="fenyaPic" class="img-fluid img-thumbnail">
                                    </div>
                                    <div class="col-md-8 mb-4">
                                        <div class="p-4">
                                            <div class="mb-3">
                                                <a href="">
                                                    <span class="badge purple mr-1">Категория 2</span>
                                                </a>
                                                <a href="">
                                                    <span class="badge blue mr-1">NEW</span>
                                                </a>
                                                <a href="">
                                                    <span class="badge red mr-1">Топчик!</span>
                                                </a>
                                            </div>
                                            <p class="lead">
                                                <span class="mr-1">
                                                    <del id="oldCostModal">${note.oldCost}$</del>
                                                </span>
                                                <span class="mr-1" id="costModal">${note.cost}$</span>
                                            </p>
                                            <p class="lead font-weight-bold" id="nameModal">${note.name}</p>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                Assumenda at deleniti dicta dolor ex harum illo in modi
                                                molestias nulla numquam perferendis porro quae quasi quod
                                                rem veniam, voluptas voluptatum.
                                            </p>
                                            <form class="d-flex justify-content-left">
                                                <input type="number" value="1" aria-label="search"
                                                       style="width: 50px;" class="form-control">
                                                <button type="button" data-id = ${note.id} onclick="btnClick(this)" class="btn green btn-md my-0 p">
                                                    Добавить в корзину <i class="fa fa-shopping-cart ml-1"></i>
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
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


    };