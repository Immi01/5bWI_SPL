// Fetch people data from the API
async function fetchPeople() {
    try {
        const response = await fetch('http://localhost:3000/api/people?count=20');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
}

// Create card element
function createCard(person) {
    return `
        <div class="card">
            <img src="${person.avatar}" alt="${person.name}">
            <h3>${person.name}</h3>
            <p>${person.description}</p>
        </div>
    `;
}

// Filter cards based on search input
function filterCards(searchText, people) {
    const filtered = people.filter(person => 
        person.name.toLowerCase().includes(searchText.toLowerCase())
    );
    renderCards(filtered);
}

// Render cards to the container
function renderCards(people) {
    const container = document.getElementById('cardsContainer');
    container.innerHTML = people.map(person => createCard(person)).join('');
}

// Initialize the page
async function init() {
    const people = await fetchPeople();
    renderCards(people);

    // Add search functionality
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', (e) => {
        filterCards(e.target.value, people);
    });
}

// Start the application
init(); 