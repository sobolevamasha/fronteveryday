//если  у тогла есть класс discount, то иннер хтмл = дата-таргет/procent
//элсе иннер хтмл = дата таргет

const btn = document.querySelector('.main__toggle');
btn.onclick = function () {
    btn.classList.toggle('discount');
}

const priceDivs = document.querySelectorAll('.tariff__price');
let procent = 5;

priceDivs.forEach(priceDiv => {
    const setPrice = () => {
        let price = priceDiv.getAttribute('data-target');
        let discount = btn.classList.contains('discount');

        if (discount) {
            priceDiv.innerHTML = Math.round(price / procent);
        } else {
            priceDiv.innerHTML = price;
        }
    }
    setPrice();
});