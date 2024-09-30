

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


