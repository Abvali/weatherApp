import React from "react";

export default function WeatherCard({ weather }) {
  const iconCode = weather.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 w-80 text-center">
      <h2 className="text-2xl font-semibold">{weather.name}</h2>
     <div>

     </div>
      <img
        src={iconUrl}
        alt={weather.weather[0].description}
        className="mx-auto"
      />

      <p className="text-5xl my-2">{Math.round(weather.main.temp)}°C</p>
      <p className="text-lg text-gray-600">{weather.weather[0].description}</p>
      <div className="flex justify-between mt-4 text-gray-700">
        <div>
          <p>Humidity</p>
          <p className="font-bold">{weather.main.humidity}%</p>
        </div>
        <div>
          <p>Wind</p>
          <p className="font-bold">{weather.wind.speed} km/h</p>
        </div>
      </div>
    </div>
  );
}
