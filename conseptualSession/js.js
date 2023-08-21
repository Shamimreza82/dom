
let total = 0;
function cardsFunction(target) {
    const items = document.getElementById('main');
    const itemsList = target.parentNode.parentNode.childNodes[1].innerText;
    const p = document.createElement('p');

    p.innerText = itemsList;
    const append = items.appendChild(p);
    const selects = target.parentNode.parentNode.childNodes[5].innerText.split(' ')[1];
    total = total + parseInt(selects);
    const finalTotal = 0.30 * total;
    const fixed = finalTotal.toFixed(2);
    const grandTotal = total - finalTotal;


    document.getElementById('discount').innerText = fixed;
    document.getElementById('total').innerText = total;
    const grandTotale = document.getElementById('gran').innerText = grandTotal;
    document.getElementById('buyNow').addEventListener('click', function () {

    })

}



let x = function (x, y) {
    return (x * y);
}
