"use client";

import React from "react";

export default function Hero() {
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
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <img
        src="/hero-bg.png"
        alt="Baseball analytics background"
        className="absolute max-w-5xl object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
          Take advantage of this valuable time.
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl mb-8 max-w-3xl mx-auto">
          Baseball season will be here before you know it. Let's improve your
          game. Come train at one of Ohio Baseball Science Academy's three
          cutting edge locations.
        </p>
        <button
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-md text-lg transition duration-300 ease-in-out transform hover:scale-105"
          onClick={scrollToContactSection}
        >
          Get started
        </button>
      </div>
    </div>
  );
}
