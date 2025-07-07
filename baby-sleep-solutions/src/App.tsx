"use client";

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
        <header className="p-4 flex justify-between items-center max-w-6xl mx-auto">
          <Link to="/" className="text-2xl font-bold">
            Baby Sleep Solutions
          </Link>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-4 py-2 border rounded"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          {/* Other routes to be added here */}
        </Routes>

        <footer className="p-4 text-center text-sm max-w-6xl mx-auto">
          &copy; 2025 Baby Sleep Solutions. All rights reserved.
        </footer>
      </div>
    </Router>
  );
};

export default App;
