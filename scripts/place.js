function updateWeatherInfo() {
    const temperatureElement = document.getElementById('temperature');
    const conditionsElement = document.getElementById('conditions');
    const windElement = document.getElementById('wind');
    const windChillElement = document.getElementById('wind-chill');
  
    // Static weather values (assuming °C for temperature)
    const temperature = 31; // Replace with your desired temperature in °C
    const conditions = "Partly Sunny"; // Replace with your desired weather conditions
    const windSpeed = 5.67; // Replace with your desired wind speed in km/h
  
    // Check if conditions are suitable for wind chill calculation
    if (temperature <= 10 && windSpeed > 4.8) {
      // Calculate wind chill
      const windChill = calculateWindChill(temperature, windSpeed);
      // Display wind chill
      windChillElement.textContent = `${windChill.toFixed(2)} °C`;
    } else {
      // Conditions not suitable for wind chill calculation
      windChillElement.textContent = "N/A";
    }
  
    // Update the HTML elements with the weather information
    temperatureElement.textContent = `${temperature} °C`;
    conditionsElement.textContent = conditions;
    windElement.textContent = `${windSpeed} km/h`;
  }
  
  // Call the function to update weather information when the page loads
  updateWeatherInfo();
  