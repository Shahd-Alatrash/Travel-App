// export const handleSubmit = async (event) => {
//     event.preventDefault();

//     // Example API call
//     const res = await fetch(`https://api.weatherbit.io/v2.0/forecast/daily?city=London&key=YOUR_API_KEY`);
//     const data = await res.json();

//     console.log(data);
// };

const weatherbitKey = 'YOUR_WEATHERBIT_API_KEY';
const geonamesKey = 'YOUR_GEONAMES_API_KEY';
const pixabayKey = 'YOUR_PIXABAY_API_KEY';

export const handleSubmit = async (event) => {
    event.preventDefault();

    const city = document.getElementById('city').value;
    const res = await fetch(`https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&key=${weatherbitKey}`);
    const weatherData = await res.json();

    console.log(weatherData);
};
// app.js
document.getElementById('searchButton').addEventListener('click', function() {
    const city = document.getElementById('cityInput').value; // Get the city input value
    if (city) { // Check if the city input is not empty
        console.log(`Searching for ${city}...`);
        // You can call a function to fetch data from an API here
        // For example, update the results section:
        document.getElementById('results').innerText = `Searched for ${city}.`;
    } else {
        alert('Please enter a city name!'); // If the input is empty
    }
});

// app.js
document.getElementById('searchButton').addEventListener('click', searchCity);
document.getElementById('cityInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') { // Check if Enter key is pressed
        searchCity();
    }
});

function searchCity() {
    const city = document.getElementById('cityInput').value; // Get the city input value
    if (city) { // Check if the city input is not empty
        // Simulating a fetch operation; you would replace this with your API call
        fetchCityData(city).then(data => {
            // Update results section with the fetched data
            document.getElementById('results').innerText = `Searched for ${city}. Weather: ${data.weather}, Temperature: ${data.temperature}°C.`;
        }).catch(err => {
            document.getElementById('results').innerText = 'Error fetching data.';
            console.error(err);
        });
    } else {
        alert('Please enter a city name!'); // If the input is empty
    }
}

// Simulated function to mimic fetching data from an API
function fetchCityData(city) {
    return new Promise((resolve, reject) => {
        // Simulated data for demonstration purposes
        const data = {
            weather: "Sunny",
            temperature: 25
        };
        // Simulate an API call delay
        setTimeout(() => {
            resolve(data);
        }, 1000);
    });
}


