"use client";

import React from "react";
import { Zap, Shield, LineChart, RefreshCw } from "lucide-react";

const features = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Comprehensive Approach",
    description:
      "From biomechanics, to prep, to the mental game. We believe in improving every part of your performance.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Injury Prevention",
    description:
      "Stay in the game longer with our proactive approach to biomechanical optimization.",
  },
  {
    icon: <LineChart className="w-6 h-6" />,
    title: "Data-Driven Progress Tracking",
    description:
      "Understand where you are in your training process at all times with objective feedback.",
  },
  {
    icon: <RefreshCw className="w-6 h-6" />,
    title: "Individualized, Adaptive Training",
    description:
      "Your unique player development plan grows and adapts along with you.",
  },
];

export default function OBSAEdgeSection() {
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
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
          The OBSA Edge
        </h2>
        <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
          Setting new standards for baseball training and performance.
        </p>

        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6">
            Personalized Coaching Meets Innovative Technology
          </h3>
          <p className="mb-8">
            Our goal is simple: to enhance your game, extend your career, and
            ensure you step onto the field with confidence. Every athlete is
            different, and your training should be too. OBSA delivers a
            data-driven, personalized approach that unlocks your potential.
          </p>
          <p className="mb-8">
            Here, you'll gain access to the same insights and tools trusted by
            forward-thinking MLB organizations as well as coaches and trainers
            with decades of experience. We utilize ProPlayAI for biomechanical
            analysis, TrackMan for ball flight tracking, Baseball Cloud for
            advanced analytics, and more.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start">
                <div className="mr-4 bg-red-600 p-2 rounded-full">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">
                    {feature.title}
                  </h4>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <button
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-md text-lg transition duration-300 ease-in-out transform hover:scale-105"
            onClick={scrollToContactSection}
          >
            Experience OBSA Training
          </button>
        </div>
      </div>
    </section>
  );
}
