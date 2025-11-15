import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";
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

// ⭐ ADDED — correct Events import
import Events from "@/pages/Events";

function AppContent() {
  const [teachers, setTeachers] = useState([]);
  const location = useLocation();

  // Smooth scroll to hashed sections like #alumni
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

  const noNavbarRoutes = ["/login", "/signup", "/aboutpage"];
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
        {/* Auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Pages */}
        <Route path="/about" element={<AboutPage />} />

        <Route path="/students" element={<StudentsPage />} />

        {/* ⭐ ADDED — FULL EVENTS ROUTE SUPPORT */}
        <Route path="/events" element={<Events />} />
        <Route path="/events/invited-talks" element={<Events />} />
        <Route path="/events/artefacts" element={<Events />} />
        <Route path="/events/wall-magazine" element={<Events />} />
        <Route path="/events/alumni-interactions" element={<Events />} />

        {/* Home */}
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
                      Department <br /> of <br /> Electronics & Communication Engineering
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













