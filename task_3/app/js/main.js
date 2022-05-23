class ItcTabs {
    constructor(target, config) {
        const defaultConfig = {};
        this._config = Object.assign(defaultConfig, config);
        this._elTabs = typeof target === 'string' ? document.querySelector(target) : target;
        this._elButtons = this._elTabs.querySelectorAll('.tabs__btn');
        this._elPanes = this._elTabs.querySelectorAll('.tabs__pane');
        this._eventShow = new Event('tab.itc.change');
        this._init();
        this._events();
    }
    _init() {
        this._elTabs.setAttribute('role', 'tablist');
        this._elButtons.forEach((el, index) => {
            el.dataset.index = index;
            el.setAttribute('role', 'tab');
            this._elPanes[index].setAttribute('role', 'tabpanel');
        });
    }
    show(elLinkTarget) {
        const elPaneTarget = this._elPanes[elLinkTarget.dataset.index];
        const elLinkActive = this._elTabs.querySelector('.tabs__btn_active');
        const elPaneShow = this._elTabs.querySelector('.tabs__pane_show');
        if (elLinkTarget === elLinkActive) {
            return;
        }
        elLinkActive ? elLinkActive.classList.remove('tabs__btn_active') : null;
        elPaneShow ? elPaneShow.classList.remove('tabs__pane_show') : null;
        elLinkTarget.classList.add('tabs__btn_active');
        elPaneTarget.classList.add('tabs__pane_show');
        this._elTabs.dispatchEvent(this._eventShow);
        elLinkTarget.focus();
    }
    showByIndex(index) {
        const elLinkTarget = this._elButtons[index];
        elLinkTarget ? this.show(elLinkTarget) : null;
    };
    _events() {
        this._elTabs.addEventListener('click', (e) => {
            const target = e.target.closest('.tabs__btn');
            if (target) {
                e.preventDefault();
                this.show(target);
            }
        });
    }
}
new ItcTabs('.tabs');




const allSelectors = () => {
    const elements = document.querySelectorAll('.tabs__pane-select');
    elements.forEach(el => {
        const choices = new Choices(el, {
            searchEnabled: false,
            itemSelectText: ''
        });
    })
}
allSelectors();


var partners = {
    "1": {
        "img": "./images/partners/1.png",
        "alt": "1",
    },
    "2": {
        "img": "./images/partners/2.png",
        "alt": "2",
    },
    "3": {
        "img": "./images/partners/3.png",
        "alt": "3",
    },
    "4": {
        "img": "./images/partners/4.png",
        "alt": "4",
    },
    "5": {
        "img": "./images/partners/5.png",
        "alt": "5",
    }
}

var out = '';
for (var key in partners) {
    out += '<li><img src="' + partners[key].img + '" alt="' + partners[key].alt + '"></li>'
}
document.getElementById('out').innerHTML = out;


var popularEstate = {
    "1": {
        "img": "./images/estate/1.jpg",
        "name": "Capital hill residence",
        "location": "East London",
        "bedroom": 6,
        "kitchen": 2,
        "bath": 3,
        "price": "$5527.00",
        "button": "View Details",
    },
    "2": {
        "img": "./images/estate/2.jpg",
        "name": "Picket Fence Realty",
        "location": "East London",
        "bedroom": 6,
        "kitchen": 2,
        "bath": 3,
        "price": "$6727.00",
        "button": "View Details",
    },
    "3": {
        "img": "./images/estate/3.jpg",
        "name": "Banyon Tree Realty",
        "location": "East London",
        "bedroom": 6,
        "kitchen": 2,
        "bath": 3,
        "price": "$4327.00",
        "button": "View Details",
    },
    "4": {
        "img": "./images/estate/4.jpg",
        "name": "Corsair Real Estate",
        "location": "East London",
        "bedroom": 6,
        "kitchen": 2,
        "bath": 3,
        "price": "$4427.00",
        "button": "View Details",
    },
    "5": {
        "img": "./images/estate/5.jpg",
        "name": "Sequoia Real Estate",
        "location": "East London",
        "bedroom": 6,
        "kitchen": 2,
        "bath": 3,
        "price": "$4527.00",
        "button": "View Details",
    },
    "6": {
        "img": "./images/estate/6.jpg",
        "name": "Capital hill residence",
        "location": "East London",
        "bedroom": 6,
        "kitchen": 2,
        "bath": 3,
        "price": "$6727.00",
        "button": "View Details",
    },
}

