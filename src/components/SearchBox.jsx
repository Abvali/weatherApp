import React, { useState } from "react";

export default function SearchBox({ onSearch }) {
  const [city, setCity] = useState("");

  function handleSearch() {
    if (!city.trim()) return;
    onSearch(city);
    setCity("");
  }

  return (
    <div className="flex mb-6">
      <input
        type="text"
        placeholder="Enter city..."
        className="px-4 py-2 rounded-l-lg border border-gray-300 focus:outline-none"
        onChange={(e) => setCity(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
}
