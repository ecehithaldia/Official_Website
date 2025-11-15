import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

//
// ---------------------- INVITED TALKS DATA ----------------------
//

const talks = [
  {
    id: 1,
    title: "Wireless Communication: Unlocking the Future of Seamless Connectivity",
    speaker:
      "Mr. Rajat Kumar Pramanik, Reliance Industries Ltd. (JIO), Kolkata, India",
    date: "22-Apr-2024",
    image: "/images/talk1.png",
    description:
      "One day industry expert’s lecture on Wireless Communication was organized to promote knowledge upgradation, skill enhancement, and exposure to real-world telecom challenges including 5G, B5G, and future 6G trends.",
  },
  {
    id: 2,
    title:
      "Advanced Communication Systems: Revolutionizing Connectivity and Digital Transformation",
    speaker: "Mr. Avisake Nandy, Ericsson India Pvt. Ltd., Kolkata, India",
    date: "29-Feb-2024",
    image: "/images/talk2.png",
    description:
      "An insightful talk on digital transformation, telecom evolution, real-world industry applications, and global communication challenges.",
  },
  {
    id: 3,
    title:
      "Next-Generation Communication Systems: Paving the Way for a Connected Future",
    speaker: "Mr. Anup Basak, Vodafone-Idea Ltd., India",
    date: "09-Jan-2024",
    image: "/images/talk3.png",
    description:
      "The expert discussed India's telecom transition, future network evolution, and the technological trends shaping communication innovations.",
  },
  {
    id: 4,
    title:
      "The Evolution of Electronic Devices: Innovations Shaping the Future of Technology",
    speaker: "Mr. Sumit Pramanik, Manager, BHEL, Bangalore",
    date: "06-Mar-2023",
    image: "/images/talk4.png",
    description:
      "A detailed session on electronic device innovation, manufacturing processes, semiconductor growth, and India’s emerging tech ecosystem.",
  },
  {
    id: 5,
    title:
      "Mastering Cloud Computing: Revolutionizing IT Infrastructure and Business Innovation",
    speaker:
      "Mr. Anirban Guin, Senior Test Automation Architect, Ericsson India Pvt. Ltd.",
    date: "05-Jan-2023",
    image: "/images/talk5.png",
    description:
      "The lecture covered cloud computing fundamentals, enterprise cloud adoption, digital infrastructure modernization, and future business applications.",
  },
  {
    id: 6,
    title:
      "Unlocking the Power of AI with Python: From Fundamentals to Real-World Applications",
    speaker: "Mr. Saurav Pal, Manager, Accenture, Gurgaon",
    date: "03-Jan-2022",
    image: "/images/talk6.png",
    description:
      "A deep dive into AI tools, Python-based implementations, modern AI workflows, and real-world deployment challenges.",
  },
];

//
// ---------------------- ARTEFACTS DATA ----------------------
//

const artefactsData = [
  {
    id: 1,
    year: "2024",
    title: "i-Artefacts",
    image: "/images/artefact-2024.png",
    pdf: "/pdfs/artefact-2024.pdf",
  },
  {
    id: 2,
    year: "2023",
    title: "i-Artefacts",
    image: "/images/artefact-2023.png",
    pdf: "/pdfs/artefact-2023.pdf",
  },
  {
    id: 3,
    year: "2022",
    title: "i-Artefacts",
    image: "/images/artefact-2022.png",
    pdf: "/pdfs/artefact-2022.pdf",
  },
  {
    id: 4,
    year: "2021",
    title: "i-Artefacts",
    image: "/images/artefact-2021.png",
    pdf: "/pdfs/artefact-2021.pdf",
  },
  {
    id: 5,
    year: "2020",
    title: "i-Artefacts",
    image: "/images/artefact-2020.png",
    pdf: "/pdfs/artefact-2020.pdf",
  },
  {
    id: 6,
    year: "2019",
    title: "i-Artefacts",
    image: "/images/artefact-2019.png",
    pdf: "/pdfs/artefact-2019.pdf",
  },
];

//
// ---------------------- WALL MAG DATA ----------------------
//

const wallMagazines = [
  {
    id: 1,
    year: "2024",
    title: "Wall Magazine for 2024",
    theme: "From Sand to Silicon – Shaping Tomorrow",
    image: "/images/wallmag-2024.png",
    description:
      "This edition highlights the journey of semiconductors and their role in shaping future technologies including IoT, renewable energy, automation, and advanced electronics.",
  },
  {
    id: 2,
    year: "2023",
    title: "Wall Magazine for 2023",
    theme:
      "Road to the Future of Electronics in Aeronautics and Space in India",
    image: "/images/wallmag-2023.png",
    description:
      "Focused on India's achievements in space research, satellite communication, AI navigation, and electronics innovations powering ISRO’s global milestones.",
  },
  {
    id: 3,
    year: "2022",
    title: "Wall Magazine for 2022",
    theme: "Electronics Superpower India",
    image: "/images/wallmag-2022.png",
    description:
      "Showcasing India's semiconductor mission, Make-in-India electronics growth, 5G innovation, and sustainable future-driven electronics practices.",
  },
];