var popularItems = '';
for (var key in popularEstate) {
    popularItems += '<li class="popular__item"><img class="popular__img" src="' + popularEstate[key].img + '" alt="' + popularEstate[key].alt + '"><div class="popular__content"><div class="popular__top"> <h4 class="popular__name"><a href="#">' + popularEstate[key].name + '</a></h4> <button id="like" class="popular__like"></button></div> <div class="popular__location"> ' + popularEstate[key].location + '</div><ul class="popular__rooms"><li class="popular__room">' + popularEstate[key].bedroom + '</li><li class="popular__room">' + popularEstate[key].kitchen + '</li><li class="popular__room">' + popularEstate[key].bath + '</li></ul><div class="popular__bottom"><div class="popular__price">' + popularEstate[key].price + '</div><button class="popular__btn btn"> ' + popularEstate[key].button + '</button></div></div> </li>'
}
document.getElementById('popular-items').innerHTML = popularItems;



var buttons = document.querySelectorAll('.popular__like');
console.log(buttons);
buttons.forEach(function (button) {
    console.log(button);
    button.addEventListener('click', function () {
        button.classList.toggle('popular__like--active')

    })
})


featuresItems = {
    "1": {
        "icon": "./images/icons/sec.svg",
        "title": "100% Security",
        "text": "For many of us, buying a home is a dre and one not easily attainable."
    },
    "2": {
        "icon": "./images/icons/conditioner.svg",
        "title": "Free air conditioner",
        "text": "For many of us, buying a home is a dre and one not easily attainable."
    },
    "3": {
        "icon": "./images/icons/garden.svg",
        "title": "Flower garden",
        "text": "For many of us, buying a home is a dre and one not easily attainable."
    },
}

var featuresList = '';
for (var key in featuresItems) {
    featuresList += '<li class="features__content"><div class="features__bg"><img src="' + featuresItems[key].icon + ' "></div><h4 class="features__head">' + featuresItems[key].title + '</h4> <p class="features__descr">' + featuresItems[key].text + '</p></li>'
}
document.getElementById('features__list').innerHTML = featuresList;



featuresItems2 = {
    "1": {
        "icon": "./images/icons/car.svg",
        "title": "Parkers & movers",
        "text": "For many of us, buying a home is a dre and one not easily attainable."
    },
    "2": {
        "icon": "./images/icons/sofa.svg",
        "title": "Rental furniture",
        "text": "For many of us, buying a home is a dre and one not easily attainable."
    },
    "3": {
        "icon": "./images/icons/pool.svg",
        "title": "Swimming pool",
        "text": "For many of us, buying a home is a dre and one not easily attainable."
    },
}

var featuresList2 = '';
for (var key in featuresItems2) {
    featuresList2 += '<li class="features__content"><div class="features__bg"><img src="' + featuresItems2[key].icon + ' "></div><h4 class="features__head">' + featuresItems2[key].title + '</h4> <p class="features__descr">' + featuresItems2[key].text + '</p></li>'
}
document.getElementById('features__list2').innerHTML = featuresList2;


var slider = tns({
    container: '.my-slider',
    items: 2,
    controls: false,
    navPosition: "bottom",
    //nav: true,
    slideBy: 1,
    navAsThumbnails: true,
    edgePadding: 20,


    responsive: {

    }
});