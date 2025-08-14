import React from "react";

export default function SearchBox() {
  return (
    <div className="flex mb-6">
      <input
        type="text"
        placeholder="Enter city..."
        className="px-4 py-2 rounded-l-lg border border-gray-300 focus:outline-none"
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600">
        Search
      </button>
    </div>
  );
}
