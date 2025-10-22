"use client";

import React, { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    address: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log("User created:", data);
      alert("User created successfully!");

      setFormData({ username: "", email: "", address: "" });
    } catch (err) {
      console.error("Error:", err);
      alert("Failed to create user.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Contact Form
        </h1>

        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md"
        >
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="username"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter your username"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>

          <div className="mb-4">
  <label
    className="block text-sm font-medium text-gray-700 mb-1"
    htmlFor="email"
  >
    E-mail
  </label>
  <input
    type="email"
    id="email"
    value={formData.email}
    onChange={handleChange}
    placeholder="Enter your E-mail"
    required
    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
  />
</div>


          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="address"
            >
              Address
            </label>
            <input
              type="text"
              id="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter your address"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
