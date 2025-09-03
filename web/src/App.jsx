// App.jsx
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase"; 
import { seedTeachers } from "./SeedTeacher"; 
import { ImagesSlider } from "@/components/ui/images-slider";
import "./App.css";

export default function App() {
  const [teachers, setTeachers] = useState([]);

  // 🔹 Function to fetch teachers
  const fetchTeachers = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "teachers"));
      const teacherList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTeachers(teacherList);
    } catch (error) {
      console.error("❌ Error fetching teachers:", error);
    }
  };

  useEffect(() => {
    // 👇 Uncomment only when you need to (after deleting collection or adding new teachers)
    seedTeachers();

    fetchTeachers();
  }, []);

  return (
    <div className="h-screen w-screen flex flex-col">
      {/* Image Slider */}
      <ImagesSlider
        images={[
          "https://picsum.photos/id/1018/1000/600",
          "https://picsum.photos/id/1015/1000/600",
          "https://picsum.photos/id/1019/1000/600",
        ]}
      >
        <h1 className="z-50 text-white text-4xl md:text-5xl font-heading font-bold leading-tight text-center">
          Department <br />
          of <br />
          Electronics & Communication Engineering
        </h1>
      </ImagesSlider>

      {/* Teacher List */}
      <div className="p-6 bg-gray-100 flex-1 overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">Our Teachers</h2>
        <ul className="space-y-2">
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
