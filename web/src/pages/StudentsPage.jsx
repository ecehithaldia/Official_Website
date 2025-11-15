
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

// ---------------- ALUMNI SECTION ----------------

const Alumni = ({ theme }) => {
  const alumni = [
    { id: 1, name: "Mr. Sankar Mukhopadhyay", designation: "Engineer, ISRO (1998-2002)", image: "https://source.unsplash.com/400x400/?engineer,isro" },
    { id: 2, name: "Arindam Chatterjee", designation: "Senior Scientist, CSIR (1998-2002)", image: "https://source.unsplash.com/400x400/?scientist,csir" },
    { id: 3, name: "Dr. Tirtha Sankar Das", designation: "Professor, RCC Institute of Information Technology (1998-2002)", email: "", image: "https://source.unsplash.com/400x400/?professor,education" },
    { id: 4, name: "Dr. Aurpan Majumder", designation: "Assistant Professor, NIT Durgapur (1998-2002)", email: "", image: "https://source.unsplash.com/400x400/?nit,durgapur" },
    { id: 5, name: "Dr. Mousiki Kar", designation: "Assistant Professor, Heritage Institute of Technology (1999-2003)", email: "", image: "https://source.unsplash.com/400x400/?professor,woman" },
    { id: 6, name: "Mr. Souragni Ghosh", designation: "Founder & Director, WizAnimate Studios, India (2000-2004)", email: "", image: "https://source.unsplash.com/400x400/?entrepreneur,startup" },
    { id: 7, name: "Dr. Mousumi Roy", designation: "RF Application Engineer, GreenPeak Technologies, UK (2001-2005)", email: "", image: "https://source.unsplash.com/400x400/?engineer,uk" },
    { id: 8, name: "Dr. Sanjeev Kumar Metya", designation: "Assistant Professor, NIT Arunachal Pradesh (2001-2005)", email: "", image: "https://source.unsplash.com/400x400/?professor,teacher" },
    { id: 9, name: "Mr. Amit Biswas", designation: "Principal Layout Engineer, Microchip Semiconductors, Bengaluru (2004-2008)", email: "", image: "https://source.unsplash.com/400x400/?engineer,bengaluru" },
    { id: 10, name: "Mr. Shibaji Basu", designation: "Scientist, Bhabha Atomic Research Centre (BARC) (2004-2008)", email: "", image: "https://source.unsplash.com/400x400/?scientist,lab" },
    { id: 11, name: "Mr. Tamoghna Ojha", designation: "Assistant Professor, IIT (ISM) Dhanbad (2004-2008)", email: "", image: "https://source.unsplash.com/400x400/?professor,dhanbad" },
    { id: 12, name: "Mr. Suvra Sarkar", designation: "Process Integration Device Engineer, Micron Technology, Singapore (2005-2009)", email: "", image: "https://source.unsplash.com/400x400/?engineer,singapore" },
    { id: 13, name: "Anupam Bhandari", designation: "Senior Associate Consultant, Infosys Ltd. (2006-2010)", email: "", image: "https://source.unsplash.com/400x400/?consultant,infosys" },
    { id: 14, name: "Amartya Barman", designation: "Module Lead, Wipro (2006-2010)", email: "", image: "https://source.unsplash.com/400x400/?software,lead" },
    { id: 15, name: "Prakash Mandal", designation: "Senior Design Engineer, Mirafra Technologies (2006-2010)", email: "", image: "https://source.unsplash.com/400x400/?vlsi,chip" },
    { id: 16, name: "Rakesh Ranjan", designation: "Design Engineer, Freescale Semiconductor (2006-2010)", email: "", image: "https://source.unsplash.com/400x400/?semiconductor,design" },
    { id: 17, name: "Uttam Kumar", designation: "Senior Physical Design Engineer, AMD (2006-2010)", email: "", image: "https://source.unsplash.com/400x400/?amd,engineer" },
    { id: 18, name: "Avishek Datta", designation: "System Software Engineer II, HP Enterprise R&D (2006-2010)", email: "", image: "https://source.unsplash.com/400x400/?developer,software" },
    { id: 19, name: "Sk Samim Akhtar", designation: "Classification Analyst, Rockwell Automation (2006-2010)", email: "", image: "https://source.unsplash.com/400x400/?automation,engineer" },
    { id: 20, name: "Sourav Naskar", designation: "VLSI Layout Engineer, Wipro Technologies (2006-2010)", email: "", image: "https://source.unsplash.com/400x400/?vlsi,layout" },
    { id: 21, name: "Partha Bhattacharya", designation: "Equipment Maintenance Specialist, GE Power India Ltd (2006-2010)", email: "", image: "https://source.unsplash.com/400x400/?engineer,power" },
    { id: 22, name: "Shankar Shrivats", designation: "Senior Security Test Consultant, ANZ Cyber Security Operations (2006-2010)", email: "", image: "https://source.unsplash.com/400x400/?cyber,security" },
    { id: 23, name: "Siddhartha Dey", designation: "Solution Integrator, Ericsson India Global Pvt. Ltd. (2006-2010)", email: "", image: "https://source.unsplash.com/400x400/?network,telecom" },
    { id: 24, name: "Gajendra Kumar", designation: "Design Engineer, Bit Mapper Integ. Technologies Pvt. Ltd. (2006-2010)", email: "", image: "https://source.unsplash.com/400x400/?hardware,chip" },
    { id: 25, name: "Biplab Pal", designation: "Senior Engineer, Altran Technology India Pvt. Ltd. (2006-2010)", email: "", image: "https://source.unsplash.com/400x400/?engineer,altran" },
    { id: 26, name: "Arghya Das", designation: "Associate Consultant, Infosys BPO (2006-2010)", email: "", image: "https://source.unsplash.com/400x400/?consultant,bpo" },
    { id: 27, name: "Rahul Saha", designation: "Marketing Manager, Bharti Airtel Ltd. (2006-2010)", email: "", image: "https://source.unsplash.com/400x400/?marketing,manager" },
    { id: 28, name: "Souvik Tripathy", designation: "Business Development Manager, Aarna IT Solutions Pvt. Ltd. (2006-2010)", email: "", image: "https://source.unsplash.com/400x400/?business,development" },
    { id: 29, name: "Riya Mazumder", designation: "Solution Integrator, Ericsson India Global Services Pvt. Ltd. (2006-2010)", email: "", image: "https://source.unsplash.com/400x400/?woman,engineer" },
    { id: 30, name: "Sougata Banerjee", designation: "Lead Engineer - Telecom & Security Systems, L&T (2006-2010)", email: "", image: "https://source.unsplash.com/400x400/?telecom,engineer" },
    { id: 31, name: "Subhranil Naskar", designation: "Area Head, Pidilite Industries Ltd. (2006-2010)", email: "", image: "https://source.unsplash.com/400x400/?manager,industry" },
    { id: 32, name: "Sumit Bera", designation: "Application Analyst, Boeing (2006-2010)", email: "", image: "https://source.unsplash.com/400x400/?boeing,engineer" },
    { id: 33, name: "Mr. Rajdeep Chakraborty", designation: "Associate Lead, HR, Infosys Technology (2006-2010)", email: "", image: "https://source.unsplash.com/400x400/?hr,infosys" },
    { id: 34, name: "Mr. Gourab Ghanty", designation: "Hardware Engineer, Intel Corporation (2006-2010)", email: "", image: "https://source.unsplash.com/400x400/?hardware,intel" },
    { id: 35, name: "Mr. Saikat Karmakar", designation: "Engineer, DRDO (2006-2010)", email: "", image: "https://source.unsplash.com/400x400/?drdo,engineer" },
    { id: 36, name: "Mr. Suman Mondal", designation: "Senior Section Engineer, Chittaranjan Locomotive Works (2006-2010)", email: "", image: "https://source.unsplash.com/400x400/?locomotive,engineer" },
    { id: 37, name: "Mr. Binayak Roy", designation: "Senior Unix & BigData System Consultant, CTS (2006-2010)", email: "", image: "https://source.unsplash.com/400x400/?bigdata,unix" },
    { id: 38, name: "Subhajit Das", designation: "Strategy Analyst, Accenture, MBA IIM Calcutta (2006-2010)", email: "", image: "https://source.unsplash.com/400x400/?analyst,accenture" },
    { id: 39, name: "Atanu Mondal", designation: "Senior Analyst, Accenture, Bangalore (2006-2010)", email: "", image: "https://source.unsplash.com/400x400/?analyst,bangalore" },
    { id: 40, name: "Ms. Priya Adhikary", designation: "Wealth Manager, ICICI Bank (2007-2011)", email: "", image: "https://source.unsplash.com/400x400/?bank,finance" },
    { id: 41, name: "Snehashis Paul", designation: "Sr. Technical Consultant, Fujitsu Consulting India (2007-2011)", email: "", image: "https://source.unsplash.com/400x400/?consultant,tech" },
    { id: 42, name: "Mainak Saha", designation: "Assistant Professor, IEM College of Engineering, Kolkata (2007-2011)", email: "", image: "https://source.unsplash.com/400x400/?professor,kolkata" },
    { id: 43, name: "Mr. Sudip Saha", designation: "Analog Layout Engineer, Broadcom (2008-2012)", email: "", image: "https://source.unsplash.com/400x400/?analog,engineer" },
    { id: 44, name: "Mr. Rajesh Kumar", designation: "Junior Manager, Steel Authority of India Ltd. (2008-2012)", email: "", image: "https://source.unsplash.com/400x400/?steel,manager" },
    { id: 45, name: "Anurag Patra", designation: "Scientist, ISRO (2008-2012)", email: "", image: "https://source.unsplash.com/400x400/?scientist,isro" },
    { id: 46, name: "Brijita Santra", designation: "Cloud Platform Engineer, Dell EMC (2009-2013)", email: "", image: "https://source.unsplash.com/400x400/?cloud,engineer" },
    { id: 47, name: "Moitri Sutradhar", designation: "M.Tech, IIT Kanpur (2009-2013)", email: "", image: "https://source.unsplash.com/400x400/?student,iit" },
    { id: 48, name: "Mr. Suvadip Paul", designation: "Senior System Engineer, Infosys (2009-2013)", email: "", image: "https://source.unsplash.com/400x400/?system,engineer" },
    { id: 49, name: "Moumita Basak", designation: "Project Engineer, Wipro (2009-2013)", email: "", image: "https://source.unsplash.com/400x400/?project,engineer" },
    { id: 50, name: "Mr. Agnirudra Sikdar", designation: "Big Data Consultant, Metreta s.r.l. Telecommunications, Italy (2009-2013)", email: "", image: "https://source.unsplash.com/400x400/?consultant,italy" },
    { id: 51, name: "Mr. Anindya Banerjee", designation: "System Administrator, Infosys (2009-2013)", email: "", image: "https://source.unsplash.com/400x400/?admin,infosys" },
    { id: 52, name: "Anirban Banerjee", designation: "Electronics & Telecom Engineer, BSNL (2009-2013)", email: "", image: "https://source.unsplash.com/400x400/?telecom,engineer" },
    { id: 53, name: "Mr. Sachin Sarawgi", designation: "Senior Software Developer, Accion Labs (2010-2014)", email: "", image: "https://source.unsplash.com/400x400/?developer,software" },
    { id: 54, name: "Mr. Ritwik Das", designation: "Pursuing M.Sc., Nanyang Technological University, Singapore (2010-2014)", email: "", image: "https://source.unsplash.com/400x400/?student,university" },
    { id: 55, name: "Abhisek Kole", designation: "M.Sc. Electronics, NOVITAS, Nanyang Tech University (2010-2014)", email: "", image: "https://source.unsplash.com/400x400/?electronics,student" },
     { id: 56, name: "Shashank Anurag", designation: "CDAC Trained VLSI Design/Verification Engineer, TCS (2010-2014)", email: "", image: "https://source.unsplash.com/400x400/?vlsi,tcs" },
    { id: 57, name: "Akash Adhikary", designation: "Data Engineer, Thoughtspot (2015-2019)", image: "https://source.unsplash.com/400x400/?data,engineer" },
  ];

  return (
    <section
      id="alumni"
      className="p-6 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 scroll-mt-24"
    >
      <h2
        className="text-5xl md:text-6xl font-extrabold mb-12 text-center tracking-wide text-gray-900 dark:text-white mt-36"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        Our Alumni Circle
      </h2>

      <BentoGrid className="mt-16 max-w-6xl w-full mx-auto">
        {alumni.map((f) => (
          <BentoGridItem
            key={f.id}
            title={f.name}
            description={
              <p className="text-gray-700 dark:text-gray-300">
                {f.designation}
              </p>
            }
            className="relative overflow-hidden rounded-xl group"
            header={
              <div
                className="absolute inset-0 w-full h-full bg-center bg-cover"
                style={{ backgroundImage: `url(${f.image})` }}
              ></div>
            }
          />
        ))}
      </BentoGrid>
    </section>
  );
};

