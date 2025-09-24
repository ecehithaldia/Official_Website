import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid.jsx";

export function Events({ teachers }) {
  return (
    <section
      id="events"
      className="p-6 bg-white dark:bg-gray-800 snap-start scroll-mt-24"
    >
      <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-center tracking-wide text-gray-900 dark:text-white mt-6">
        EVENTS
      </h2>

      <BentoGrid className="mt-6">
        {teachers.map((teacher) => (
          <BentoGridItem
            key={`events-${teacher.id}`}
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
                <div className="absolute inset-0"></div>
              </div>
            }
          />
        ))}
      </BentoGrid>
    </section>
  );
}
