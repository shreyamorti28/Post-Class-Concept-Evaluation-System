import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">Welcome to Smart Learning Platform</h1>
      <div className="flex gap-4">
        <Link to="/login">
          <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            Login
          </button>
        </Link>
        <Link to="/user-type">
          <button className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
