


const renderModal = (e) => {
    let nameModalInn = document.getElementById('nameModal');
    let costModalInn = document.getElementById('costModal');
    let oldCostModalInn = document.getElementById('oldCostModal');
    let imgModalInn = document.getElementById('imgModal');
    let id = e.getAttribute('data-id');

    for (let good of goods) {

        if (good.id === id) {

            nameModalInn.innerText = good.name;
            costModalInn.innerText = good.cost + "$";
            oldCostModalInn.innerText = good.oldCost + "$";
            imgModalInn.setAttribute('src', good.img);
        }

    }
};

