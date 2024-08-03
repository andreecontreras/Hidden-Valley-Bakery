// MENU TOGGLE
const selectElement = function (element) {
    return document.querySelector(element);
};

let menuToggler = selectElement('.menu-toggle');
let body = selectElement('body');

menuToggler.addEventListener('click', function () {
    body.classList.toggle('show');
});

// CLOSE THE NAV WHEN NAVLNKS ARE CLICKED
let navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(function (navLink) {
    navLink.addEventListener('click', function () {
        body.classList.remove('show');
    })
})

// SCROLL REVEAL
window.sr = ScrollReveal();

sr.reveal('.animate-left', {
    origin: 'left',
    duration: 1000,
    distance: '25rem',
    delay: 300
});

sr.reveal('.animate-right', {
    origin: 'right',
    duration: 1000,
    distance: '25rem',
    delay: 300
});

sr.reveal('.animate-top', {
    origin: 'top',
    duration: 1000,
    distance: '25rem',
    delay: 300
});

sr.reveal('.animate-bottom', {
    origin: 'bottom',
    duration: 1000,
    distance: '25rem',
    delay: 300
});

// Menu Page
const menuItems = {
    pastries: [
        { name: 'Cinnamon Roll', description: 'Warm and gooey', price: '$3.50', imgSrc: 'images/hero-bg.jpg' },
        { name: 'Donut', description: 'Soft and sweet', price: '$1.50', imgSrc: 'images/hero-bg.jpg' }
    ],
    drinks: [
        { name: 'Italian Soda', description: 'Refreshing and bubbly', price: '$2.50', imgSrc: 'images/hero-bg.jpg' },
        { name: 'Fountain Drink', description: 'Classic soda', price: '$1.75', imgSrc: 'images/hero-bg.jpg' }
    ],
    sandwiches: [
        { name: 'BLT', description: 'Crispy bacon, lettuce, and tomato', price: '$5.00', imgSrc: 'images/hero-bg.jpg' },
        { name: 'Grilled Cheese', description: 'Cheesy and toasty', price: '$4.00', imgSrc: 'images/hero-bg.jpg' }
    ],
    specials: [
        { name: 'Bagel Dog', description: 'Hot dog wrapped in a bagel', price: '$3.00', imgSrc: 'images/hero-bg.jpg' }
    ]
};

function showCategory(category) {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = '';

    menuItems[category].forEach((item, index) => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';

        const imgContainer = document.createElement('div');
        imgContainer.className = 'img-container';

        const img = document.createElement('img');
        img.src = item.imgSrc;
        img.alt = item.name;
        img.width = 100;
        img.height = 100;

        imgContainer.appendChild(img);

        const info = document.createElement('div');
        info.className = 'info';

        const name = document.createElement('h3');
        name.textContent = item.name;

        const description = document.createElement('p');
        description.textContent = item.description;

        const price = document.createElement('p');
        price.textContent = item.price;

        info.appendChild(name);
        info.appendChild(description);
        info.appendChild(price);

        menuItem.appendChild(imgContainer);
        menuItem.appendChild(info);

        mainContent.appendChild(menuItem);
    });
}

// Initially show the first category
showCategory('pastries');

// Initially show the first category
showCategory('pastries');
