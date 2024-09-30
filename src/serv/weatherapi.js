

export const getCurrentWeather = async ({Chharjarsi}) => {
 const response = await fetch(
     `https://raw.githubusercontent.com/Surya-Digital-Interviews/weather-api-public/main/get-current-weather.txt`
   );

   if (!response.ok) {
     throw new Error('Error fetching current weather data');
   }

   const data = await response.json();
  
   return {     
    city: data.place,
   temperature: data.temperature,
    weather_summary: data.weather_summary,
     minimum_temperature: data.minimum_temperature,
     maximum_temperature: data.maximum_temperature,
     air_quality: data.air_quality,
     air_quality_summary:data.air_quality_summary,
   };
 };

 export const getForecast = async (city) => {
   const response = await fetch(
     `https://raw.githubusercontent.com/Surya-Digital-Interviews/weather-api-public/main/get-forecast.txt`
   );

   if (!response.ok) {
    throw new Error('Error fetching forecast data');
   }

   const data = await response.json();
  
   return data.list.map(forecast => ({
    dateTime: forecast.dt_txt,
     temperature: forecast.main.temp,
     description: forecast.weather[0].description,
     icon: forecast.weather[0].icon,
  }));
 };

export const getClimateDetails = async (city) => {
   const response = await fetch(
     `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
   );

   if (!response.ok) {
     throw new Error('Error fetching climate details');
   }

   const data = await response.json();

   return {
     sunrise: new Date(data.sys.sunrise * 1000).toLocaleTimeString(),
     sunset: new Date(data.sys.sunset * 1000).toLocaleTimeString(),
     airQualityIndex: data.air_quality_index || 'N/A', // Assuming this data is available
     lifestyleTips: 'Stay hydrated and wear sunscreen!', // Placeholder tips
   };
 };