// ---------------- INDUSTRIAL VISITS SECTION ----------------

const visits = [
  {
    id: 1,
    title: "ONE-DAY INDUSTRIAL VISIT AT VARIABLE ENERGY CYCLOTRON CENTRE (VECC), KOLKATA",
    place: "Variable Energy Cyclotron Centre (VECC), Bidhannagar, Kolkata",
    date: "12-Mar-2025",
    image: "/images/visit1.png",
    description:
      "The Department of Electronics and Communication organized the industrial visit to the Variable Energy Cyclotron Centre (VECC), Bidhannagar, Kolkata, under the Department of Atomic Energy, Government of India. The purpose of this visit was to provide students with practical exposure to the working principles of cyclotrons and experimental physics research. By witnessing the real-world applications of particle accelerators, students gained deeper insights into advanced nuclear research and high-energy physics. The visit also provided an opportunity to interact with leading scientists and researchers in the field, fostering curiosity and encouraging students to consider careers in scientific research and accelerator technology. This report highlights the key observations, technical...",
  },
  {
    id: 2,
    title: "Industrial Visit at SAMEER, Kolkata",
    place: "SAMEER, Ministry of Electronics & IT",
    date: "29-Nov-2024",
    image: "/images/visit2.png",
    description:
      "The Department of Electronics and Communication organized an industrial visit to the Society for Applied Microwave Electronics Engineering & Research (SAMEER), Kolkata. SAMEER is an autonomous R&D institution under the Ministry of Electronics and Information Technology, Government of India, engaged in advanced research in the field of microwave, RF, and millimeterwave electronics. This visit aimed to provide students with exposure to real-time high-frequency measurement tools, advanced laboratory facilities, and SAMEER's ongoing contributions in defense, space, and healthcare technology sectors.",
  },
  {
    id: 3,
    title: "ONE-DAY INDUSTRIAL VISIT AT INDIAN COAST GUARD, HALDIA",
    place: "Indian Coast Guard, Haldia",
    date: "21-Nov-2024",
    image: "/images/visit3.png",
    description:
      "The Indian Coast Guard (ICG) plays a crucial role in ensuring the safety and security of India's maritime interests. As an armed force under the Ministry of Defence, it is responsible for safeguarding India's vast coastline, protecting the marine environment, and enforcing maritime laws. The student visit to the Indian Coast Guard facility was organized to offer an educational experience and a deeper insight into the operational aspects of maritime security, environmental protection, and disaster management. The visit provided an opportunity for students to understand the Coast Guard's infrastructure, technology, and the diverse roles it plays in national defence and public safety. It was an interactive and educational experience aimed at raising awareness about maritime security and the...",
  },
  {
    id: 4,
    title: "THREE-DAYS INDUSTRIAL EXPOSURE AT HYLAND SOFTWARE",
    place: "Hyland Software, DLF IT Park, Newtown, Kolkata",
    date: "06-May-2024",
    image: "/images/visit4.png",
    description:
      "The 3-day Industry Exposure Program aimed to bridge the gap between academic learning and industry practices. Each day ran from 12 PM to 4 PM, offering hands-on insights into the company's operations and culture. Day 1 began with an HR session by Ms. Angsuka Chakraborty, introducing the company's structure and the program's goals. Mr. Kaushik Natua led an Ice-Breaking Session that included self-introductions, company insights, and a fun IQ test. We then interacted with the Tech-Outreach Committee and concluded with an office tour by Mr. Neelabhra Bhattacharya. Day 2 offered the most in-depth engagement. Students were divided into groups to interact with engineers, gaining first-hand insights into roles like Developer and Tester. Mr. Soumyo Sikder and Mr. Subrata Roychowdhury...",
  },
];

