let quoteBtn = document.querySelector('.main__new-quote');
let output = document.querySelector('.main__quote');
let author = document.querySelector('.main__author');

quoteBtn.onclick = function () {
    quoteBtn.classList.toggle('clicked');

    function randomQuote() {
        fetch("https://api.quotable.io/random").then(res => res.json()).then(result => {
            console.log(result);
            output.innerText = result.content;
            author.innerText = result.author;
        });
    }
    randomQuote();
}

const dateDiv = document.querySelector('.main__clock');
const greetText = document.querySelector('.main__greeting-text');
const greetIcon = document.querySelector('.main__greeting-icon');
const body = document.getElementById('bg');



window.onload = function () {
    window.setInterval(function () {

        let date = new Date();
        let h = date.getHours();
        let m = date.getMinutes();
        

        function MakeTwoDigits(m) {
            if (m >= 0 && m <= 9) {
                return "0" + m;
            } else {
                return "" + m;
            }
        }

        body.classList.add('day');

        dateDiv.innerHTML = h + ':' + MakeTwoDigits(m);
        if (date.getHours() > 4 && date.getHours() < 12) {
            greetIcon.src = 'images/sun.svg'
            greetText.innerText = 'Good morning, it`s currently'
        }
        if ((date.getHours() > 12 && date.getHours() < 16)) {
            greetIcon.src = 'images/moon.svg'
            greetText.innerText = 'Good day, it`s currently'
        }
        if ((date.getHours() > 16 && date.getHours() < 22)) {
            greetIcon.src = 'images/moon.svg'
            greetText.innerText = 'Good evening, it`s currently'
            
        }
        else {
            greetIcon.src = 'images/moon.svg'
            greetText.innerText = 'Good night, it`s currently'
            body.classList.add('night');
            addBlock.classList.add('night');
        }
    }, 1000);

};

const switchBtn = document.querySelector('.main__btn');
const addBlock = document.querySelector('.add');
const topBlock = document.querySelector('.main__wrap');
const container = document.querySelector('.container');
const quoteBlock = document.querySelector('.main__quote-wrap');

switchBtn.onclick = function () {
    switchBtn.classList.toggle('clicked');
    addBlock.classList.toggle('visible');
    topBlock.classList.toggle('sized');
    container.classList.toggle('half-sized');
    quoteBlock.style.display = quoteBlock.style.display === 'none' ? '' : 'none';
    topBlock.style.justifyContent = topBlock.style.justifyContent === 'center' ? '' : 'center';
}