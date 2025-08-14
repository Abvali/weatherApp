import React from "react";

export default function WeatherCard() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 w-80 text-center">
      <h2 className="text-2xl font-semibold">London</h2>
      <p className="text-5xl my-2">22°</p>
      <p className="text-lg text-gray-600">Sunny</p>
      <div className="flex justify-between mt-4 text-gray-700">
        <div>
          <p>Humidity</p>
          <p className="font-bold">56%</p>
        </div>
        <div>
          <p>Wind</p>
          <p className="font-bold">7 km/h</p>
        </div>
      </div>
    </div>
  );
}
