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

        body.style.backgroundImage = 'url(./images/day.jpg)'
        //body.classList.add('day');



        dateDiv.innerHTML = h + ':' + MakeTwoDigits(m);
        console.log(h, m);

        function setContent() {
            if (h >= 4 && h <= 11) {
                greetIcon.src = 'images/sun.svg'
                greetText.innerText = 'Good morning, it`s currently'
                if($(window).width() < 600) {
                    greetText.innerText = 'Good morning'
                }


            }
            else if (h >= 12 && h <= 15) {
                greetIcon.src = 'images/moon.svg'
                greetText.innerText = 'Good day, it`s currently'
                if($(window).width() < 600) {
                    greetText.innerText = 'Good day'
                }

            }
            else if (h >= 16 && h <= 21) {
                greetIcon.src = 'images/moon.svg'
                greetText.innerText = 'Good evening, it`s currently'
                if($(window).width() < 600) {
                    greetText.innerText = 'Good evening'
                }

            } else {
                greetIcon.src = 'images/moon.svg'
                greetText.innerText = 'Good night, it`s currently'
                if($(window).width() < 600) {
                    greetText.innerText = 'Good night'
                }
                //body.classList.add('night');
                body.style.backgroundImage = 'url(./images/night.jpg)'
                addBlock.classList.add('night');
            }
        }
        setContent(h, m);
    }, 1000);

};

const timeZone = document.querySelector('.time-zone');
timeZone.innerHTML = Intl.DateTimeFormat().resolvedOptions().timeZone;

const weekDay = document.querySelector('.week-day');
const yearDay = document.querySelector('.year-day');
const weekNumber = document.querySelector('.week-number');

(function() {
    let days = ['7','1','2','3','4','5','6'];
    Date.prototype.getDayName = function() {
        return days[ this.getDay() ];
    };
    Date.prototype.getWeek = function() {
        var onejan = new Date(this.getFullYear(), 0, 1);
        return Math.ceil((((this - onejan) / 86400000) + onejan.getDay() + 1) / 7 - 1);
    }
})();
const now = new Date();
weekDay.innerHTML = now.getDayName();
weekNumber.innerHTML = (new Date()).getWeek();
let start = new Date(now.getFullYear(), 0, 0);
let diff = now - start;
let oneDay = 1000 * 60 * 60 * 24;
let day = Math.floor(diff / oneDay);
yearDay.innerHTML = day;


const switchBtn = document.querySelector('.main__btn');
const btnText = document.querySelector('.btn-text');
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
    btnText.innerHTML =
    (btnText.innerHTML === 'less') ? btnText.innerHTML = 'more' : btnText.innerHTML = 'less';
}