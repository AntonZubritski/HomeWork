
let cartCount = [];
let cartCountHui = ""
let qwe = 0;

let counter = () => {
    let count = document.getElementById("counter");
console.log(count.innerText,'sdfsdf');
console.log("qwe.length", qwe.length);
cartCountHui = localStorage.getItem('Key').replace(/[^,\d;]/g, '');
    qwe = cartCountHui.split(',');
    count.innerText = "";
    count.innerText = qwe[0] === "" && qwe.length == 1 ? "" : qwe.length;
};



// localStorage.setItem('Key');
const renderTable = () => {
    let container = document.querySelector('#contentContainer');
    container.innerHTML = goods.map((good, index) => {
            const {id = ""} = good;
            let result = [];
            if(qwe.includes(id)) {
                console.log("qwe.includes(id)", qwe.includes(id))
                result.push( `<tr>
                    <th scope="row">${index + 1}</th>
                    <td>${good.name}</td>
                    <td><img class="img-fluid img-size" src=${good.img} alt=""></td>
                    <td>"empty"</td>
                    <td>${good.cost}</td>
                </tr>`)}
                console.log("result", result);
                return result;

    }).join("");
    return container.innerHTML += `  <tr class="green">
        <th scope="row">Итого к оплате</th>
        <td colspan="1">65$</td>
    </tr>`
};

window.onload = function(){
    counter();
    renderTable()

};