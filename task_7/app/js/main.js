let quoteBtn = document.querySelector('.main__new-quote');
let quotes = [
    '“Be yourself; everyone else is already taken.” ― Oscar Wilde',
    '“Im selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you cant handle me at my worst, then you sure as hell dont deserve me at my best.”― Marilyn Monroe'
]
let output = document.querySelector('.main__quote');
let author = document.querySelector('.main__author');

function randomQuote() {
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result => {
        console.log(result);
        output.innerText = result.content;
        author.innerText = result.author;
    });
}

quoteBtn.addEventListener('click', randomQuote);