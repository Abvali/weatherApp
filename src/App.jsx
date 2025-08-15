import { useEffect, useState } from "react";
import SearchBox from "./components/SearchBox";
import WeatherCard from "./components/WeatherCard";

const API_KEY = "d3b3106d76b06f32427ed094c9d586f7";

export default function App() {
  const [city, setCity] = useState("London");
  const [weather, setWeather] = useState();

  async function fetchWeather() {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await response.json();
      if (data.cod === "404") {
        alert("City not found!");
        return;
      }
      setWeather(data);
    } catch (error) {
      console.log("Enter fetching weather", error);
    }
  }
  useEffect(() => {
    fetchWeather(city);
  }, [city]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-400 to-blue-200 p-4">
      <h1 className="text-3xl font-bold mb-6">Weather App</h1>
      <SearchBox onSearch={(newCity) => setCity(newCity)} />
      {weather && <WeatherCard weather={weather} />}
    </div>
  );
}
