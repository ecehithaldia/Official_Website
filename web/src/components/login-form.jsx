import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase"; // Assuming firebase.js is in the parent directory
import { signInWithEmailAndPassword } from "firebase/auth";

export function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      console.log("Login successful");
      navigate("/"); // Redirect to homepage after successful login
    } catch (err) {
      setError(err.message);
      console.error("Error logging in:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full bg-white/90 dark:bg-gray-900/80 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-800 px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12 transition-all duration-300">
      <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white mb-6 sm:mb-8">
        Welcome Back
      </h2>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 sm:gap-5 lg:gap-6"
      >
        {/* --- Email Input --- */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-1"
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
            className="w-full px-4 py-2 sm:py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
            placeholder="you@example.com"
          />
        </div>

        {/* --- Password Input --- */}
        <div>
          <label
            htmlFor="password"
            className="block text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-1"
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
            className="w-full px-4 py-2 sm:py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
            placeholder="••••••••"
          />
        </div>

        {/* --- Error Message --- */}
        {error && (
          <p className="text-red-500 text-sm text-center">{error}</p>
        )}

        {/* --- Submit Button --- */}
        <button
          type="submit"
          disabled={loading}
          className="mt-4 sm:mt-6 w-full bg-indigo-600 hover:bg-indigo-7T00 text-white font-semibold py-2 sm:py-3 rounded-lg transition-all duration-300 disabled:bg-indigo-400"
        >
          {loading ? "Logging In..." : "Log In"}
        </button>
      </form>

      {/* --- Link to Signup --- */}
      <p className="text-center text-sm sm:text-base text-gray-600 dark:text-gray-400 mt-6">
        Don’t have an account?{" "}
        <a
          href="/signup"
          className="text-indigo-600 hover:text-indigo-500 font-medium transition-colors"
        >
          Sign up
        </a>
      </p>
    </div>
  );
}