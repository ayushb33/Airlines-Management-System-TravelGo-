document.addEventListener("DOMContentLoaded", () => {
    const searchBox = document.getElementById("search-box");
    const searchButton = document.getElementById("search-button");
    const destinationList = document.getElementById("destination-list");

    // Expanded list of destinations and attractions
    const destinations = [
        { name: "Paris", country: "France", attractions: ["Eiffel Tower", "Louvre Museum", "Notre Dame Cathedral"] },
        { name: "Tokyo", country: "Japan", attractions: ["Shibuya Crossing", "Tokyo Tower", "Senso-ji Temple"] },
        { name: "New York", country: "USA", attractions: ["Statue of Liberty", "Times Square", "Central Park"] },
        { name: "Rome", country: "Italy", attractions: ["Colosseum", "Vatican City", "Trevi Fountain"] },
        { name: "London", country: "UK", attractions: ["Big Ben", "London Eye", "Tower of London"] },
        { name: "Sydney", country: "Australia", attractions: ["Sydney Opera House", "Bondi Beach", "Harbour Bridge"] },
        { name: "Dubai", country: "UAE", attractions: ["Burj Khalifa", "Dubai Mall", "Palm Jumeirah"] },
        { name: "Barcelona", country: "Spain", attractions: ["Sagrada Familia", "Park Güell", "La Rambla"] },
        { name: "Cairo", country: "Egypt", attractions: ["Great Pyramids of Giza", "Sphinx", "Egyptian Museum"] },
        { name: "Cape Town", country: "South Africa", attractions: ["Table Mountain", "Cape Point", "Robben Island"] },
        { name: "Bangkok", country: "Thailand", attractions: ["Grand Palace", "Wat Arun", "Chatuchak Market"] },
        { name: "Istanbul", country: "Turkey", attractions: ["Hagia Sophia", "Blue Mosque", "Grand Bazaar"] },
        { name: "Rio de Janeiro", country: "Brazil", attractions: ["Christ the Redeemer", "Sugarloaf Mountain", "Copacabana Beach"] },
        { name: "Moscow", country: "Russia", attractions: ["Red Square", "Kremlin", "Bolshoi Theatre"] },
        { name: "Athens", country: "Greece", attractions: ["Acropolis", "Parthenon", "Plaka"] },
        { name: "Beijing", country: "China", attractions: ["Great Wall of China", "Forbidden City", "Temple of Heaven"] },
        { name: "Singapore", country: "Singapore", attractions: ["Marina Bay Sands", "Gardens by the Bay", "Sentosa Island"] },
        { name: "Amsterdam", country: "Netherlands", attractions: ["Van Gogh Museum", "Anne Frank House", "Canal Ring"] },
        { name: "Los Angeles", country: "USA", attractions: ["Hollywood Sign", "Santa Monica Pier", "Griffith Observatory"] },
        { name: "Delhi", country: "India", attractions: ["India Gate", "Qutub Minar", "Red Fort"] },
        { name: "Berlin", country: "Germany", attractions: ["Brandenburg Gate", "Berlin Wall", "Museum Island"] },
        { name: "Lisbon", country: "Portugal", attractions: ["Belem Tower", "Alfama", "Jerónimos Monastery"] },
        { name: "Venice", country: "Italy", attractions: ["St. Mark's Basilica", "Grand Canal", "Rialto Bridge"] },
        { name: "Seoul", country: "South Korea", attractions: ["Gyeongbokgung Palace", "Myeongdong", "Bukchon Hanok Village"] },
        { name: "Kyoto", country: "Japan", attractions: ["Fushimi Inari Shrine", "Kinkaku-ji", "Arashiyama Bamboo Grove"] },
        { name: "Prague", country: "Czech Republic", attractions: ["Prague Castle", "Charles Bridge", "Old Town Square"] },
        { name: "Vancouver", country: "Canada", attractions: ["Stanley Park", "Granville Island", "Capilano Suspension Bridge"] },
        { name: "Buenos Aires", country: "Argentina", attractions: ["La Boca", "Recoleta Cemetery", "Plaza de Mayo"] },
        { name: "Edinburgh", country: "Scotland", attractions: ["Edinburgh Castle", "Arthur's Seat", "Royal Mile"] },
        { name: "Kuala Lumpur", country: "Malaysia", attractions: ["Petronas Towers", "Batu Caves", "Merdeka Square"] },
        { name: "Hong Kong", country: "China", attractions: ["Victoria Peak", "Tian Tan Buddha", "Hong Kong Disneyland"] },
        { name: "Zurich", country: "Switzerland", attractions: ["Lake Zurich", "Old Town", "Swiss National Museum"] },
        { name: "Vienna", country: "Austria", attractions: ["Schönbrunn Palace", "St. Stephen's Cathedral", "Belvedere Palace"] },
        { name: "Montreal", country: "Canada", attractions: ["Old Montreal", "Montreal Botanical Garden", "Mount Royal"] },
        { name: "Las Vegas", country: "USA", attractions: ["The Strip", "Bellagio Fountains", "Red Rock Canyon"] },
        { name: "Marrakech", country: "Morocco", attractions: ["Jemaa el-Fnaa", "Koutoubia Mosque", "Majorelle Garden"] },
        { name: "Auckland", country: "New Zealand", attractions: ["Sky Tower", "Auckland Harbour Bridge", "Waiheke Island"] },
        { name: "Oslo", country: "Norway", attractions: ["Vigeland Park", "Oslo Opera House", "Akershus Fortress"] },
        { name: "Stockholm", country: "Sweden", attractions: ["Vasa Museum", "Gamla Stan", "Skansen"] },
        { name: "Copenhagen", country: "Denmark", attractions: ["Tivoli Gardens", "The Little Mermaid", "Nyhavn"] },
        { name: "Helsinki", country: "Finland", attractions: ["Helsinki Cathedral", "Suomenlinna", "Market Square"] }
    ];

    // Function to display destinations based on a search query
    const displayDestinations = (query) => {
        destinationList.innerHTML = ""; // Clear previous results

        // Filter destinations by matching city or country name
        const results = destinations.filter(dest =>
            dest.name.toLowerCase().includes(query.toLowerCase()) ||
            dest.country.toLowerCase().includes(query.toLowerCase())
        );

        // Display results or show a "No results" message
        if (results.length > 0) {
            results.forEach(dest => {
                const li = document.createElement("li");
                li.classList.add("flight-item");
                li.textContent = `${dest.name}, ${dest.country} - Attractions: ${dest.attractions.join(", ")}`;
                destinationList.appendChild(li);
            });
        } else {
            const li = document.createElement("li");
            li.classList.add("no-flights");
            li.textContent = "No destinations found for your search.";
            destinationList.appendChild(li);
        }
    };

    // Add event listener for the search button
    searchButton.addEventListener("click", () => {
        const query = searchBox.value.trim();
        if (query) {
            displayDestinations(query);
        } else {
            destinationList.innerHTML = "<li>Please enter a city or country to search.</li>";
        }
    });
});