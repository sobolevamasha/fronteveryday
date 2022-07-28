const timer = {
    pomodoro: 20,
    shortBreak: 5,
    longBreak: 15,
    longBreakInterval: 4,
    sessions: 0,
};

let interval;

const mainButton = document.querySelector('.timer__btn');
mainButton.addEventListener('click', () => {
    const {
        action
    } = mainButton.dataset;
    if (action === 'start') {
        startTimer();
    } else {
        stopTimer();
    }
});

const modeButtons = document.querySelector('.timer__switchers');
modeButtons.addEventListener('click', handleMode);

function getRemainingTime(endTime) {
    const currentTime = Date.parse(new Date());
    const difference = endTime - currentTime;

    const total = Number.parseInt(difference / 1000, 10);
    const minutes = Number.parseInt((total / 60) % 60, 10);
    const seconds = Number.parseInt(total % 60, 10);

    return {
        total,
        minutes,
        seconds,
    };
}

function startTimer() {
    let {
        total
    } = timer.remainingTime;
    const endTime = Date.parse(new Date()) + total * 1000;

    if (timer.mode === 'pomodoro') timer.sessions++;

    mainButton.dataset.action = 'pause';
    mainButton.textContent = 'pause';
    mainButton.classList.add('active');

    interval = setInterval(function () {
        timer.remainingTime = getRemainingTime(endTime);
        updateClock();

        total = timer.remainingTime.total;
        if (total <= 0) {
            clearInterval(interval);

            switch (timer.mode) {
                case 'pomodoro':
                    if (timer.sessions % timer.longBreakInterval === 0) {
                        switchMode('longBreak');
                    } else {
                        switchMode('shortBreak');
                    }
                    break;
                default:
                    switchMode('pomodoro');
            }

            startTimer();
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(interval);

    mainButton.dataset.action = 'start';
    mainButton.textContent = 'start';
    mainButton.classList.remove('active');
}

function switchMode(mode) {
    timer.mode = mode;
    timer.remainingTime = {
        total: timer[mode] * 60,
        minutes: timer[mode],
        seconds: 0,
    };

    document
        .querySelectorAll('button[data-mode]')
        .forEach(e => e.classList.remove('active'));
    document.querySelector(`[data-mode="${mode}"]`).classList.add('active');
    document
        .querySelector('.progress__circle')
        .setAttribute('max', timer.remainingTime.total);

    updateClock();
}


function updateClock() {
    const {
        remainingTime
    } = timer;
    const minutes = `${remainingTime.minutes}`.padStart(2, '0');
    const seconds = `${remainingTime.seconds}`.padStart(2, '0');

    const min = document.querySelector('.mins');
    const sec = document.querySelector('.secs');
    min.textContent = minutes;
    sec.textContent = seconds;


    const progress = document.querySelector('.progress__circle');
    progress.max = progress.getAttribute('max');
    console.log('max : ', progress.max);
    progress.value = timer[timer.mode] * 60 - timer.remainingTime.total;
    const radius = progress.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;

    progress.style.strokeDasharray = `${circumference} ${circumference}`;
    progress.style.strokeDashoffset = circumference * (progress.max - remainingTime.total) / (timer[timer.mode] * 60);


    console.log(remainingTime.total);
    console.log(timer[timer.mode] * 60);

}


function handleMode(event) {
    const {
        mode
    } = event.target.dataset;

    if (!mode) return;

    switchMode(mode);
    stopTimer();
}

document.addEventListener('DOMContentLoaded', () => {
    switchMode('pomodoro');
});


/* MODAL */

const modal = document.getElementById('modal');
const openModal = document.querySelector('.timer__modal-btn');
const closeModal = document.querySelector('.timer__modal-close');

openModal.onclick = function () {
    modal.style.display = 'block';
}

closeModal.onclick = function () {
    modal.style.display = 'none';
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

const min = document.querySelectorAll('.timer__modal-min');
const max = document.querySelectorAll('.timer__modal-max');
const input = document.querySelectorAll('input[type="number"]');
console.log(input);
console.log(max);
console.log(min);

function stepUp() {
    input.forEach(function (input) {
        if (input.value >= 0 && input.value !== input.max) {
            input.value = ++input.value;
            console.log(input.value);
        }
    })
}

function stepDown() {
    input.forEach(function (input) {
        if (input.value > 0) {
            input.value = --input.value;
            console.log(input.value);
        }
    })
}

document.addEventListener("DOMContentLoaded", function (event) {
    const applyBtn = document.querySelector('.timer__modal-apply');
    const body = document.getElementsByTagName('body');
    const checkedInput = document.getElementById('font1').checked;
    console.log(checkedInput);


    applyBtn.onclick = function (checkedInput) {
        if (checkedInput) {
            body.setAttribute('style', 'font-family:Roboto Slab !important');
            console.log('ok');
        }
    }
});