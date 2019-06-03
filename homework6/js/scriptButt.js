function button2() {
    for (let j = 1; j<=5; j++)
    document.getElementById("butt"+ j).onclick = function () {
            if (document.getElementById("imgD").className !== "displayed"+ j) {
                document.getElementById("imgD").className = "displayed"+ j;
            } else {
                document.getElementById("imgD").className = "displayed";
            }
    }
}
window.onload = function () {
    button2();
};