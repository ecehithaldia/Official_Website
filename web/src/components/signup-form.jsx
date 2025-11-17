import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ⭐ ADDED
// ⭐ CORRECTED PATH — Changed from ../../firebase
import {
  auth,
  googleProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "../firebase"; // Adjust path if needed

export function SignupForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "", // ⭐ ADDED
  });
  const [error, setError] = useState(""); // ⭐ ADDED
  const [loading, setLoading] = useState(false); // ⭐ ADDED
  const navigate = useNavigate(); // ⭐ ADDED

  const handleChange = (e) => {
    setError(""); // Clear error on change
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ⭐ MODIFIED — Handle Email/Password Signup
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Basic validation
    if (formData.password !== formData.confirmPassword) {
      return setError("Passwords do not match.");
    }
    if (formData.password.length < 6) {
      return setError("Password must be at least 6 characters long.");
    }

    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      
      // ⭐ ADDED — Update user profile with name
      await updateProfile(userCredential.user, {
        displayName: formData.name,
      });

      // ⭐ ADDED — Send verification email
      await sendEmailVerification(userCredential.user);

      alert(
        "Signup successful! A verification email has been sent to your address. Please verify your email before logging in."
      );
      navigate("/login"); // Redirect to login page
    } catch (error) {
      // Handle Firebase errors
      if (error.code === "auth/email-already-in-use") {
        setError("This email address is already in use.");
      } else if (error.code === "auth/weak-password") {
        setError("Password is too weak.");
      } else {
        setError("Failed to create an account. Please try again.");
      }
      console.error("Signup error:", error);
    }
    setLoading(false);
  };

  // ⭐ ADDED — Handle Google Sign-in
  const handleGoogleSignIn = async () => {
    setError("");
    setLoading(true);
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/"); // Redirect to home on successful Google sign-in
    } catch (error) {
      setError("Failed to sign in with Google. Please try again.");
      console.error("Google sign-in error:", error);
    }
    setLoading(false);
  };

  return (
    <div className="w-full bg-white/5 dark:bg-white/5 backdrop-blur-md rounded-2xl shadow-2xl border border-white/10 px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12 transition-all duration-300">
      <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6 sm:mb-8">
        Create Account
      </h2>

      {/* ⭐ ADDED — Error Message Display */}
      {error && (
        <p className="mb-4 text-center text-sm text-red-400 bg-red-900/50 p-3 rounded-lg">
          {error}
        </p>
      )}

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
            disabled={loading}
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
            disabled={loading}
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
            placeholder="•••••••• (Min 6 characters)"
            disabled={loading}
          />
        </div>

        {/* ⭐ ADDED — Confirm Password Field */}
        <div>
          <label
            htmlFor="confirmPassword"
            className="block text-sm sm:text-base text-gray-300 mb-1"
          >
            Confirm Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            required
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full px-4 py-2 sm:py-3 rounded-lg border border-gray-700 bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
            placeholder="••••••••"
            disabled={loading}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="mt-4 sm:mt-6 w-full bg-indigo-600 hover:bg-indigo-7Vite00 text-white font-semibold py-2 sm:py-3 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Signing Up..." : "Sign Up"}
        </button>
      </form>

      {/* ⭐ ADDED — Separator and Google Button */}
      <div className="flex items-center gap-4 my-6">
        <hr className="w-full border-gray-600" />
        <span className="text-gray-400 text-sm">OR</span>
        <hr className="w-full border-gray-600" />
      </div>

      <button
        onClick={handleGoogleSignIn}
        disabled={loading}
        className="w-full bg-white dark:bg-gray-800 text-gray-800 dark:text-white border border-gray-300 dark:border-gray-700 font-medium py-2 sm:py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
      >
        <svg className="w-5 h-5" viewBox="0 0 48 48">
          <path
            fill="#EA4335"
            d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
          ></path>
          <path
            fill="#4285F4"
            d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.53-4.18 7.09-10.36 7.09-17.65z"
          ></path>
          <path
            fill="#FBBC05"
            d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
          ></path>
          <path
            fill="#34A853"
            d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
          ></path>
          <path fill="none" d="M0 0h48v48H0z"></path>
        </svg>
        Sign up with Google
      </button>

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