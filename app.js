const snacks = [
    { name: 'Chips', description: 'Crunchy potato chips.' },
    { name: 'Cookies', description: 'Delicious chocolate chip cookies.' },
    { name: 'Nuts', description: 'Assorted nuts for a quick snack.' },
    { name: 'Pretzels', description: 'Salty pretzels for a crispy bite.' },
    { name: 'Granola Bar', description: 'Healthy granola bar with nuts and honey.' },
    { name: 'Popcorn', description: 'Light and fluffy popcorn.' },
    { name: 'Trail Mix', description: 'Nutty and fruity trail mix.' },
    { name: 'Cheese Balls', description: 'Cheesy, crunchy cheese balls.' }
];

let currentPage = 0;
const itemsPerPage = 4;

function displaySnacks() {
    const snackList = document.querySelector('.snack-list');
    snackList.innerHTML = '';
    const start = currentPage * itemsPerPage;
    const end = start + itemsPerPage;
    const currentSnacks = snacks.slice(start, end);

    currentSnacks.forEach(snack => {
        const snackItem = document.createElement('div');
        snackItem.classList.add('snack-item');
        snackItem.innerHTML = `
            <h3>${snack.name}</h3>
            <p>${snack.description}</p>
        `;
        snackList.appendChild(snackItem);
    });
}

function changePage(direction) {
    const totalPages = Math.ceil(snacks.length / itemsPerPage);
    currentPage = Math.max(0, Math.min(totalPages - 1, currentPage + direction));
    displaySnacks();
}

// Initial display
displaySnacks();

function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}
