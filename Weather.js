document.addEventListener('DOMContentLoaded', () => {
    // Replace 'YOUR_API_KEY' with your actual API key
    const apiKey = '4c32fdbc865bade9d4974579de538855';
    const city = 'paravur';
    const units = 'metric'; // 'imperial' for Fahrenheit, 'metric' for Celsius
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`;
    const tempText = document.querySelector('.degree');

    // Function to fetch weather data
    async function getCurrentWeather() {
        try {
            const response = await fetch(apiUrl);
            const data = await response.json();

            // Extract relevant information from the API response
            const temperature = data.main.temp;
            const temperatureInt = Math.round(temperature); // Round to the nearest integer

            tempText.innerText = `${temperatureInt}°C`;
            console.log(`Temperature: ${temperatureInt}°C`);
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    }

    // Call the function to get current weather
    getCurrentWeather();
});
