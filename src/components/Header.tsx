"use client";

import React from "react";
import { Phone, Mail } from "lucide-react";

export default function Header() {
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-black text-white">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center flex-col space-y-2 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
          <div className="text-2xl font-bold">OBSA</div>
          <div className="flex flex-col items-center sm:items-end">
            <div className="flex flex-row items-center space-x-4 mb-2">
              <button
                onClick={() => (window.location.href = "tel:513-289-3295")}
                className="flex items-center bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md justify-center text-sm"
              >
                <Phone className="w-4 h-4 mr-2" />
                513-289-3295
              </button>
              <button
                onClick={scrollToContactSection}
                className="flex items-center bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md justify-center text-sm"
              >
                <Mail className="w-4 h-4 mr-2" />
                Email
              </button>
            </div>
            <div className="text-center sm:text-right text-xs sm:text-sm">
              Call or email to learn more and schedule your comprehensive player
              evaluation.
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
