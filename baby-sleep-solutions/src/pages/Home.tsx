"use client";

import React from "react";

const Home: React.FC = () => {
  return (
    <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white p-6">
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto text-center py-12">
        <h1 className="text-4xl font-bold mb-4">Baby Sleep Solutions</h1>
        <p className="text-lg max-w-3xl mx-auto">
          Helping your baby sleep better with 100% science-based tools available 24/7.
        </p>
      </section>

      {/* Overview of 19 baby sleep tools */}
      <section className="max-w-6xl mx-auto py-8">
        <h2 className="text-2xl font-semibold mb-6">Explore Our 19 Baby Sleep Tools</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Example Tool Card */}
          <div className="border rounded-lg p-4 bg-gray-100 dark:bg-gray-900">
            <div className="h-12 w-12 bg-gray-300 dark:bg-gray-700 rounded mb-2"></div>
            <h3 className="font-semibold text-lg">Sleep Schedule Generator</h3>
            <p className="text-sm mt-1">Create customized sleep schedules by age (0–2+ years), supports PDF export.</p>
          </div>
          {/* Repeat for all 19 tools - placeholders for now */}
          {/* ... */}
        </div>
      </section>

      {/* Key Stats */}
      <section className="max-w-5xl mx-auto py-8 text-center">
        <p className="text-lg font-medium">
          <span className="mr-4">100% science-based</span>•<span className="mx-4">19 tools</span>•<span className="ml-4">Available 24/7</span>
        </p>
      </section>

      {/* Category Previews */}
      <section className="max-w-5xl mx-auto py-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div className="border rounded-lg p-6 bg-gray-100 dark:bg-gray-900 cursor-pointer hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold mb-2">Interactive Tools</h3>
          <p>Explore our interactive tools to customize your baby’s sleep plan.</p>
        </div>
        <div className="border rounded-lg p-6 bg-gray-100 dark:bg-gray-900 cursor-pointer hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold mb-2">Expert Guides</h3>
          <p>Read expert-written guides on baby sleep science and strategies.</p>
        </div>
      </section>

      {/* Navigation and Donate Link */}
      <section className="max-w-5xl mx-auto py-8 text-center">
        <nav className="mb-4">
          <a href="/interactive-tools" className="mx-4 underline hover:text-blue-600">Interactive Tools</a>
          <a href="/expert-guides" className="mx-4 underline hover:text-blue-600">Expert Guides</a>
          <a href="/baby-sleep-myth-quiz" className="mx-4 underline hover:text-blue-600">Baby Sleep Myth Quiz</a>
          <a href="/support" className="mx-4 underline hover:text-blue-600">Support</a>
        </nav>
        <a
          href="https://www.paypal.com/donate/?hosted_button_id=67EZCSRH338HC"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
        >
          Donate
        </a>
      </section>
    </main>
  );
};

export default Home;
