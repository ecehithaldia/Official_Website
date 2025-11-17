import React, { useEffect, useState, useContext, createContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";

import { collection, getDocs } from "firebase/firestore";
// ⭐ FIXED — Added 'signOut' to the import
import { db, auth, onAuthStateChanged, signOut } from "./firebase";
import { seedTeachers } from "./SeedTeacher";

import { ImagesSlider } from "./components/ui/images-slider";
import { NavbarDemo } from "./components/NavbarDemo";
import { Footer } from "./components/Footer";
import { About } from "./components/Updates";
import { Hod } from "./components/Hod";
import { Communication } from "./components/Communication";

// Pages
import Login from "@/pages/Login";
import Signup from "@/pages/Signup";
import AboutPage from "@/pages/AboutPage";
import StudentsPage from "@/pages/StudentsPage";
import Events from "@/pages/Events";

// ⭐ --- START AUTH CONTEXT ---
// We define the Auth context and provider here to avoid creating new files.

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  function logout() {
    // This will now work because 'signOut' is imported
    return signOut(auth);
  }

  useEffect(() => {
    // This listener handles user state changes (login, logout)
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe; // Cleanup listener on unmount
  }, []);

  const value = {
    currentUser,
    logout,
    loading, // Added loading state
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

// ⭐ --- END AUTH CONTEXT ---

// ⭐ --- START PROTECTED ROUTE ---
// This component protects routes that require authentication.
function ProtectedRoute({ children }) {
  const { currentUser } = useAuth();

  if (!currentUser) {
    // Redirect them to the /login page, but save the current location
    // so we can send them back after login.
    return <Navigate to="/login" replace />;
  }

  return children;
}
// ⭐ --- END PROTECTED ROUTE ---

function AppContent() {
  const [teachers, setTeachers] = useState([]);
  const location = useLocation();

  // Smooth scroll
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 400);
    }
  }, [location]);

  // Hide Navbar on login/signup
  const noNavbarRoutes = ["/login", "/signup"]; // Removed /aboutpage
  const showNavbar = !noNavbarRoutes.includes(location.pathname);

  // Fetch teachers
  const fetchTeachers = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "teachers"));
      const teacherList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTeachers(teacherList);
    } catch (error) {
      console.error("Error fetching teachers:", error);
    }
  };

  useEffect(() => {
    seedTeachers();
    fetchTeachers();
  }, []);

  return (
    <div className="w-screen scroll-smooth bg-white dark:bg-gray-900">
      {showNavbar && <NavbarDemo />}

      <Routes>
        {/* Auth (Public) */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Home (Public) */}
        <Route
          path="/"
          element={
            <>
              <div className="relative w-screen h-screen">
                <ImagesSlider
                  className="h-full w-full"
                  images={[
                    "https://picsum.photos/id/1018/1920/1080",
                    "https://picsum.photos/id/1015/1920/1080",
                    "https://picsum.photos/id/1019/1920/1080",
                  ]}
                >
                  <div className="relative z-50 flex flex-col items-center justify-center h-full text-center px-6">
                    <h1 className="text-white text-4xl md:text-5xl font-heading font-bold leading-tight">
                      Department <br /> of <br /> Electronics & Communication
                      Engineering
                    </h1>
                    <h6 className="text-white text-sm mt-7 md:text-base font-heading">
                      Accredited by National Board of Accreditation (NBA)
                      <br />
                      (Under the School of Engineering)
                    </h6>
                    <h4 className="text-white text-2xl mt-7 md:text-3xl font-heading font-bold">
                      Haldia Institute of Technology
                    </h4>
                    <h4 className="text-white text-sm mt-1 md:text-base font-heading">
                      (An autonomous institute, approved by AICTE)
                      <br />
                      NAAC Accredited Grade 'A'
                    </h4>
                  </div>
                </ImagesSlider>
              </div>

              <Hod />
              <About teachers={teachers} />
              <Communication />
              <Footer />
            </>
          }
        />

        {/* --- Protected Pages --- */}
        {/* All routes below require login */}

        <Route
          path="/about"
          element={
            <ProtectedRoute>
              <AboutPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/students"
          element={
            <ProtectedRoute>
              <StudentsPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/events"
          element={
            <ProtectedRoute>
              <Events />
            </ProtectedRoute>
          }
        />
        <Route
          path="/events/invited-talks"
          element={
            <ProtectedRoute>
              <Events />
            </ProtectedRoute>
          }
        />
        <Route
          path="/events/artefacts"
          element={
            <ProtectedRoute>
              <Events />
            </ProtectedRoute>
          }
        />
        <Route
          path="/events/wall-magazine"
          element={
            <ProtectedRoute>
              <Events />
            </ProtectedRoute>
          }
        />
        <Route
          path="/events/alumni-interactions"
          element={
            <ProtectedRoute>
              <Events />
            </ProtectedRoute>
          }
        />
        {/* Add other protected routes here (e.g., /research, /downloads) */}
      </Routes>
    </div>
  );
}

export default function App() {
  return (
    // ⭐ WRAPPED APP IN AUTH PROVIDER
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
}