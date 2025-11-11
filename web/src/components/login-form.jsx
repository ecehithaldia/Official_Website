import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase"; // Assuming firebase.js is in the parent directory
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
} from "firebase/auth";

export function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [resetMessage, setResetMessage] = useState("");
  const [resetError, setResetError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // Handler for Email/Password Login
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    setError("");
    setResetMessage("");
    setResetError("");

    try {
      await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      console.log("Login successful");
      navigate("/"); // Redirect to homepage after successful login
    } catch (err) {
      if (err.code === "auth/user-not-found" || err.code === "auth/wrong-password") {
        setError("Invalid email or password.");
      } else if (err.code === "auth/user-disabled") {
        setError("This account has been disabled.");
      } else if (err.code === "auth/too-many-requests") {
        setError("Too many attempts. Please try again later.");
      } else {
        setError(err.message);
      }
      console.error("Error logging in:", err);
    } finally {
      setLoading(false);
    }
  };

  // Handler for Google Sign-In
  const handleGoogleSignIn = async () => {
    if (loading) return;
    setLoading(true);
    setError("");
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      console.log("Google Login successful");
      navigate("/"); // Redirect to homepage
    } catch (err) {
      setError(err.message);
      console.error("Error with Google login:", err);
    } finally {
      setLoading(false);
    }
  };

  // Handler for Password Reset
  const handlePasswordReset = async () => {
    if (!formData.email) {
      setResetError("Please enter your email address to reset your password.");
      return;
    }
    if (loading) return;
    setLoading(true);
    setError("");
    setResetMessage("");
    setResetError("");

    try {
      await sendPasswordResetEmail(auth, formData.email);
      setResetMessage("Password reset email sent. Check your inbox.");
    } catch (err) {
      setResetError(err.message);
      console.error("Error sending password reset email:", err);
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

        {/* --- Forgot Password Link --- */}
        <div className="text-right -mt-2">
          <button
            type="button"
            onClick={handlePasswordReset}
            disabled={loading}
            className="text-sm text-indigo-600 hover:text-indigo-500 dark:text-indigo-500 dark:hover:text-indigo-400 font-medium transition-colors disabled:opacity-50"
          >
            Forgot Password?
          </button>
        </div>

        {/* --- Reset Messages --- */}
        {resetMessage && (
          <p className="text-green-600 dark:text-green-400 text-sm text-center -my-2">
            {resetMessage}
          </p>
        )}
        {resetError && (
          <p className="text-red-500 text-sm text-center -my-2">{resetError}</p>
        )}

        {/* --- Login Error Message --- */}
        {error && (
          <p className="text-red-500 text-sm text-center -my-2">{error}</p>
        )}

        {/* --- Submit Button --- */}
        <button
          type="submit"
          disabled={loading}
          className="mt-4 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 sm:py-3 rounded-lg transition-all duration-300 disabled:bg-indigo-400"
        >
          {loading ? "Logging In..." : "Log In"}
        </button>
      </form>

      {/* --- OR Separator --- */}
      <div className="flex items-center my-5 sm:my-6">
        <div className="flex-grow border-t border-gray-300 dark:border-gray-700"></div>
        <span className="flex-shrink mx-4 text-gray-500 dark:text-gray-400 text-sm">
          OR
        </span>
        <div className="flex-grow border-t border-gray-300 dark:border-gray-700"></div>
      </div>

      {/* --- Google Sign-In Button --- */}
      <button
        type="button"
        onClick={handleGoogleSignIn}
        disabled={loading}
        className="w-full bg-white text-gray-800 font-semibold py-2 sm:py-3 rounded-lg border border-gray-300 shadow-sm hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 disabled:opacity-50"
      >
        <svg
          className="w-5 h-5"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M44.5 20H24v8h11.8c-1.7 5.4-6.3 9.4-11.8 9.4-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22 22-9.8 22-22c0-1.3-.2-2.7-.5-4z"
            fill="#FFC107"
          />
          <path
            d="M44.5 20H24v8h11.8c-1.7 5.4-6.3 9.4-11.8 9.4-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22 22-9.8 22-22c0-1.3-.2-2.7-.5-4z"
            fill="none"
          />
          <path
            d="M4.9 29.7V20h19.1v8H11.8C10.1 33.4 14.7 37.4 20.1 37.4c3.1 0 5.9-1.1 8.1-2.9l6.4 6.4C30 43.9 25 46 19.4 46 11.2 46 3.4 40.2 3.4 32c0-1.3.2-2.7.5-4z"
            fill="#FF3D00"
          />
          <path
            d="M45.1 24c0-1.3-.2-2.7-.5-4H24v8h11.8c-1.7 5.4-6.3 9.4-11.8 9.4-3.1 0-5.9-1.1-8.1-2.9L7.5 30.3C11.1 34 16.1 36 21.7 36c7.2 0 13-5.8 13-13s-5.8-13-13-13c-3.1 0-5.9-1.1-8.1-2.9L22.1 4.1C25.7 2 30.7 0 36.3 0c7.2 0 13 5.8 13 13s-5.8 13-13 13c-3.1 0-5.9-1.1-8.1-2.9L16.5 17.7C19.1 14 24.1 12 29.7 12c7.2 0 13 5.8 13 13s-5.8 13-13 13c-3.1 0-5.9-1.1-8.1-2.9L16.5 17.7z"
            fill="#4CAF50"
          />
          <path
            d="M44.5 20H24v8h11.8c-1.7 5.4-6.3 9.4-11.8 9.4-3.1 0-5.9-1.1-8.1-2.9L7.5 30.3C11.1 34 16.1 36 21.7 36c7.2 0 13-5.8 13-13s-5.8-13-13-13c-3.1 0-5.9-1.1-8.1-2.9L22.1 4.1C25.7 2 30.7 0 36.3 0c7.2 0 13 5.8 13 13s-5.8 13-13 13c-3.1 0-5.9-1.1-8.1-2.9L16.5 17.7C19.1 14 24.1 12 29.7 12c7.2 0 13 5.8 13 13s-5.8 13-13 13c-3.1 0-5.9-1.1-8.1-2.9L16.5 17.7z"
            fill="#1976D2"
          />
        </svg>
        Continue with Google
      </button>

      {/* --- Link to Signup --- */}
      <p className="text-center text-sm sm:text-base text-gray-600 dark:text-gray-400 mt-6">
        Don’t have an account?{" "}
        <a
          href="/signup"
          className="text-indigo-600 hover:text-indigo-500 dark:text-indigo-500 dark:hover:text-indigo-400 font-medium transition-colors"
        >
          Sign up
        </a>
      </p>
    </div>
  );
}