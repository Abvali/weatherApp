import React from "react";
import SearchBox from "./components/SearchBox";
import WeatherCard from "./components/WeatherCard";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-400 to-blue-200 p-4">
      <h1 className="text-3xl font-bold mb-6">Weather App</h1>
      <SearchBox />
      <WeatherCard />
    </div>
  );
}
