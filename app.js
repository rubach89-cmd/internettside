// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeMonthWheel();
    initializePlantGrid();
    initializeCalculator();
    initializePlantDetails();
    highlightCurrentMonth();
});

// Highlight current month in the yearly wheel
function highlightCurrentMonth() {
    const currentMonth = new Date().getMonth();
    const monthItems = document.querySelectorAll('.month-item');
    monthItems.forEach(item => {
        if (parseInt(item.dataset.month) === currentMonth) {
            item.style.border = '3px solid #f4a259';
        }
    });
}

// Initialize monthly wheel interaction
function initializeMonthWheel() {
    const monthItems = document.querySelectorAll('.month-item');
    const activitiesDisplay = document.getElementById('month-activities');
    
    monthItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove active class from all months
            monthItems.forEach(m => m.classList.remove('active'));
            // Add active class to clicked month
            this.classList.add('active');
            
            const monthIndex = parseInt(this.dataset.month);
            const monthName = this.textContent;
            displayMonthActivities(monthIndex, monthName, activitiesDisplay);
        });
    });
    
    // Show current month by default
    const currentMonth = new Date().getMonth();
    const currentMonthItem = document.querySelector(`[data-month="${currentMonth}"]`);
    if (currentMonthItem) {
        currentMonthItem.click();
    }
}

// Display activities for selected month
function displayMonthActivities(monthIndex, monthName, container) {
    const activities = monthlyActivities[monthIndex] || [];
    
    let html = `<h3>${monthName} - Aktiviteter</h3>`;
    
    if (activities.length === 0) {
        html += '<p>Ingen spesifikke aktiviteter for denne måneden.</p>';
    } else {
        activities.forEach(activity => {
            html += `
                <div class="activity-item">
                    <div class="activity-plant">${activity.plant}</div>
                    <div>${activity.activity}</div>
                </div>
            `;
        });
    }
    
    container.innerHTML = html;
}

// Initialize plant grid
function initializePlantGrid() {
    const plantGrid = document.getElementById('plant-grid');
    
    plantsData.forEach(plant => {
        const plantCard = createPlantCard(plant);
        plantGrid.appendChild(plantCard);
    });
}

// Create individual plant card
function createPlantCard(plant) {
    const card = document.createElement('div');
    card.className = 'plant-card';
    card.dataset.plantId = plant.id;
    
    const careLevelClass = `care-${plant.careLevel}`;
    const careLevelText = {
        'low': 'Lett stell',
        'medium': 'Middels stell',
        'high': 'Mye stell'
    }[plant.careLevel];
    
    card.innerHTML = `
        <div class="plant-icon">${plant.icon}</div>
        <h3>${plant.name}</h3>
        <p>${plant.category}</p>
        <div class="care-level ${careLevelClass}">${careLevelText}</div>
    `;
    
    card.addEventListener('click', function() {
        showPlantDetails(plant);
    });
    
    return card;
}

// Show detailed plant information
function showPlantDetails(plant) {
    const detailsSection = document.getElementById('plant-details');
    
    document.getElementById('plant-name').textContent = `${plant.icon} ${plant.name}`;
    document.getElementById('plant-description').textContent = plant.description;
    document.getElementById('plant-timing').textContent = plant.timing;
    document.getElementById('plant-sowing').textContent = plant.sowing;
    document.getElementById('plant-care').textContent = plant.care;
    document.getElementById('plant-harvest').textContent = plant.harvest;
    
    detailsSection.classList.remove('hidden');
    detailsSection.scrollIntoView({ behavior: 'smooth' });
}

// Initialize plant details close button
function initializePlantDetails() {
    const closeBtn = document.getElementById('close-details');
    const detailsSection = document.getElementById('plant-details');
    
    closeBtn.addEventListener('click', function() {
        detailsSection.classList.add('hidden');
        document.getElementById('plant-overview').scrollIntoView({ behavior: 'smooth' });
    });
}

// Initialize calculator
function initializeCalculator() {
    const plantSelect = document.getElementById('calc-plant');
    const calcButton = document.getElementById('calc-button');
    
    // Populate plant dropdown
    plantsData.forEach(plant => {
        const option = document.createElement('option');
        option.value = plant.id;
        option.textContent = `${plant.icon} ${plant.name}`;
        plantSelect.appendChild(option);
    });
    
    // Handle calculation
    calcButton.addEventListener('click', calculatePlanting);
}

// Calculate planting requirements
function calculatePlanting() {
    const plantId = document.getElementById('calc-plant').value;
    const desiredYield = parseFloat(document.getElementById('calc-yield').value);
    
    if (!plantId) {
        alert('Vennligst velg en plante først.');
        return;
    }
    
    if (!desiredYield || desiredYield <= 0) {
        alert('Vennligst oppgi et gyldig tall for ønsket avling.');
        return;
    }
    
    const plant = plantsData.find(p => p.id === plantId);
    
    if (!plant) {
        alert('Kunne ikke finne planteinformasjon.');
        return;
    }
    
    // Calculate number of plants needed
    const plantsNeeded = Math.ceil(desiredYield / plant.yieldPerPlant);
    
    // Calculate area needed in square meters
    const areaNeeded = plantsNeeded / plant.plantsPerM2;
    
    // Display results
    displayCalculationResults(plant, plantsNeeded, areaNeeded);
}

// Display calculation results
function displayCalculationResults(plant, plantsNeeded, areaNeeded) {
    const resultsDiv = document.getElementById('calc-results');
    
    document.getElementById('result-plants').textContent = `${plantsNeeded} stk`;
    document.getElementById('result-area').textContent = `${areaNeeded.toFixed(1)} m²`;
    document.getElementById('result-spacing').textContent = `${plant.rowSpacing} cm`;
    document.getElementById('result-plant-spacing').textContent = `${plant.plantSpacing} cm`;
    
    resultsDiv.classList.remove('hidden');
    resultsDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Helper function to get month name in Norwegian
function getMonthName(monthIndex) {
    const months = [
        'Januar', 'Februar', 'Mars', 'April', 'Mai', 'Juni',
        'Juli', 'August', 'September', 'Oktober', 'November', 'Desember'
    ];
    return months[monthIndex];
}
