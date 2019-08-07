/*-----------------Click change color------------------*/
/*--при нажатии на кнопку меняются цвета элементов-*/

let btnColorAll = document.querySelectorAll('.fa-adjust');

let navGoods = document.querySelector('.nav-goods');
let pageFooter = document.querySelector('.page-footer-color');
let cartColorAll = document.querySelectorAll('.cart-color');
let tblList = document.querySelector('.tblList');
let btnGr = document.querySelector('.btn-gr');
let sliderTitleAll = document.querySelectorAll('.slider-list__item .title__element .title ');
let sliderFillAll = document.querySelectorAll('.slider-list__item .more__element .content .link .fill');

btnColorAll.forEach(btnColor => {
    btnColor.addEventListener('click', function () {

        if (btnColor.dataset.id === "1" ) {

            pageFooter.classList.remove('page-footer-color');
            pageFooter.classList.add('page-footer-color2');

            cartColorAll.forEach(cartColor => {
                cartColor.classList.remove('cart-color');
                cartColor.classList.add('cart-color2');
            });
            if (tblList || btnGr !== null) {
                tblList.classList.remove('tblList');
                tblList.classList.add('tblList2');

                btnGr.classList.remove('btn-gr');
                btnGr.classList.add('cart-color2');
            }
            sliderTitleAll.forEach(sliderTitle => {
                sliderTitle.classList.remove('title');
                sliderTitle.classList.add('title2');
            });
            if (sliderFillAll !== null) {
                sliderFillAll.forEach(sliderFill => {
                    sliderFill.classList.remove('fill-green', 'fill-dark', 'fill-blue');
                    sliderFill.classList.add('fill-violet')
                })
            }
            navGoods.classList.remove('nav-goods');
            navGoods.classList.add('nav-goods-color2');

        }


         else if (btnColor.dataset.id === "2") {
            pageFooter.classList.remove('page-footer-color2');
            pageFooter.classList.add('page-footer-color');

            cartColorAll.forEach(cartColor => {
                cartColor.classList.remove('cart-color2');
                cartColor.classList.add('cart-color');
            });
            if (tblList || btnGr !== null) {
                tblList.classList.remove('tblList2');
                tblList.classList.add('tblList');

                btnGr.classList.remove('cart-color2');
                btnGr.classList.add('btn-gr');
            }

            sliderTitleAll.forEach(sliderTitle => {
                sliderTitle.classList.remove('title2');
                sliderTitle.classList.add('title');
            });
            navGoods.classList.remove('nav-goods-color2');
            navGoods.classList.add('nav-goods');
        }
    })
});
