import React from "react";
import { Phone } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="bg-black text-white py-16" id="contact-section">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
          Let's get started taking your game to the next level.
        </h2>
        <div className="text-center mb-8">
          <p className="text-lg mb-2">
            Our services include pitching, hitting, strength training, and
            catching, with both in-house and remote pitching training options
            available. Schedule your evaluation today.
          </p>
        </div>
        <div className="flex justify-center mb-8">
          <a
            href="tel:513-289-3295"
            className="flex items-center bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-md text-lg transition duration-300 ease-in-out transform hover:scale-105"
          >
            <Phone className="w-5 h-5 mr-2" />
            513-289-3295
          </a>
        </div>
        <div className="max-w-2xl mx-auto bg-red-600 rounded-lg p-4 sm:p-8">
          <h3 className="text-2xl font-bold mb-4">
            Reach out for your comprehensive player evaluation.
          </h3>

          <div
            className="mb-8 relative overflow-hidden"
            style={{ height: "1070px" }}
          >
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSd3ZQ67LR1uqOQjy72r1MQT19etsQ1Vbaq4i6aV8hgEqcXxaw/viewform?embedded=true"
              className="absolute top-0 left-0 w-full h-full border-0"
              title="Contact Form"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
