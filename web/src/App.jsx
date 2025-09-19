import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase"; 
import { seedTeachers } from "./SeedTeacher"; 
import { ImagesSlider } from "@/components/ui/images-slider";
import { NavbarDemo } from "./components/NavbarDemo";
import { BentoGrid, BentoGridItem } from "./components/ui/bento-grid.jsx";
import { Footer } from "@/components/Footer";

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

  const sections = ["about", "students", "research", "events", "downloads"];

  return (
    <div className="w-screen scroll-smooth">

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

      {/* Multi Sections */}
      {sections.map((section) => (
        <section
          key={section}
          id={section}
          className="p-6 bg-gray-50 dark:bg-gray-900 snap-start scroll-mt-24"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-center tracking-wide text-gray-900 dark:text-white mt-6">
            {section.toUpperCase()}
          </h2>

          <BentoGrid className="mt-6">
            {teachers.map((teacher) => (
              <BentoGridItem
                key={`${section}-${teacher.id}`}
                title={teacher.name}
                description={teacher.subject || "Subject not available"}
                className="relative overflow-hidden rounded-xl group"
                header={
                  <div
                    className="absolute inset-0 w-full h-full bg-center bg-cover transition-transform duration-500 ease-in-out group-hover:scale-115"
                    style={{
                      backgroundImage:
                        'url("https://images.pexels.com/photos/7648307/pexels-photo-7648307.jpeg")',
                    }}
                  >
                    <div className="absolute inset-0 "></div>
                  </div>
                }
              />
            ))}
          </BentoGrid>
        </section>
      ))}

      {/* Footer */}
      <Footer />
    </div>
  );
}






