import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase"; 
import { seedTeachers } from "./SeedTeacher"; 
import { ImagesSlider } from "./components/ui/images-slider";
import { NavbarDemo } from "./components/NavbarDemo";
import { Footer } from "./components/Footer";
import { About } from "./components/About";
import { Students } from "./components/Students";
import { Research } from "./components/Research";
import { Events } from "./components/Events";
import { Downloads } from "./components/Downloads";
import { Hod } from "./components/Hod";
import { Communication } from "./components/Communication"; 



export default function App() {
  const [teachers, setTeachers] = useState([]);

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

      {/* Slider */}
      <div className="relative w-screen h-screen">
        <NavbarDemo />
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
              Department <br />
              of <br />
              Electronics & Communication Engineering <br />
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

      
      <Hod />
      <About teachers={teachers} />
      <Students teachers={teachers} />
      <Research teachers={teachers} />
      <Events teachers={teachers} />
      <Downloads teachers={teachers} />
      
      <Communication /> 

      {/* Footer */}
      <Footer />
    </div>
  );
}








