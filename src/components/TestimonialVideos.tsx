"use client";

import React from "react";

interface TestimonialVideoProps {
  src: string;
  poster: string; // Add poster prop for thumbnail
  name: string;
  affiliation: string;
  achievement: string;
}

const TestimonialVideo: React.FC<TestimonialVideoProps> = ({
  src,
  poster, // Use the poster prop
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
        poster={poster} // Set the poster here
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
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Train where the pros go. OBSA gets results.
        </h2>
        <p className="text-2xl text-center mb-12">
          Since 2020, 300+ OBSA clients have gone on to play at the next level
          including Major League Baseball, NCAA divisons 1, 2, and 3, NAIA, and
          JUCO baseball.
        </p>
        <h3 className="text-2xl font-bold text-center mb-8">
          Hear it from our athletes and parents.
        </h3>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <TestimonialVideo
            src="/videos/t2.mp4"
            name="Mychal Grogan"
            affiliation="Wright State University, RHP"
            achievement="Competed at the NAIA level and worked his way to division 1 baseball."
            poster="/mychal-poster.png"
          />
          <TestimonialVideo
            src="/videos/t1.mp4"
            name="Alex Caudill"
            affiliation="Lake Erie College, RHP"
            achievement="Went from averaging 88mph on his fastball to sitting 93-94mph in 2.5 months."
            poster="/alex-poster.png"
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
