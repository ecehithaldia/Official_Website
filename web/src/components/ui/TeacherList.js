import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

function TeacherList() {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    const fetchTeachers = async () => {
      const querySnapshot = await getDocs(collection(db, "teachers"));
      const teachersData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setTeachers(teachersData);
    };

    fetchTeachers();
  }, []);

  return (
    <div>
      <h2>Our Faculty Members</h2>
      <ul>
        {teachers.map((t) => (
          <li key={t.id}>
            <strong>{t.name}</strong> – {t.designation} ({t.department})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TeacherList;
