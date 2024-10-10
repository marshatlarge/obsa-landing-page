import React from "react";
import { motion } from "framer-motion";

const logos = [
  {
    src: "/gatorade.png",
    alt: "Player of the Year",
  },
  {
    src: "/bluejays.png",
    alt: "Toronto Blue Jays",
  },

  {
    src: "/ohio-st.png",
    alt: "Ohio State University",
  },
  {
    src: "/uk.png",
    alt: "University of Kentucky",
  },
  { src: "/pirates.png", alt: "Pittsburgh Pirates" },
  { src: "/cincy.png", alt: "Cincinnati" },
  { src: "/mich.png", alt: "University of Michigan" },
  { src: "/braves.png", alt: "Braves" },

  { src: "/angels.png", alt: "Angels" },
  { src: "/sox.png", alt: "Red Sox" },

  { src: "/yanks.png", alt: "Yankees" },
  { src: "/bgu.png", alt: "Bowling Green University" },

  { src: "/rebs.png", alt: "Ole Miss" },
  { src: "/xavier.png", alt: "Xavier" },
  { src: "/nats.png", alt: "Nationals" },

  { src: "/dodgers.png", alt: "Dodgers" },
  { src: "/rockies.png", alt: "Rockies" },
  { src: "/vols.png", alt: "Vols" },
  { src: "/lsu.png", alt: "LSU" },
  {
    src: "/gatorade.png",
    alt: "Player of the Year",
  },
  {
    src: "/bluejays.png",
    alt: "Toronto Blue Jays",
  },

  {
    src: "/ohio-st.png",
    alt: "Ohio State University",
  },
  {
    src: "/uk.png",
    alt: "University of Kentucky",
  },
  { src: "/pirates.png", alt: "Pittsburgh Pirates" },
  { src: "/cincy.png", alt: "Cincinnati" },
  { src: "/mich.png", alt: "University of Michigan" },
];

export default function AchievementsScroll() {
  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Train where the pros go. You name it, OBSA athletes have achieved it.
        </h2>

        <div className="overflow-hidden mb-12 my-10">
          <motion.div
            className="flex gap-10"
            animate={{
              x: [0, -1920],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {[...logos, ...logos].map((logo, index) => (
              <div key={index} className="flex-shrink-0 mx-4">
                <img src={logo.src} alt={logo.alt} className="h-20 w-auto" />
              </div>
            ))}
          </motion.div>
        </div>
        <p className="text-2xl text-center mb-12">
          We're proud to have played a small part in their success.
        </p>
      </div>
    </section>
  );
}
