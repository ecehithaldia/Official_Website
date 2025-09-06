
import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase"; 
import { seedTeachers } from "./SeedTeacher"; 
import { ImagesSlider } from "@/components/ui/images-slider";
import { NavbarDemo } from "./components/NavbarDemo";

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
    <div className="w-screen">

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
          <div className="relative z-50 flex flex-col items-center justify-center h-full">
            <h1 className="text-white text-4xl md:text-5xl font-heading font-bold leading-tight text-center">
              Department <br />
              of <br />
              Electronics & Communication Engineering <br/>
            </h1>
            <h6 className="text-white text-0.5xl mt-7 md:text-0.625xl font-heading leading-tight text-center">
              Accredited by National Board of Accreditation (NBA) <br />
              (Under the School of Engineering)
            </h6>
            <h4 className="text-white text-2xl mt-7 md:text-2.5xl font-heading font-bold leading-tight text-center">
              Haldia Institute of Technology
            </h4>
            <h4 className="text-white text-0.5xl mt-1 md:text-0.625xl font-heading leading-tight text-center">
              (An autonomous institute, approved by AICTE) <br />
              NAAC Accredited Grade 'A'
            </h4>
          </div>
        </ImagesSlider>
      </div>

{/* Teacher List */}
      <div className="p-6 bg-gray-100 min-h-screen">
        <h2 className="text-2xl font-bold mb-4">Our Teachers</h2>
        <ul className="space-y-4">
          {teachers.map((teacher) => (
            <li
              key={teacher.id}
              className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition"
            >
              <h3 className="font-semibold text-lg">{teacher.name}</h3>
              {teacher.subject && (
                <p className="text-gray-600">Subject: {teacher.subject}</p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