//
// ---------------------- COMPONENTS ----------------------
//

const InvitedTalks = () => (
  <section
    id="invited-talks"
    className="px-6 pt-24 pb-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 
      dark:from-gray-900 dark:via-gray-950 dark:to-black scroll-mt-28"
  >
    <h2 className="text-5xl font-extrabold text-center mb-20 mt-10 text-gray-900 dark:text-white">
      List of Invited Talks
    </h2>

    <div className="max-w-7xl mx-auto flex flex-col gap-20">
      {talks.map((talk) => (
        <div
          key={talk.id}
          className="flex flex-col md:flex-row gap-10 bg-white/80 dark:bg-gray-800/60
          border border-gray-200 dark:border-gray-700 rounded-2xl shadow-xl p-6"
        >
          <div className="md:w-1/3 h-72 rounded-xl overflow-hidden">
            <img
              src={talk.image}
              alt={talk.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="md:w-2/3 flex flex-col">
            <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-2">
              {talk.title}
            </h3>
            <p className="text-green-600 dark:text-green-400 text-sm mb-1">
              by {talk.speaker}
            </p>
            <p className="text-red-500 dark:text-red-300 text-sm mb-4">
              on {talk.date}
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
              {talk.description}
            </p>

            <button className="mt-4 text-red-600 dark:text-red-400 hover:underline text-sm">
              📄 Read more…
            </button>
          </div>
        </div>
      ))}
    </div>
  </section>
);

const Artefacts = () => (
  <section
    id="artefacts"
    className="px-6 pb-24 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 scroll-mt-28"
  >
    <h2 className="text-4xl md:text-5xl font-extrabold text-center pt-10 text-blue-300">
      iArtefacts
    </h2>

    <p className="text-center mt-3 text-yellow-400 tracking-widest uppercase text-sm">
      Chronicles of Technology, Talent, Innovation & Inspiration
    </p>

    <div className="max-w-7xl mx-auto mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
      {artefactsData.map((item) => (
        <div
          key={item.id}
          className="bg-gray-900/40 border border-gray-700 shadow-xl rounded-xl overflow-hidden pb-4"
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-[380px] object-cover"
          />

          <div className="text-center mt-4">
            <p className="text-xl font-semibold text-gray-200">{item.title}</p>
            <p className="text-gray-400 text-sm">{item.year}</p>
          </div>

          <div className="mt-3 flex justify-center">
            <a
              href={item.pdf}
              target="_blank"
              rel="noreferrer"
              className="text-red-500 hover:underline text-sm"
            >
              📄 Read
            </a>
          </div>
        </div>
      ))}
    </div>
  </section>
);

const WallMagazines = () => (
  <section
    id="wall-magazine"
    className="px-6 pb-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 
      dark:from-gray-900 dark:via-gray-950 dark:to-black scroll-mt-28"
  >
    <h2 className="text-5xl font-extrabold text-center mb-20 mt-10 text-gray-900 dark:text-white">
      Annual Wall Magazines
    </h2>

    <div className="max-w-7xl mx-auto flex flex-col gap-20">
      {wallMagazines.map((wm) => (
        <div
          key={wm.id}
          className="flex flex-col md:flex-row gap-10 bg-white/80 dark:bg-gray-800/60
          border border-gray-200 dark:border-gray-700 rounded-2xl shadow-xl p-6"
        >
          <div className="md:w-1/3 h-72 rounded-xl overflow-hidden">
            <img
              src={wm.image}
              alt={wm.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="md:w-2/3 flex flex-col">
            <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-1">
              {wm.title}
            </h3>

            <p className="text-green-600 dark:text-green-400 text-sm">
              {wm.theme}
            </p>

            <p className="text-red-500 dark:text-red-300 text-sm mt-1 mb-4">
              {wm.year}
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
              {wm.description}
            </p>

            <button className="mt-4 text-red-600 dark:text-red-400 hover:underline text-sm">
              📄 Read more…
            </button>
          </div>
        </div>
      ))}
    </div>
  </section>
);

//
// ---------------------- FINAL PAGE (SCROLL FIX ADDED) ----------------------
//

const Events = () => {
  const { hash } = useLocation();

  // Smooth scroll to section when hash changes
  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);

      if (element) {
        setTimeout(() => {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 80);
      }
    }
  }, [hash]);

  return (
    <main className="relative z-10">
      <InvitedTalks />
      <Artefacts />
      <WallMagazines />
    </main>
  );
};

export default Events;















