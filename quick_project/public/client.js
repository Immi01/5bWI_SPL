document.addEventListener('DOMContentLoaded', async () => {
    const searchInput = document.getElementById('searchInput');
    const cardsContainer = document.getElementById('cardsContainer');
    let allPeople = [];

    async function fetchPeople() {
        try {
            const response = await fetch('/api/people?count=20');
            allPeople = await response.json();
            renderCards(allPeople);
        } catch (error) {
            console.error('Error fetching people:', error);
        }
    }

    function renderCards(people) {
        cardsContainer.innerHTML = people.map(person => `
            <div class="card" data-avatar="${person.avatar}" data-name="${person.name}" data-description="${person.description}">
                <img src="${person.avatar}" alt="${person.name}">
                <h3>${person.name}</h3>
                <p>${person.description}</p>
                <p><strong>Occupation:</strong> ${person.occupation}</p>
            </div>
        `).join('');

        // Add click listeners to cards
        document.querySelectorAll('.card').forEach(card => {
            card.addEventListener('click', function() {
                const isExpanded = this.classList.contains('expanded');
                
                if (!isExpanded) {
                    // Create overlay
                    const overlay = document.createElement('div');
                    overlay.className = 'overlay';
                    document.body.appendChild(overlay);
                    
                    // Add close button
                    const closeBtn = document.createElement('button');
                    closeBtn.className = 'close-btn';
                    closeBtn.innerHTML = '×';
                    this.appendChild(closeBtn);
                    
                    // Handle close button click
                    closeBtn.addEventListener('click', (e) => {
                        e.stopPropagation();
                        this.classList.remove('expanded');
                        overlay.remove();
                        closeBtn.remove();
                    });
                    
                    // Handle overlay click
                    overlay.addEventListener('click', () => {
                        this.classList.remove('expanded');
                        overlay.remove();
                        closeBtn.remove();
                    });
                }
                
                this.classList.toggle('expanded');
            });
        });
    }

    searchInput.addEventListener('input', (e) => {
        const searchText = e.target.value.toLowerCase();
        const filteredPeople = allPeople.filter(person => 
            person.name.toLowerCase().includes(searchText) ||
            person.description.toLowerCase().includes(searchText) ||
            person.occupation.toLowerCase().includes(searchText)
        );
        renderCards(filteredPeople);
    });

    await fetchPeople();
}); 