const IndustrialVisits = () => {
  return (
    <section
      id="industrial-visits"
      className="px-6 pb-24 bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-black scroll-mt-24"
    >
      <h2
        className="text-5xl font-extrabold text-center mb-16 text-gray-900 dark:text-white mt-20"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Industrial Visits
      </h2>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
        {visits.map((item, index) => (
          <div
            key={item.id}
            className="bg-white/80 dark:bg-gray-800/60 backdrop-blur-xl border border-gray-200 dark:border-gray-700 rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row hover:shadow-2xl transition-all duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.4 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="md:w-1/2 h-64 md:h-auto">
              <img
                src={item.image}
                className="w-full h-full object-cover"
                alt="visit"
              />
            </div>

            <div className="md:w-1/2 p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white leading-tight mb-2">
                  {item.title}
                </h3>

                <p className="text-green-600 dark:text-green-400 font-medium text-sm mb-1">
                  {item.place}
                </p>

                <p className="text-blue-600 dark:text-blue-300 font-semibold text-sm mb-4">
                  {item.date}
                </p>

                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  {item.description}
                </p>
              </div>

              <button className="mt-4 inline-flex items-center gap-2 text-red-600 dark:text-red-400 font-semibold hover:underline text-sm">
                📄 Read more…
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// ---------------- PAGE EXPORT ----------------

const StudentsPage = ({ theme }) => {
  return (
    <main className="relative z-10">
      <Alumni theme={theme} />
      <IndustrialVisits />
    </main>
  );
};

export default StudentsPage;
