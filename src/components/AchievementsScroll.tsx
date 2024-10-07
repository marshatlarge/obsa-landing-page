import React from "react";
import { motion } from "framer-motion";

const logos = [
  {
    src: "/placeholder.svg?text=Player+of+the+Year&w=200&h=100",
    alt: "Player of the Year",
  },
  {
    src: "/placeholder.svg?text=Ohio+State&w=100&h=100",
    alt: "Ohio State University",
  },
  {
    src: "/placeholder.svg?text=UK&w=100&h=100",
    alt: "University of Kentucky",
  },
  { src: "/placeholder.svg?text=P&w=100&h=100", alt: "Pittsburgh Pirates" },
  { src: "/placeholder.svg?text=C&w=100&h=100", alt: "Cincinnati" },
  { src: "/placeholder.svg?text=M&w=100&h=100", alt: "University of Michigan" },
];

export default function AchievementsScroll() {
  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Awards, scholarships, professional contracts—you name it, OBSA
          athletes have achieved it.
        </h2>
        <p className="text-xl text-center mb-12">
          We're proud to have played a small part in their success.
        </p>
        <div className="overflow-hidden mb-12">
          <motion.div
            className="flex"
            animate={{
              x: [0, -1920],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
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
        <div className="text-center">
          <button
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-md text-lg transition duration-300 ease-in-out transform hover:scale-105"
            onClick={() => console.log("Learn More clicked")}
          >
            Learn More About Our Athletes' Success
          </button>
        </div>
      </div>
    </section>
  );
}
