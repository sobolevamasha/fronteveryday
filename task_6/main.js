//если  у тогла есть класс discount, то иннер хтмл = дата-таргет/procent
//элсе иннер хтмл = дата таргет

const btn = document.querySelector('.main__toggle');
btn.onclick = function () {
    btn.classList.toggle('discount');

    const priceDivs = document.querySelectorAll('.tariff__price');
    let procent = 0.35;

    priceDivs.forEach(priceDiv => {
        const setPrice = () => {
            let price = priceDiv.getAttribute('data-target');
            let discount = btn.classList.contains('discount');

            if (discount) {
                priceDiv.innerHTML = ((price * 12) - ((price * 12) * procent) ).toFixed(2);
            } else {
                priceDiv.innerHTML = price;
            }
        }
        setPrice();
    });
}