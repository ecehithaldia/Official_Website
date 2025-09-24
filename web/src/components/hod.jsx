import React from "react";

export function Hod() {
  return (
    <section className="relative py-16 px-6 md:px-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 rounded-3xl shadow-2xl overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Profile Image */}
        <div className="flex justify-center lg:justify-center">
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/15851423/pexels-photo-15851423.jpeg"
              alt="HOD Profile"
              className="rounded-3xl shadow-2xl mt-120 w-[40rem] h-[40rem] object-cover bg-gray-200 dark:bg-gray-800 border-8 border-white dark:border-gray-900"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-500/20 dark:bg-blue-400/20 blur-3xl rounded-full"></div>
          </div>
        </div>

        {/* Message Body */}
        <div className="max-w-3xl">
          <h2 className="font-extrabold text-4xl md:text-5xl text-gray-900 dark:text-white leading-snug mb-4">
            Message from the Head of the Department
          </h2>
          <h3 className="font-semibold text-xl md:text-2xl text-amber-500 dark:text-amber-500 mb-2">
            Department of Electronics & Communication Engineering
          </h3>
          <h6
            className= "text-gray-800 dark:text-gray-300  font-medium text-lg mb-8 inline-block"
          >
            Haldia Institute of Technology
          </h6>

          {/* Full Message */}
          <div className="prose prose-lg dark:prose-invert max-w-none leading-relaxed text-gray-700 dark:text-gray-300 space-y-6">
            <p>
              Warm Greetings to Everyone,
            </p>
            <p>
              Engineering is the foundation of innovation, and Electronics & Communication Engineering (ECE) stands at the forefront of this ever-evolving field. The discipline of ECE embodies the essence of continuous learning and creativity, driving groundbreaking advancements that shape society. This field bridges hardware and software, covering a vast spectrum of domains, including Communication Systems, VLSI Design, Embedded Systems, Digital Signal Processing, Control Systems, Electromagnetic Fields and Waves, Antennas, Microwaves and Radars, Microprocessors and Microcontrollers, IoT, and more. These technologies collectively contribute to the development of safer, more efficient innovations, such as automobiles, aircraft, smartphones, and surgical robots.
            </p>
            <p>
              Our department fosters a dynamic learning environment, blending academic excellence with hands-on experience. With a team of highly qualified faculty, including experienced Ph.D. professors and dedicated young researchers, we ensure that students receive a rich and research-driven education. Faculty members actively contribute to scholarly research, publishing papers in reputed international and national journals, with some securing patents for their innovations.
            </p>
            <p>
              State-of-the-art infrastructure further enhances the learning experience. Our department is equipped with advanced laboratories, including the PCB Lab, Robotics Lab, IoT Lab, HIT-CDAC Innovation Centre, and VLSI Labs, along with a dedicated research center featuring licensed software. These facilities support faculty research and student projects, enabling innovation beyond the prescribed university curriculum. To bridge the gap between academia and industry, we regularly organize skill development workshops, guest lectures by eminent academicians and industry experts, and technical seminars.
            </p>
            <p>
              Our department maintains strong industry linkages through MoUs with professional bodies such as IEEE, MTTS Society, IETE, and IEI (India), along with collaborations with leading industries. We also conduct international conferences, symposiums, workshops, seminars, and model competitions throughout the year, providing students with a platform to showcase their technical prowess. Regular industrial visits and internship opportunities further prepare our students for the ever-evolving industry landscape.
            </p>
            <p>
              Graduates from our department have excelled in diverse careers, securing positions in top industries and pursuing higher education at prestigious institutions, including IITs. With the seamless integration of hardware and software knowledge, ECE graduates have boundless opportunities in both academia and industry. Our strong alumni network, spread across India and abroad, is a testament to the quality of education imparted here.
            </p>
            <p>
              I extend my sincere gratitude to the management for their unwavering support in providing world-class facilities and fostering a culture of academic excellence.
            </p>
            <p>
              In summary, a journey in ECE at Haldia Institute of Technology promises a fulfilling and successful career ahead.
            </p>
          </div>

          {/* Signature */}
          <div className="mt-12 space-y-1">
            <div className="font-bold text-xl md:text-2xl text-gray-900 dark:text-white">Best Wishes,</div>
            <div className="font-extrabold text-2xl md:text-3xl text-gray-900 dark:text-white">Prof. (Dr.) Chanchal Kumar De</div>
            <div className="font-medium text-lg md:text-xl text-gray-800 dark:text-gray-300">
              Head of the Department<br />
              Electronics & Communication Engineering<br />
              Haldia Institute of Technology
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


