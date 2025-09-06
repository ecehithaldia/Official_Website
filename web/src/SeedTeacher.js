
  import { doc, setDoc } from "firebase/firestore";
  import { db } from "./firebase";


  const teachers = [
    { name: "Prof. A", subject: "Electronics" },
    { name: "Prof. B", subject: "Communication" },
    { name: "Prof. C", subject: "Signal Processing" },
  ];

  export const seedTeachers = async () => {
    console.log("🚀 Starting seeding process...");
    try {
      for (let teacher of teachers) {

        await setDoc(doc(db, "teachers", teacher.name), teacher);
        console.log(` Added/Updated: ${teacher.name}`);
      }
      console.log("🎉 Seeding finished!");
    } catch (error) {
      console.error(" Error seeding teachers: ", error);
    }
  };
