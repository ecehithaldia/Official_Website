import React from "react";
import { motion } from "framer-motion";
import { BentoGrid, BentoGridItem } from "../components/ui/bento-grid.jsx";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel.jsx";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";


// 🌌 Shared Styles
const sectionBase =
  "relative min-h-screen py-16 px-6 flex flex-col justify-center items-center overflow-hidden";
const glassCard =
  "backdrop-blur-xl bg-white/5 dark:bg-black/30 border border-white/10 rounded-2xl shadow-[0_0_30px_rgba(0,0,0,0.3)] hover:shadow-[0_0_50px_rgba(0,0,0,0.5)] transition-shadow duration-300";

const headingStyle =
  "text-4xl md:text-5xl font-bold text-center mb-12 tracking-tight text-white";
const subText = "text-gray-200 text-lg leading-relaxed text-justify";

// 🟦 Institute Section
const Institute = ({ theme }) => (
  <section id="institute" className={`${sectionBase}`}>
    <motion.h2
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className={`${headingStyle}`}
    >
      About Haldia Institute of Technology
    </motion.h2>

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className={`p-8 max-w-4xl w-full ${glassCard}`}
    >
      <p className={subText}>
        Haldia Institute of Technology, an autonomous institute, approved by
        AICTE, and affiliated to Maulana Abul Kalam Azad University of
        Technology, began its journey in the year 1996. It is the first private
        and NAAC ‘A’ grade accredited academic institution catering technical
        education in West Bengal. The Institute is situated at Haldia – an
        industrial hub in Eastern India and 138 KM away from Kolkata. Since
        inception, Haldia Institute of Technology is dedicated to the objectives
        of creating highly trained professional manpower in various disciplines
        of Engineering, Technology and Social Science. The Institute is also
        dedicated to the contribution of higher scientific research in
        Technology as well as in Applied Science and Social Science. Haldia
        Institute of Technology has a sprawling campus of 49 acres of land.
        There are 12 NBA accredited B.Tech courses, 5 M.Tech, MCA and MBA
        courses with 5200 students strength. The institute comprises all modern
        facilities like, bank, ATM kiosk, post office, medical store,
        departmental store, book shop, gymnasium, cafeteria etc. It has also
        AICTE Idea Lab, Central Library and Central computing facility lab.
      </p>
      <a
        href="https://hithaldia.in"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#00C27A] hover:text-[#00e88b] hover:underline mt-6 block text-center font-medium"
      >
        Visit official website
      </a>
    </motion.div>
  </section>
);

// 🟦 Department Section (Dark Theme Version)

