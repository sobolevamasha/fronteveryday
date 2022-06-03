window.onload = function () {
    const parallax = document.querySelector('.parallax');

    if (parallax) {
        const branches = document.querySelector('.first__parallax');

        const forBranches = 10;

        const speed = 0.15;

        let positionX = 0,
            positionY = 0;
        let coordXprocent = 0,
            coordYprocent = 0;

        function setMouse() {
            const distX = coordXprocent - positionX;
            const distY = coordYprocent - positionY;

            positionX = positionX + (distX * speed);
            positionY = positionY + (distY * speed);

            branches.style.cssText = `transform: translate(${positionX / forBranches}%,${positionY / forBranches}%);`;

            requestAnimationFrame(setMouse);
        }
        setMouse();

        parallax.addEventListener("mousemove", function (e) {
            const parallaxWidht = parallax.offsetWidth;
            const parallaxHeight = parallax.offsetHeight;

            const coordX = e.pageX - parallaxWidht / 2;
            const coordY = e.pageY - parallaxHeight / 2;

            coordXprocent = coordX / parallaxWidht * 100;
            coordYprocent = coordY / parallaxHeight * 100;
        });

    }
}

const counters = document.querySelectorAll('.first__count');
const speed = 400;

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        const inc = target / speed;

        if (count < target) {
            counter.innerText = Math.ceil(count + inc);
            setTimeout(updateCount, 1);
        } else {
            count.innerText = target;
        }
    }

    updateCount();
});


var slider = tns({
    container: '.my-slider',
    items: 1,
    controls: true,
    controlsPosition: "bottom",
    controlsText: ["", ""],
    //nav: true,
    slideBy: 1,
    //navAsThumbnails: true,
    //edgePadding: 20,


    responsive: {

    }
});

var rating = document.querySelector('.rating'),
    ratingItem = document.querySelectorAll('.rating-item');

rating.onclick = function (e) {
    var target = e.target;
    if (target.classList.contains('rating-item')) {
        removeClass(ratingItem, 'current-active')
        target.classList.add('active', 'current-active');
    }
}

rating.onmouseover = function (e) {
    var target = e.target;
    if (target.classList.contains('rating-item')) {
        removeClass(ratingItem, 'active')
        target.classList.add('active');
        mouseOverActiveClass(ratingItem)
    }
}
rating.onmouseout = function () {
    addClass(ratingItem, 'active');
    mouseOutActiveClas(ratingItem);
}

function removeClass(arr) {
    for (var i = 0, iLen = arr.length; i < iLen; i++) {
        for (var j = 1; j < arguments.length; j++) {
            ratingItem[i].classList.remove(arguments[j]);
        }
    }
}

function addClass(arr) {
    for (var i = 0, iLen = arr.length; i < iLen; i++) {
        for (var j = 1; j < arguments.length; j++) {
            ratingItem[i].classList.add(arguments[j]);
        }
    }
}

function mouseOverActiveClass(arr) {
    for (var i = 0, iLen = arr.length; i < iLen; i++) {
        if (arr[i].classList.contains('active')) {
            break;
        } else {
            arr[i].classList.add('active');
        }
    }
}

function mouseOutActiveClas(arr) {
    for (var i = arr.length - 1; i >= 1; i--) {
        if (arr[i].classList.contains('current-active')) {
            break;
        } else {
            arr[i].classList.remove('active');
        }
    }
}


/*MENU*/

var x = document.getElementById("contain");

x.addEventListener("click", myFunction);

function myFunction() {
    var element = document.getElementById("nav");
    element.classList.toggle("open");

    x.classList.toggle("change");
}