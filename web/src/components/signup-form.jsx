import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase"; // Assuming firebase.js is in the parent directory
import {
  createUserWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
  sendEmailVerification,
} from "firebase/auth";

export function SignupForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [signupSuccess, setSignupSuccess] = useState(false); // For verification message
  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // Handler for Email/Password Signup
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return; // Prevent multiple submissions
    setLoading(true);
    setError("");

    try {
      // 1. Create the user
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      const user = userCredential.user;

      // 2. Update the user's profile with their name
      await updateProfile(user, {
        displayName: formData.name,
      });

      // 3. Send verification email
      await sendEmailVerification(user);

      console.log("Signup successful, verification email sent.");
      setSignupSuccess(true); // Show verification message
    } catch (err) {
      setError(err.message);
      console.error("Error signing up:", err);
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
      console.log("Google Signup successful");
      navigate("/"); // Google sign-in is immediate and verified, so redirect
    } catch (err) {
      setError(err.message);
      console.error("Error with Google sign up:", err);
    } finally {
      setLoading(false);
    }
  };

  // Show verification message on success
  if (signupSuccess) {
    return (
      <div className="w-full bg-white/5 dark:bg-white/5 backdrop-blur-md rounded-2xl shadow-2xl border border-white/10 px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12 transition-all duration-300">
        <h2 className="text-center text-2xl sm:text-3xl font-bold text-white mb-4">
          Success!
        </h2>
        <p className="text-center text-gray-300">
          We've sent a verification link to{" "}
          <strong className="text-white">{formData.email}</strong>.
        </p>
        <p className="text-center text-gray-300 mt-2">
          Please check your inbox (and spam folder) to verify your account.
        </p>
        <a
          href="/login"
          className="block text-center w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 sm:py-3 rounded-lg transition-all duration-300 mt-8"
        >
          Back to Login
        </a>
      </div>
    );
  }

  // Show signup form
  return (
    <div className="w-full bg-white/5 dark:bg-white/5 backdrop-blur-md rounded-2xl shadow-2xl border border-white/10 px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12 transition-all duration-300">
      <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6 sm:mb-8">
        Create Account
      </h2>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 sm:gap-5 lg:gap-6"
      >
        {/* --- Name Input --- */}
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

        {/* --- Email Input --- */}
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

        {/* --- Password Input --- */}
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

        {/* --- Error Message --- */}
        {error && (
          <p className="text-red-400 text-sm text-center">{error}</p>
        )}

        {/* --- Submit Button --- */}
        <button
          type="submit"
          disabled={loading}
          className="mt-4 sm:mt-6 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 sm:py-3 rounded-lg transition-all duration-300 disabled:bg-indigo-400"
        >
          {loading ? "Creating Account..." : "Sign Up"}
        </button>
      </form>

      {/* --- OR Separator --- */}
      <div className="flex items-center my-5 sm:my-6">
        <div className="flex-grow border-t border-gray-600"></div>
        <span className="flex-shrink mx-4 text-gray-400 text-sm">OR</span>
        <div className="flex-grow border-t border-gray-600"></div>
      </div>

      {/* --- Google Sign-In Button --- */}
      <button
        type="button"
        onClick={handleGoogleSignIn}
        disabled={loading}
        className="w-full bg-white text-gray-800 font-semibold py-2 sm:py-3 rounded-lg border border-gray-300 shadow-sm hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2 disabled:bg-gray-200"
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
            d="M45.1 24c0-1.3-.2-2.7-.5-4H24v8h11.8c-1.7 5.4-6.3 9.4-11.8 9.4-3.1 0-5.9-1.1-8.1-2.9L7.5 30.3C11.1 34 16.1 36 21.7 36c7.2 0 13-5.8 13-13s-5.8-13-13-13c-3.1 0-5.9 1.1-8.1-2.9L22.1 4.1C25.7 2 30.7 0 36.3 0c7.2 0 13 5.8 13 13s-5.8 13-13 13c-3.1 0-5.9-1.1-8.1-2.9L16.5 17.7C19.1 14 24.1 12 29.7 12c7.2 0 13 5.8 13 13s-5.8 13-13 13c-3.1 0-5.9-1.1-8.1-2.9L16.5 17.7z"
            fill="#4CAF50"
          />
          <path
            d="M44.5 20H24v8h11.8c-1.7 5.4-6.3 9.4-11.8 9.4-3.1 0-5.9-1.1-8.1-2.9L7.5 30.3C11.1 34 16.1 36 21.7 36c7.2 0 13-5.8 13-13s-5.8-13-13-13c-3.1 0-5.9-1.1-8.1-2.9L22.1 4.1C25.7 2 30.7 0 36.3 0c7.2 0 13 5.8 13 13s-5.8 13-13 13c-3.1 0-5.9-1.1-8.1-2.9L16.5 17.7C19.1 14 24.1 12 29.7 12c7.2 0 13 5.8 13 13s-5.8 13-13 13c-3.1 0-5.9-1.1-8.1-2.9L16.5 17.7z"
            fill="#1976D2"
          />
        </svg>
        Continue with Google
      </button>

      {/* --- Link to Login --- */}
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