const Department = () => {
  const stats = [
    { label: "B.Tech Intake", value: 180 },
    { label: "PG Intake", value: 12 },
    { label: "Faculty Members", value: 34 },
    { label: "NBA Accreditation", value: "2004, 2008, 2018, 2022" },
  ];

  return (
    <section id="department" className="py-16 bg-[#0B1120] text-gray-100">
      <motion.h2
        className="text-4xl font-bold mb-6 text-center text-white"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        About the Department
      </motion.h2>

      <motion.p
        className="max-w-3xl mx-auto text-center leading-relaxed mb-10 text-gray-300"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Established in 1998, the Department of Electronics & Communication
        Engineering has grown from 30 students to 180 in B.Tech and 12 in PG
        Microelectronics & VLSI Design. With 34 experienced faculty members, the
        department blends quality teaching with active research. Equipped
        laboratories, a dedicated library, and participation in technical events
        make it a hub for innovation and learning.
      </motion.p>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 shadow-lg rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-2xl font-bold mb-2 text-emerald-400">
              {stat.value}
            </h3>
            <p className="text-gray-300">{stat.label}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

// 🟦 Faculty Section (UPDATED)
const Faculty = ({ theme }) => {
  const faculty = [
    { id: 1, name: "Prof. (Dr.) Chanchal Kumar De", designation: "Professor, HOD", email: "chanchalkumarde@gmail.com", image: "https://source.unsplash.com/400x400/?man,teacher,1" },
    { id: 2, name: "Prof. (Dr.) Malay Kumar Pandit", designation: "Professor", email: "mkp10011@yahoo.com", image: "https://source.unsplash.com/400x400/?man,teacher,2" },
    { id: 3, name: "Prof. (Dr.) Kisalaya Chakrabarti", designation: "Professor", email: "kisalayac@gmail.com", image: "https://source.unsplash.com/400x400/?woman,teacher,3" },
    { id: 4, name: "Dr. Jagannath Samanta", designation: "Associate Professor", email: "jagannath19060@gmail.com", image: "https://source.unsplash.com/400x400/?man,lecturer,4" },
    { id: 5, name: "Dr. Avisankar Roy", designation: "Associate Professor", email: "avisankar.hit@gmail.com", image: "https://source.unsplash.com/400x400/?man,lecturer,5" },
    { id: 6, name: "Dr. Banibrata Bag", designation: "Associate Professor", email: "banibrata.ecehit@gmail.com", image: "https://source.unsplash.com/400x400/?man,lecturer,6" },
    { id: 7, name: "Dr. Tilak Mukherjee", designation: "Associate Professor", email: "mukherjeetilak@gmail.com", image: "https://source.unsplash.com/400x400/?man,lecturer,7" },
    { id: 8, name: "Dr. Avishek Das", designation: "Associate Professor", email: "avishek.uit.0408@gmail.com", image: "https://source.unsplash.com/400x400/?man,lecturer,8" },
    { id: 9, name: "Dr. Sagarika Das", designation: "Associate Professor", email: "sagarikadas1978@gmail.com", image: "https://source.unsplash.com/400x400/?woman,lecturer,9" },
    { id: 10, name: "Dr. Ritwik Haldar", designation: "Associate Professor", email: "drritwikhaldar@hithaldia.ac.in", image: "https://source.unsplash.com/400x400/?man,lecturer,10" },
    { id: 11, name: "Dr. Suman Paul", designation: "Assistant Professor", email: "paulsuman999@gmail.com", image: "https://source.unsplash.com/400x400/?man,assistant,11" },
    { id: 12, name: "Dr. Kushal Roy", designation: "Assistant Professor", email: "kushalroy1979@gmail.com", image: "https://source.unsplash.com/400x400/?man,assistant,12" },
    { id: 13, name: "Dr. Sudipta Bardhan", designation: "Assistant Professor", email: "sudipta.bardhan15@gmail.com", image: "https://source.unsplash.com/400x400/?woman,assistant,13" },
    { id: 14, name: "Dr. Amit Bhattacharyya", designation: "Assistant Professor", email: "amit_elec06@yahoo.com", image: "https://source.unsplash.com/400x400/?man,assistant,14" },
    { id: 15, name: "Dr. Akinchan Das", designation: "Assistant Professor", email: "aki_06das@yahoo.co.in", image: "https://source.unsplash.com/400x400/?man,assistant,15" },
    { id: 16, name: "Dr. Dibyendu Chowdhury", designation: "Assistant Professor", email: "dc.ecehit@gmail.com", image: "https://source.unsplash.com/400x400/?man,assistant,16" },
    { id: 17, name: "Dr. Himadri Sekhar Das", designation: "Assistant Professor", email: "das.himadrisekhar@gmail.com", image: "https://source.unsplash.com/400x400/?man,assistant,17" },
    { id: 18, name: "Dr. Kamanashis Goswami", designation: "Assistant Professor", email: "kamanashis.goswami@gmail.com", image: "https://source.unsplash.com/400x400/?man,assistant,18" },
    { id: 19, name: "Dr. Pinaki Satpathy", designation: "Assistant Professor", email: "pinakihit.sat@gmail.com", image: "https://source.unsplash.com/400x400/?man,assistant,19" },
    { id: 20, name: "Dr. Santanu Maity", designation: "Assistant Professor", email: "santanu2010@gmail.com", image: "https://source.unsplash.com/400x400/?man,assistant,20" },
    { id: 21, name: "Dr. Raj Kumar Maity", designation: "Assistant Professor", email: "hitece.raj@gmail.com", image: "https://source.unsplash.com/400x400/?man,assistant,21" },
    { id: 22, name: "Dr. Himanshu R. Das", designation: "Assistant Professor", email: "das.himanshu69@gmail.com", image: "https://source.unsplash.com/400x400/?man,assistant,22" },
    { id: 23, name: "Dr. Biplab Bag", designation: "Assistant Professor", email: "bbagateie@gmail.com", image: "https://source.unsplash.com/400x400/?man,assistant,23" },
    { id: 24, name: "Dr. Rana Kumar Jana", designation: "Assistant Professor", email: "ranakumar.jana@hithaldia.ac.in", image: "https://source.unsplash.com/400x400/?man,assistant,24" },
    { id: 25, name: "Mr. Tirthadip Sinha", designation: "(Thesis Submitted) Assistant Professor", email: "tsinha.ece.official@gmail.com", image: "https://source.unsplash.com/400x400/?man,phd,25" },
    { id: 26, name: "Mr. Surajit Mukherjee", designation: "(Thesis Submitted) Assistant Professor", email: "ece.surajit@yahoo.com", image: "https://source.unsplash.com/400x400/?man,phd,26" },
    { id: 27, name: "Mrs. Razia Sultana", designation: "(Pursuing Ph. D) Assistant Professor", email: "razia04@gmail.com", image: "https://source.unsplash.com/400x400/?woman,phd,27" },
    { id: 28, name: "Mr. Dipak Samanta", designation: "(Pursuing Ph. D) Assistant Professor", email: "dipak.ecehit@gmail.com", image: "https://source.unsplash.com/400x400/?man,phd,28" },
    { id: 29, name: "Mrs. Moumita Jana", designation: "(Pursuing Ph. D) Assistant Professor", email: "mou.321jana@gmail.com", image: "https://source.unsplash.com/400x400/?woman,phd,29" },
    { id: 30, name: "Mr. Jayanta Kumar Bag", designation: "(Pursuing Ph. D) Assistant Professor", email: "jkbag2008@gmail.com", image: "https://source.unsplash.com/400x400/?man,phd,30" },
    { id: 31, name: "Ms. Pallabi Pahari", designation: "(Pursuing Ph. D) Assistant Professor", email: "pallabi.pahariec@gmail.com", image: "https://source.unsplash.com/400x400/?woman,phd,31" },
    { id: 32, name: "Ms. Sayani Ghosh", designation: "(Pursuing Ph. D) Assistant Professor", email: "sayani11109@gmail.com", image: "https://source.unsplash.com/400x400/?woman,phd,32" },
    { id: 33, name: "Mr. Asim Kuilya", designation: "(Pursuing Ph. D) Assistant Professor", email: "asim.kuilya@gmail.com", image: "https://source.unsplash.com/400x400/?man,phd,33" },
    { id: 34, name: "Mr. Sourav Kr. Das", designation: "Assistant Professor", email: "das.sourav127@gmail.com", image: "https://source.unsplash.com/400x400/?man,assistant,34" },
    { id: 35, name: "Mr. Sachindeb Jana", designation: "(Pursuing Ph. D) Assistant Professor", email: "mmmsachin@gmail.com", image: "https://source.unsplash.com/400x400/?man,phd,35" },
    { id: 36, name: "Mr. Atanu Pradhan", designation: "(Pursuing Ph. D) Assistant Professor", email: "atanu.pradhan.hit@gmail.com", image: "https://source.unsplash.com/400x400/?man,phd,36" },
    { id: 37, name: "Mr. Tapan Maity", designation: "(Pursuing Ph. D) Assistant Professor", email: "tapan16maity@gmail.com", image: "https://source.unsplash.com/400x400/?man,phd,37" },
  ];

  return (
    <section
      id="faculty"
      className="p-6 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 snap-start scroll-mt-24"
    >
      <motion.h2
        className="text-5xl md:text-6xl font-extrabold mb-12 text-center tracking-wide text-gray-900 dark:text-white mt-36"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Our Life Coach
      </motion.h2>

      <BentoGrid className="mt-16 max-w-6xl w-full mx-auto">
        {faculty.map((f) => (
          <BentoGridItem
            key={`faculty-${f.id}`}
            title={f.name}
            description={
              <div className="space-y-2">
                <p className="text-gray-700 dark:text-gray-300 font-medium">
                  {f.designation}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  📧{" "}
                  <a
                    href={`mailto:${f.email}`}
                    className="font-medium text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    {f.email}
                  </a>
                </p>
              </div>
            }
            className="relative overflow-hidden rounded-xl group"
            header={
              <div
                className="absolute inset-0 w-full h-full bg-center bg-cover transition-transform duration-500 ease-in-out group-hover:scale-115"
                style={{
                  backgroundImage: `url(${f.image})`,
                }}
              ></div>
            }
          />
        ))}
      </BentoGrid>
    </section>
  );
};

// 🟫 Technical Staff
const TechnicalStaff = ({ theme }) => {
  const staff = [
    { name: "Mr. Subhendu Barman", designation: "Instructor" },
    { name: "Mrs. Parswati Banerjee", designation: "Instructor" },
    { name: "Sunetra Maity", designation: "Demonstrator" },
    { name: "Souvik Devangshi", designation: "Demonstrator" },
    { name: "Mr. Tirthankar Majee", designation: "Demonstrator" },
  ];

  return (
    <section id="technical-staff" className={`${sectionBase}`}>
      <motion.h2
        className={`${headingStyle}`}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Technical Staff
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl w-full">
        {staff.map((s, i) => (
          <motion.div
            key={i}
            className={`p-6 ${glassCard} text-center hover:scale-105 transition-transform duration-300`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold text-white">{s.name}</h3>
            <p className="text-gray-300">{s.designation}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

// 🟥 Departmental Committees
const Committees = ({ theme }) => {
  const committees = [
    {
      title: "Program Assessment and Quality Improvement Committee (PAQIC)",
      members: [
        { name: "Prof. (Dr.) Chanchal Kumar De", role: "Chairman" },
        { name: "Dr. Avisankar Roy", role: "Member" },
        { name: "Mr. Tirthadip Sinha", role: "Member" },
        { name: "Dr. Tilak Mukherjee", role: "Member" },
        { name: "Dr. Avishek Das", role: "Member" },
        { name: "Dr. Jagannath Samanta", role: "Convener" },
      ],
    },
    {
      title: "Departmental Advisory Board (DAB)",
      members: [
        {
          name: "Prof. (Dr.) Chanchal Kumar De",
          designation: "Professor and HoD",
          role: "Chairman",
        },
        {
          name: "Prof. (Dr.) Kisalaya Chakrabarti",
          designation: "Professor",
          role: "Member",
        },
        { name: "Dr. Banibrata Bag", designation: "Assistant Professor", role: "Member" },
        { name: "Dr. Sudipta Bardhan", designation: "Assistant Professor", role: "Member" },
        { name: "Mr. Surajit Mukherjee", designation: "Assistant Professor", role: "Member" },
        { name: "Mrs. Moumita Jana", designation: "Assistant Professor", role: "Member" },
        { name: "Mrs. Razia Sultana", designation: "Assistant Professor", role: "Member" },
        { name: "Ms. Sayani Ghosh", designation: "Assistant Professor", role: "Member" },
        { name: "Dr. Suman Paul", designation: "Assistant Professor", role: "Convener" },
      ],
    },
    {
      title: "Departmental Academic Committee (DAC)",
      members: [
        { name: "Prof. (Dr.) Chanchal Kumar De", role: "Chairman" },
        { name: "Dr. Dibyendu Chowdhury", role: "Member" },
        { name: "Dr. Amit Bhattacharyya", role: "Member" },
        { name: "Dr. Akinchan Das", role: "Member" },
        { name: "Dr. Sagarika Das", role: "Member" },
        { name: "Mrs. Pallabi Pahari", role: "Member" },
        { name: "Dr. Kushal Roy", role: "Convener" },
      ],
    },
    {
      title: "Board of Studies (BoS)",
      members: [
        { name: "Prof. Chanchal Kumar De, ECE, HIT", role: "Chairman" },
        {
          name: "Prof. J. P. Bandopadhyay, Prof. Sumit Kundu, Prof. Santi Prasad Maity",
          role: "Member, Expert from outside",
        },
        {
          name: "Prof. C. K. Sarkar, Prof. Sourangshu Mukhopadhyay",
          role: "Member, Expert nominated by VC",
        },
        { name: "Mr. Avisake Nandi, Ericsson", role: "Member, Representative from Industry" },
        { name: "Dr. Tirthasankar Das", role: "Member, Alumni of ECE, HIT" },
        { name: "All faculty members of ECE department" },
      ],
    },
    {
      title: "Departmental Internal Academic Audit Committee (AAC)",
      members: [
        { name: "Prof. (Dr.) Chanchal Kumar De", designation: "Professor", role: "Chairman" },
        { name: "Dr. Avisankar Roy", designation: "Associate Professor", role: "Member" },
        { name: "Dr. Kushal Roy", designation: "Assistant Professor", role: "Member" },
        { name: "Dr. Tilak Mukherjee", designation: "Assistant Professor", role: "Member" },
        { name: "Dr. Jagannath Samanta", designation: "Associate Professor", role: "Member" },
        {
          name: "Prof. (Dr.) J.P. Bandopadhyay",
          designation: "Former Professor, University of Calcutta",
          role: "External Member",
        },
        { name: "Dr. Avishek Das", designation: "Associate Professor", role: "Convener" },
      ],
    },
    {
      title: "Departmental Examination Committee (DEC)",
      members: [
        { name: "Prof. (Dr.) Chanchal Kumar De", role: "Chairman" },
        { name: "Dr. Banibrata Bag", role: "Member" },
        { name: "Dr. Avishek Das", role: "Member" },
        { name: "Mr. Atanu Pradhan", role: "Member" },
        { name: "Mr. Sourav Das", role: "Member" },
        { name: "Dr. Pinaki Satpathy", role: "Member" },
        { name: "Dr. Akinchan Das", role: "Convener" },
      ],
    },
    {
      title: "Departmental Project Monitoring Committee (PMC)",
      members: [
        { name: "Prof. (Dr.) Chanchal Kumar De", role: "Chairman" },
        { name: "Dr. Sudipta Bardhan", role: "Member" },
        { name: "Prof. (Dr.) Kishalaya Chakrabarti", role: "Member" },
        { name: "Mr. Raj Kumar Maity", role: "Member" },
        { name: "Dr. Sagarika Das", role: "Convener" },
      ],
    },
  ];

  return (
    <section id="committees" className={`${sectionBase}`}>
      <motion.h2
        className={`${headingStyle}`}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Departmental Committees
      </motion.h2>

      <div className="max-w-5xl mx-auto space-y-6">
        {committees.map((committee, i) => (
          <motion.div
            key={i}
            className={`p-6 ${glassCard} rounded-2xl shadow-md hover:shadow-lg transition duration-300`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-center text-indigo-300 mb-4">
              {committee.title}
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-gray-200 border-collapse">
                <thead>
                  <tr className="border-b border-gray-600">
                    <th className="py-2 px-4">Name</th>
                    {committee.members.some((m) => m.designation) && (
                      <th className="py-2 px-4">Designation</th>
                    )}
                    <th className="py-2 px-4">Role</th>
                  </tr>
                </thead>
                <tbody>
                  {committee.members.map((member, j) => (
                    <tr
                      key={j}
                      className="border-b border-gray-700 hover:bg-gray-800/30 transition"
                    >
                      <td className="py-2 px-4">{member.name}</td>
                      {committee.members.some((m) => m.designation) && (
                        <td className="py-2 px-4">
                          {member.designation || "-"}
                        </td>
                      )}
                      <td className="py-2 px-4">{member.role || "-"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

// 🟪 Facilities Section
const Facilities = ({ theme }) => {
  const labs = [
    {
      name: "BASIC ELECTRONICS ENGINEERING LABORATORY",
      description:
        "As the name suggests, it is the very beginning part in the practical area for all engineering disciplines. According to the syllabus designed by HIT (Autonomous), 1st & 2nd semester students become familiar with basic components of analog and digital electronics. They gather knowledge through the observation of the actual behavior of electronic components. Ten numbers of equal timing slots in a week are available where 40 students can perform experiment at a time...",
      image: "",
    },
    {
      name: "ELECTRONICS DEVICE LAB",
      description:
        "Hands-on experience with process scheduling, memory management, and system-level programming.",
      image: "",
    },
    {
      name: "MICROPROCESSOR & DIGITAL ELECTRONICS LABORATORY",
      description:
        "Covers modern frontend and backend development technologies through real-world projects.",
      image: "",
    },
    {
      name: "MICROWAVE ENGINEERING & ANTENNA LABORATORY",
      description:
        "Practical training on sensors, microcontrollers, and real-time embedded solutions.",
      image: "",
    },
    {
      name: "COMMUNICATION SYSTEMS LABORATORY",
      description:
        "Explores machine learning models, data processing, and neural network implementations.",
      image: "",
    },
    {
      name: "DIGITAL SIGNAL PROCESSING & CONTROL SYSTEM LAB",
      description:
        "Explores machine learning models, data processing, and neural network implementations.",
      image: "",
    },
    {
      name: "IOT & ROBOTICS LAB",
      description:
        "Explores machine learning models, data processing, and neural network implementations.",
      image: "",
    },
    {
      name: "VLSI DESIGN & SIGNAL PROCESSING LAB",
      description:
        "Explores machine learning models, data processing, and neural network implementations.",
      image: "",
    },
    {
      name: "PROJECT LAB",
      description:
        "Explores machine learning models, data processing, and neural network implementations.",
      image: "",
    },
    {
      name: "PCB & PROTOTYPE DESIGN LABORATORY",
      description:
        "Explores machine learning models, data processing, and neural network implementations.",
      image: "",
    },
    {
      name: "COMPUTING AND RESEARCH LAB",
      description:
        "Explores machine learning models, data processing, and neural network implementations.",
      image: "",
    },
  ];

  return (
    <section id="facilities" className={`${sectionBase}`}>
      <motion.h2
        className={`${headingStyle}`}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Facilities
      </motion.h2>

      <Carousel
        items={labs.map((lab, i) => (
          <Card
            key={i}
            index={i}
            layout
            card={{
              category: "Laboratory",
              title: lab.name,
              src: lab.image || "/images/placeholder.jpg",
              content: (
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p>{lab.description}</p>
                  <p>
                    <strong>Location:</strong> Department Building – Floor {i + 1}
                  </p>
                  <p>
                    <strong>Systems:</strong> {15 + i * 2} High-End PCs
                  </p>
                </div>
              ),
            }}
          />
        ))}
      />
    </section>
  );
};

// 🏁 Main Component Export
const AboutPage = ({ theme }) => {

    const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 200);
      }
    }
  }, [location]);


  return (
    <main className="relative z-10">
      <Institute theme={theme} />
      <Department theme={theme} />
      <Faculty theme={theme} />
      <TechnicalStaff theme={theme} />
      <Committees theme={theme} />
      <Facilities theme={theme} />
    </main>
  );
};

export default AboutPage;

