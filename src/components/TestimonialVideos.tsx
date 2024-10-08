"use client";

import React from "react";

interface TestimonialVideoProps {
  src: string;
  name: string;
  affiliation: string;
  achievement: string;
}

const TestimonialVideo: React.FC<TestimonialVideoProps> = ({
  src,
  name,
  affiliation,
  achievement,
}) => {
  return (
    <div className="relative rounded-lg overflow-hidden">
      <video
        className="w-full h-80 md:h-auto"
        src={src}
        controls
        preload="metadata"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-transparent text-white p-4">
        <h3 className="font-bold text-lg">{name}</h3>
        <p className="text-red-400">{affiliation}</p>
        <p className="text-sm mt-1">{achievement}</p>
      </div>
    </div>
  );
};

export default function TestimonialVideos() {
  const scrollToContactSection = () => {
    const contactSection = document.getElementById("contact-section");
    if (contactSection) {
      const startPosition = window.pageYOffset;
      const targetPosition =
        contactSection.getBoundingClientRect().top + window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 2000; // 2 seconds for a slower scroll

      let start: number | null = null;

      function step(timestamp: number) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const percentage = Math.min(progress / duration, 1);

        window.scrollTo(
          0,
          startPosition + distance * easeInOutCubic(percentage)
        );

        if (progress < duration) {
          window.requestAnimationFrame(step);
        }
      }

      window.requestAnimationFrame(step);
    }
  };

  // Easing function for smoother scroll
  const easeInOutCubic = (t: number) =>
    t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;

  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
          3 out of 7 athletes who train with us for 6+ months end up playing at
          the college level or higher.
        </h2>
        <p className="text-xl text-center mb-12">
          8 out of 10 our athletes see a 5.4mph increase in velocity in their
          first 3 months training.
        </p>
        <h3 className="text-2xl font-bold text-center mb-8">
          Here's what they think of OBSA.
        </h3>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <TestimonialVideo
            src="/videos/t2.mp4"
            name="Mychal Grogan"
            affiliation="Wright State University, RHP"
            achievement="Competed at the NAIA level and worked his way to division 1 baseball."
          />
          <TestimonialVideo
            src="/videos/t1.mp4"
            name="Alex Caudill"
            affiliation="Lake Erie College, RHP"
            achievement="Went from averaging 88mph on his fastball to sitting 94-94mph in 2.5 months."
          />
        </div>
        <div className="text-center">
          <button
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-md text-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-red-300"
            onClick={scrollToContactSection}
          >
            Join them
          </button>
        </div>
      </div>
    </section>
  );
}
