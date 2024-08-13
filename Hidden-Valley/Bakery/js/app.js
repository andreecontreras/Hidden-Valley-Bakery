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
const sectionTitles = {
    sweet: 'Pastries',
    rolls: 'Rolls & Buns',
    cakes: 'Cakes & Cupcakes: Custom Sizes',
    breads: 'Gluten-Free Breads',
    frosting: 'Frosting',
    filing: 'Filling',
    cream: 'Cream Pies',
    pies: 'Pies',
    cheesecake: 'Cheesecake',
};

const menuItems = {
    cakes: {
        cakes: [
            { name: 'White', description: 'Classic white cake with a tender crumb', price: '$15.00', imgSrc: 'images/hero-bg.jpg' },
            { name: 'Chocolate', description: 'Decadent chocolate cake with rich flavor', price: '$12.00', imgSrc: 'images/hero-bg.jpg' },
            { name: 'Marble', description: 'Swirled chocolate and vanilla cake', price: '$15.00', imgSrc: 'images/hero-bg.jpg' },
            { name: 'Red Velvet', description: 'Velvety red cake with cream cheese frosting', price: '$12.00', imgSrc: 'images/hero-bg.jpg' },
            { name: 'German Chocolate', description: 'Chocolate cake with coconut-pecan frosting', price: '$15.00', imgSrc: 'images/hero-bg.jpg' },
            { name: 'Carrot', description: 'Moist carrot cake with cream cheese frosting', price: '$12.00', imgSrc: 'images/hero-bg.jpg' }
        ],
        frosting: [
            { name: 'Buttercream', description: 'Smooth and sweet, perfect for any cake', price: '$2.00', imgSrc: 'images/hero-bg.jpg'},
            { name: 'Chocolate', description: 'Rich and creamy, with deep cocoa flavor', price: '$2.50', imgSrc: 'images/hero-bg.jpg'},
            { name: 'Cream Cheese', description: 'Tangy and velvety, a perfect balance of sweetness', price: '$2.50', imgSrc: 'images/hero-bg.jpg'},
            { name: 'Whipping Cream', description: 'Light and airy, with a delicate sweetness', price: '$1.50', imgSrc: 'images/hero-bg.jpg' },
            { name: 'Fondant', description: 'Smooth and pliable, ideal for intricate designs', price: '$3.00', imgSrc: 'images/hero-bg.jpg' },
            { name: 'Chocolate Shaving', description: 'Rich chocolate shavings for a luxurious finish', price: '$2.00', imgSrc: 'images/hero-bg.jpg' },
            { name: 'White Shaving', description: 'Delicate white chocolate shavings for a touch of elegance', price: '$2.00', imgSrc: 'images/hero-bg.jpg' }
        ],
        filling: [
            { name: 'Strawberry', description: 'Fresh strawberry filling for a burst of flavor', price: '$2.00', imgSrc: 'images/hero-bg.jpg' },
            { name: 'Raspberry', description: 'Tart raspberry filling for a bright taste', price: '$2.00', imgSrc: 'images/hero-bg.jpg' },
            { name: 'Lemon', description: 'Zesty lemon filling for a refreshing finish', price: '$2.00', imgSrc: 'images/hero-bg.jpg' },
            { name: 'Bavarian', description: 'Smooth and creamy Bavarian filling', price: '$2.00', imgSrc: 'images/hero-bg.jpg' },
            { name: 'Flavored Mousse', description: 'Light and airy mousse in a variety of flavors', price: '$2.00', imgSrc: 'images/hero-bg.jpg' }
        ]
    },

    baked: {
        breads: [
            { name: 'Featherlight', description: 'A light and airy bread perfect for sandwiches.', price: 'N/A', imgSrc: 'images/hero-bg.jpg' },
            { name: 'Hearty 5 Grain', description: 'A wholesome bread made with five different grains.', price: 'N/A', imgSrc: 'images/hero-bg.jpg' },
            { name: 'Sourdough', description: 'A tangy and chewy bread with a crisp crust.', price: 'N/A', imgSrc: 'images/hero-bg.jpg' },
            { name: 'Raisin Cinnamon', description: 'A sweet bread with raisins and a hint of cinnamon.', price: 'N/A', imgSrc: 'images/hero-bg.jpg' },
            { name: 'Cheese Herb', description: 'A savory bread infused with cheese and herbs.', price: 'N/A', imgSrc: 'images/hero-bg.jpg' },
            { name: 'Focaccia', description: 'An Italian flatbread topped with olive oil and herbs.', price: 'N/A', imgSrc: 'images/hero-bg.jpg' },
            { name: 'Baguette', description: 'A classic French bread with a crispy crust and soft interior.', price: 'N/A', imgSrc: 'images/hero-bg.jpg' },
            { name: 'French Loaf', description: 'A traditional French bread with a soft and fluffy texture.', price: 'N/A', imgSrc: 'images/hero-bg.jpg' },
            { name: 'Garlic French', description: 'A French loaf infused with garlic for extra flavor.', price: 'N/A', imgSrc: 'images/hero-bg.jpg' },
            { name: 'French Boule', description: 'A round French bread with a thick crust and soft interior.', price: 'N/A', imgSrc: 'images/hero-bg.jpg' }
        ],
        rolls: [
            //Plain Roll, Rosemary Garlic, Garlic Romano, Hearty 5 Grain, Hamburger Bun, Prezel
            { name: 'Plain Roll', description: 'A classic roll perfect for any meal.', price: 'N/A', imgSrc: 'images/hero-bg.jpg' },
            { name: 'Rosemary Garlic', description: 'A flavorful roll infused with rosemary and garlic.', price: 'N/A', imgSrc: 'images/hero-bg.jpg' },
            { name: 'Garlic Romano', description: 'A savory roll topped with garlic and Romano cheese.', price: 'N/A', imgSrc: 'images/hero-bg.jpg' },
            { name: 'Hearty 5 Grain', description: 'A wholesome roll made with five different grains.', price: 'N/A', imgSrc: 'images/hero-bg.jpg' },
            { name: 'Hamburger Bun', description: 'A soft and fluffy bun perfect for burgers.', price: 'N/A', imgSrc: 'images/hero-bg.jpg' },
            { name: 'Pretzel', description: 'A chewy and salty roll with a crispy crust.', price: 'N/A', imgSrc: 'images/hero-bg.jpg' }
        ],
        sweet: [
        // Danish, Muffins, Coffee Cakes, Scones, Cookies, Apple Fritter, Cake doughnut, Brownies
            { name: 'Danish', description: 'A flaky pastry filled with fruit or cheese.', price: 'N/A', imgSrc: 'images/hero-bg.jpg' },
            { name: 'Muffins', description: 'A sweet and tender breakfast treat.', price: 'N/A', imgSrc: 'images/hero-bg.jpg' },
            { name: 'Coffee Cakes', description: 'A moist and crumbly cake perfect with coffee.', price: 'N/A', imgSrc: 'images/hero-bg.jpg' },
            { name: 'Scones', description: 'A buttery and flaky pastry with a tender crumb.', price: 'N/A', imgSrc: 'images/hero-bg.jpg' },
            { name: 'Cookies', description: 'A sweet and chewy treat in a variety of flavors.', price: 'N/A', imgSrc: 'images/hero-bg.jpg' },
            { name: 'Apple Fritter', description: 'A sweet and crispy pastry filled with apples.', price: 'N/A', imgSrc: 'images/hero-bg.jpg' },
            { name: 'Cake Doughnut', description: 'A tender and sweet doughnut in a variety of flavors.', price: 'N/A', imgSrc: 'images/hero-bg.jpg' },
            { name: 'Brownies', description: 'A rich and fudgy treat perfect for chocolate lovers.', price: 'N/A', imgSrc: 'images/hero-bg.jpg' }
        ]
    },
    pies: {
        cream: [
            // Banana, Coconut, French Chocolate Silk, Meringue, Keylime
            { name: 'Banana', description: 'A creamy pie filled with fresh bananas.', price: 'N/A', imgSrc: 'images/hero-bg.jpg' },
            { name: 'Coconut', description: 'A tropical pie filled with sweet coconut.', price: 'N/A', imgSrc: 'images/hero-bg.jpg' },
            { name: 'French Chocolate Silk', description: 'A rich and velvety pie with a smooth texture.', price: 'N/A', imgSrc: 'images/hero-bg.jpg' },
            { name: 'Meringue', description: 'A light and airy pie topped with fluffy meringue.', price: 'N/A', imgSrc: 'images/hero-bg.jpg' },
            { name: 'Keylime', description: 'A tangy and refreshing pie made with fresh key limes.', price: 'N/A', imgSrc: 'images/hero-bg.jpg' }
        ],
        pies: [
            //Apple, Dutch Apple, Cherry, Marionberry, Strawberry Rhurbarb, Peach, Blueberry Peach, Blueberry, Huckelberry
            { name: 'Apple', description: 'A classic pie filled with sweet and tart apples.', price: 'N/A', imgSrc: 'images/hero-bg.jpg' },
            { name: 'Dutch Apple', description: 'A crumbly pie topped with a sweet streusel.', price: 'N/A', imgSrc: 'images/hero-bg.jpg' },
            { name: 'Cherry', description: 'A sweet and tangy pie filled with cherries.', price: 'N/A', imgSrc: 'images/hero-bg.jpg' },
            { name: 'Marionberry', description: 'A juicy and flavorful pie made with marionberries.', price: 'N/A', imgSrc: 'images/hero-bg.jpg' },
            { name: 'Strawberry Rhubarb', description: 'A sweet and tart pie filled with strawberries and rhubarb.', price: 'N/A', imgSrc: 'images/hero-bg.jpg' },
            { name: 'Peach', description: 'A juicy and sweet pie filled with fresh peaches.', price: 'N/A', imgSrc: 'images/hero-bg.jpg' },
            { name: 'Blueberry Peach', description: 'A fruity pie filled with blueberries and peaches.', price: 'N/A', imgSrc: 'images/hero-bg.jpg' },
            { name: 'Blueberry', description: 'A sweet and juicy pie filled with blueberries.', price: 'N/A', imgSrc: 'images/hero-bg.jpg' },
            { name: 'Huckleberry', description: 'A tart and flavorful pie made with huckleberries.', price: 'N/A', imgSrc: 'images/hero-bg.jpg' }
        ]
    },
    desserts: {
        cheesecake: [
            //New York, Chocolate Swirl, Fruit Flavor
            { name: 'New York', description: 'A classic cheesecake with a rich and creamy texture.', price: 'N/A', imgSrc: 'images/hero-bg.jpg' },
            { name: 'Chocolate Swirl', description: 'A decadent cheesecake swirled with chocolate.', price: 'N/A', imgSrc: 'images/hero-bg.jpg' },
            { name: 'Fruit Flavor', description: 'A fruity cheesecake in a variety of flavors.', price: 'N/A', imgSrc: 'images/hero-bg.jpg' }]
    }
};

function showCategory(category) {
    const content = document.getElementById('content');
    content.innerHTML = '';

    const categoryItems = menuItems[category];

    for (const section in categoryItems) {
        // Create a container for each section
        const sectionContainer = document.createElement('div');
        sectionContainer.className = 'section-container';

        // Create section header
        const sectionHeader = document.createElement('h2');
        sectionHeader.textContent = sectionTitles[section] || section.charAt(0).toUpperCase() + section.slice(1);
        sectionContainer.appendChild(sectionHeader);

        // Create main content container for the section
        const mainContent = document.createElement('main');
        mainContent.className = 'main-content';

        // Add menu items for the section
        categoryItems[section].forEach((item) => {
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

        sectionContainer.appendChild(mainContent);
        content.appendChild(sectionContainer);
    }
}
// Initially show the first category
showCategory('baked');
