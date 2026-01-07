// Select DOM elements
const header = document.querySelector("header");
const darkModeToggle = document.getElementById("dark-mode-toggle");
const body = document.body;
const searchBtn = document.querySelector('.search-btn');
const searchBox = document.querySelector('.search-box');
const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');
const menu = document.querySelector("#menu-icon");
const navmenu = document.querySelector(".navmenu");
const signupBtn = document.getElementById('signup-btn');
const closePopup = document.getElementById('close-popup');
const signupPopup = document.getElementById('signup-popup');

// Example product dataset
const products = [
    { id: 1, name: "Half Running Set - Blue", price: "$99-$129", image: "blue.jpg" },
    { id: 2, name: "Half Running Set - Black & White", price: "$99-$129", image: "B&W.jpg" },
    { id: 3, name: "Half Running Set - Orange", price: "$99-$129", image: "orange.jpg" }
];

// Show the signup popup
signupBtn.onclick = () => {
    signupPopup.style.display = 'block';
};

// Hide the signup popup when the close button is clicked
closePopup.onclick = () => {
    signupPopup.style.display = 'none';
};

// Hide the signup popup if the user clicks outside the popup
window.onclick = (event) => {
    if (event.target === signupPopup) {
        signupPopup.style.display = 'none';
    }
};

// Sticky Header on Scroll
window.addEventListener("scroll", () => {
    header.classList.toggle("sticky", window.scrollY > 0);
});

// Menu Toggle
menu.onclick = () => {
    menu.classList.toggle("bx-x");
    navmenu.classList.toggle("open");
};

// Dark Mode Toggle
darkModeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    darkModeToggle.textContent = body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

// Function to handle search
function handleSearch() {
    const searchQuery = searchInput.value.trim();
    if (searchQuery !== '') {
        alert('Searching for: ' + searchQuery); // Placeholder for actual search logic
    } else {
        alert('Please enter a search term.');
    }
}

// Listen for Enter key press in the search input
searchInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        handleSearch();
    }
});

// Listen for search button click
searchBtn.addEventListener('click', handleSearch);
