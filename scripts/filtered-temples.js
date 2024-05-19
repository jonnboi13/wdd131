document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('menu-button');
    const navMenu = document.getElementById('header-nav');

    menuButton.addEventListener('click', function() {
        navMenu.classList.toggle('open');
        menuButton.classList.toggle('open');
    });
});


const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x250/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
      templeName: "Rome Italy",
      location: "Rome, Italy",
      dedicated: "2019, March, 10",
      area: 41010,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/2019/400x250/6-Rome-Temple-2160338.jpg"
    },
    {
      templeName: "Bentonville Arkansas",
      location: "Bentonville, Arkansas, United States",
      dedicated: "2023, September, 17",
      area: 28472,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/bentonville-arkansas/400x250/34410870d7d011ed8402eeeeac1ec672bdc0ce45.jpeg"
    },
    {
      templeName: "accra Ghana",
      location: "Accra, Ghana",
      dedicated: "2004, January, 11",
      area: 17500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/accra-ghana/400x250/accra-ghana-temple-detail-249022-2400x1200.jpg"
    },

];


let templeContainer = document.getElementById('temples');

temples.forEach(temple => {
    let templeElement = document.createElement('div');
    templeElement.innerHTML = `
        <div class="temple-card">
            <h2>${temple.templeName}</h2>
            <p><span class="highlight">Location:</span> ${temple.location}</p>
            <p><span class="highlight">Dedicated:</span> ${temple.dedicated}</p>
            <p><span class="highlight">Area:</span> ${temple.area} sq ft</p>
            <img src="${temple.imageUrl}" alt="${temple.templeName}" width="400" height="250" loading="lazy">
        </div>
    `;
    templeContainer.appendChild(templeElement);
});

// Get all filter buttons
let filterButtons = document.querySelectorAll('#header-nav a');

// Get the h2 element
var h2 = document.querySelector('main h2');

// Add click event listener to each button
filterButtons.forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default action

        // Get the filter value from the button text
        let filterValue = this.innerText.toLowerCase();

        // Update the h2 text
        switch (filterValue) {
            case 'large':
                h2.textContent = 'Large Temples';
                break;
            case 'small':
                h2.textContent = 'Small Temples';
                break;
            case 'old':
                h2.textContent = 'Old Temples';
                break;
            case 'new':
                h2.textContent = 'New Temples';
                break;
            default:
                h2.textContent = 'Home';
                break;
        }

        // Filter the temples array based on the filter value
        let filteredTemples = temples.filter(temple => {
            switch(filterValue) {
                case 'old':
                    return new Date(temple.dedicated).getFullYear() < 1900;
                case 'new':
                    return new Date(temple.dedicated).getFullYear() > 2000;
                case 'large':
                    return temple.area > 90000;
                case 'small':
                    return temple.area < 10000;
                case 'home':
                default:
                    return true; // return all temples
            }
        });

        // Clear the temple container
        templeContainer.innerHTML = '';

        // Generate new temple cards for the filtered temples
        filteredTemples.forEach(temple => {
            let templeElement = document.createElement('div');
            templeElement.innerHTML = `
                <div class="temple-card">
                    <h2>${temple.templeName}</h2>
                    <p><span class="highlight">Location:</span> ${temple.location}</p>
                    <p><span class="highlight">Dedicated:</span> ${temple.dedicated}</p>
                    <p><span class="highlight">Area:</span> ${temple.area} sq ft</p>
                    <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
                </div>
            `;
            templeContainer.appendChild(templeElement);
        });
    });
});

// Log the temples array
console.log(temples);

// Log the temple container
console.log(templeContainer);