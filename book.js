document.addEventListener("DOMContentLoaded", () => {
    const bookingForm = document.getElementById("booking-form");
    const flightList = document.getElementById("flight-list");

    // Predefined list of flights with details
    const flights = [
        { from: "New York", to: "London", flightName: "British Airways", distance: "5567 km", price: "$850", date: "2024-11-20" },
        { from: "Paris", to: "Tokyo", flightName: "Air France", distance: "9715 km", price: "$1200", date: "2024-12-05" },
        { from: "Sydney", to: "Dubai", flightName: "Emirates", distance: "12040 km", price: "$1400", date: "2024-12-10" },
        { from: "Delhi", to: "New York", flightName: "Air India", distance: "11766 km", price: "$980", date: "2024-11-22" },
        { from: "Cape Town", to: "Amsterdam", flightName: "KLM Royal Dutch", distance: "9650 km", price: "$1100", date: "2024-12-01" },
        { from: "Singapore", to: "Los Angeles", flightName: "Singapore Airlines", distance: "14100 km", price: "$1500", date: "2024-12-15" },
        { from: "Istanbul", to: "Rome", flightName: "Turkish Airlines", distance: "1424 km", price: "$450", date: "2024-11-25" },
        { from: "Bangkok", to: "Berlin", flightName: "Thai Airways", distance: "8862 km", price: "$870", date: "2024-12-03" },
        { from: "Rio de Janeiro", to: "Madrid", flightName: "Iberia", distance: "8154 km", price: "$920", date: "2024-11-30" },
        { from: "Moscow", to: "Beijing", flightName: "Aeroflot", distance: "5792 km", price: "$700", date: "2024-12-07" },
        // Additional flights
        { from: "Tokyo", to: "Seoul", flightName: "Japan Airlines", distance: "1158 km", price: "$300", date: "2024-12-02" },
        { from: "London", to: "Dubai", flightName: "Emirates", distance: "5476 km", price: "$750", date: "2024-12-10" },
        { from: "New York", to: "Paris", flightName: "Delta Airlines", distance: "5831 km", price: "$890", date: "2024-11-28" },
        { from: "Mumbai", to: "Singapore", flightName: "Singapore Airlines", distance: "3922 km", price: "$600", date: "2024-12-12" },
        { from: "Johannesburg", to: "London", flightName: "British Airways", distance: "9064 km", price: "$1150", date: "2024-12-06" },
        { from: "Sydney", to: "Auckland", flightName: "Qantas", distance: "2158 km", price: "$400", date: "2024-12-04" },
        { from: "Hong Kong", to: "San Francisco", flightName: "Cathay Pacific", distance: "11129 km", price: "$1250", date: "2024-12-09" },
        { from: "Dubai", to: "New York", flightName: "Emirates", distance: "11048 km", price: "$1450", date: "2024-12-13" },
        { from: "Bangkok", to: "Sydney", flightName: "Thai Airways", distance: "7522 km", price: "$870", date: "2024-11-24" },
        { from: "San Francisco", to: "Tokyo", flightName: "United Airlines", distance: "8274 km", price: "$1350", date: "2024-12-11" },
        { from: "Rome", to: "Cairo", flightName: "EgyptAir", distance: "2134 km", price: "$450", date: "2024-12-02" },
        { from: "Toronto", to: "Vancouver", flightName: "Air Canada", distance: "3350 km", price: "$350", date: "2024-12-06" },
        { from: "Madrid", to: "Lisbon", flightName: "Iberia", distance: "625 km", price: "$200", date: "2024-12-01" },
        { from: "Los Angeles", to: "New York", flightName: "American Airlines", distance: "3940 km", price: "$450", date: "2024-11-27" },
        { from: "Mexico City", to: "Miami", flightName: "Aeromexico", distance: "2050 km", price: "$320", date: "2024-11-26" },
        { from: "Berlin", to: "Prague", flightName: "Lufthansa", distance: "280 km", price: "$150", date: "2024-12-08" },
        { from: "Buenos Aires", to: "Rio de Janeiro", flightName: "LATAM Airlines", distance: "1963 km", price: "$500", date: "2024-12-14" },
        { from: "Cape Town", to: "Nairobi", flightName: "Kenya Airways", distance: "4080 km", price: "$700", date: "2024-11-29" },
        { from: "Beijing", to: "Shanghai", flightName: "China Eastern", distance: "1084 km", price: "$220", date: "2024-12-10" },
        { from: "Tokyo", to: "Bangkok", flightName: "All Nippon Airways", distance: "4586 km", price: "$650", date: "2024-12-09" },
        // Additional new flights
        { from: "Los Angeles", to: "Tokyo", flightName: "American Airlines", distance: "8820 km", price: "$1100", date: "2024-12-18" },
        { from: "Dubai", to: "Hong Kong", flightName: "Cathay Pacific", distance: "6014 km", price: "$950", date: "2024-12-04" },
        { from: "London", to: "Sydney", flightName: "Qantas", distance: "17000 km", price: "$1600", date: "2024-12-16" },
        { from: "Paris", to: "Cape Town", flightName: "Air France", distance: "9630 km", price: "$1250", date: "2024-12-08" },
        { from: "Toronto", to: "Los Angeles", flightName: "WestJet", distance: "3470 km", price: "$420", date: "2024-12-03" },
        { from: "Rome", to: "Bangkok", flightName: "Thai Airways", distance: "9646 km", price: "$1050", date: "2024-12-07" },
        { from: "Berlin", to: "Dubai", flightName: "Lufthansa", distance: "5300 km", price: "$900", date: "2024-12-13" }
    ];

    // Function to display matching flights
    const displayFlights = (from, to) => {
        flightList.innerHTML = ""; // Clear previous results

        // Filter flights based on departure and destination
        const results = flights.filter(
            (flight) =>
                flight.from.toLowerCase() === from.toLowerCase() &&
                flight.to.toLowerCase() === to.toLowerCase()
        );

        // Display results or show a "No flights" message
        if (results.length > 0) {
            results.forEach((flight) => {
                const li = document.createElement("li");
                li.classList.add("flight-item");
                li.textContent = `Flight: ${flight.flightName}, Distance: ${flight.distance}, Price: ${flight.price}, Date: ${flight.date}`;
                flightList.appendChild(li);
            });
        } else {
            const li = document.createElement("li");
            li.classList.add("no-flights");
            li.textContent = "No flights found for your search.";
            flightList.appendChild(li);
        }
    };

    // Add event listener for the booking form
    bookingForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const from = document.getElementById("departure").value.trim();
        const to = document.getElementById("destination").value.trim();

        if (from && to) {
            displayFlights(from, to);
        } else {
            flightList.innerHTML = "<li>Please enter both departure and destination locations.</li>";
        }
    });
});
