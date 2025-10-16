
import React, { useState } from "react";

export function SignupForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup data:", formData);
  };

  return (
    <div className="w-full bg-white/5 dark:bg-white/5 backdrop-blur-md rounded-2xl shadow-2xl border border-white/10 px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12 transition-all duration-300">
      <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6 sm:mb-8">
        Create Account
      </h2>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 sm:gap-5 lg:gap-6"
      >
        <div>
          <label
            htmlFor="name"
            className="block text-sm sm:text-base text-gray-300 mb-1"
          >
            Full Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 sm:py-3 rounded-lg border border-gray-700 bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
            placeholder="Your Name"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm sm:text-base text-gray-300 mb-1"
          >
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 sm:py-3 rounded-lg border border-gray-700 bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-sm sm:text-base text-gray-300 mb-1"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            required
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 sm:py-3 rounded-lg border border-gray-700 bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
            placeholder="••••••••"
          />
        </div>

        <button
          type="submit"
          className="mt-4 sm:mt-6 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 sm:py-3 rounded-lg transition-all duration-300"
        >
          Sign Up
        </button>
      </form>

      <p className="text-center text-sm sm:text-base text-gray-400 mt-6">
        Already have an account?{" "}
        <a
          href="/login"
          className="text-indigo-500 hover:text-indigo-400 font-medium transition-colors"
        >
          Log in
        </a>
      </p>
    </div>
  );
}
