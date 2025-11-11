import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db, auth } from "./firebase"; // Import auth
import { onAuthStateChanged } from "firebase/auth"; // Import auth state listener
import { seedTeachers } from "./SeedTeacher";
import { ImagesSlider } from "./components/ui/images-slider";
import { NavbarDemo } from "./components/NavbarDemo";
import { Footer } from "./components/Footer";
import { About } from "./components/Updates";
// import { Students } from "./components/Students";
// import { Research } from "./components/Research";
// import { Events } from "./components/Events";
// import { Downloads } from "./components/Downloads";
import { Hod } from "./components/Hod";
import { Communication } from "./components/Communication";

// Pages
import Login from "@/pages/Login";
import Signup from "@/pages/Signup";
import AboutPage from "@/pages/AboutPage";

//  Wrapper component to access useLocation inside Router
function AppContent() {
  const [teachers, setTeachers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null); // State for the logged-in user
  const [loadingAuth, setLoadingAuth] = useState(true); // State to track auth loading
  const location = useLocation();

  // Pages where Navbar should NOT appear
  const noNavbarRoutes = ["/login", "/signup", "/aboutpage"];
  const showNavbar = !noNavbarRoutes.includes(location.pathname);

  // Listener for auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoadingAuth(false);
      console.log("Current user:", user ? user.displayName : "None");
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

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

  // Show a loading indicator while checking auth state
  if (loadingAuth) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center bg-white dark:bg-gray-900">
        <p className="text-xl dark:text-white">Loading...</p>
      </div>
    );
  }

  return (
    <div className="w-screen scroll-smooth bg-white dark:bg-gray-900">
      {/* Conditionally show Navbar. Pass the currentUser to it. */}
      {showNavbar && <NavbarDemo currentUser={currentUser} />}

      <Routes>
        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<AboutPage />} />

        {/* Main App Route */}
        <Route
          path="/"
          element={
            <>
              {/* Hero Slider */}
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
                    <h6 className="text-white text-sm mt-7 md:text-base font-heading leading-tight">
                      Accredited by National Board of Accreditation (NBA) <br />
                      (Under the School of Engineering)
                    </h6>
                    <h4 className="text-white text-2xl mt-7 md:text-3xl font-heading font-bold leading-tight">
                      Haldia Institute of Technology
                    </h4>
                    <h4 className="text-white text-sm mt-1 md:text-base font-heading leading-tight">
                      (An autonomous institute, approved by AICTE) <br />
                      NAAC Accredited Grade 'A'
                    </h4>
                  </div>
                </ImagesSlider>
              </div>

              {/* Sections */}
              <Hod />
              {/* Pass currentUser to any components that need it */}
              <About teachers={teachers} currentUser={currentUser} />
              {/* <Students teachers={teachers} />
              <Research teachers={teachers} />
              <Events teachers={teachers} />
              <Downloads teachers={teachers} /> */}
              <Communication />
              <Footer />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}