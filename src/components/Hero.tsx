import React from "react";

export default function Hero() {
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
          The Season Is Just Around <br className="hidden sm:inline" />
          the Corner!
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl mb-8 max-w-3xl mx-auto">
          Don't wait to improve your game. Start training with OBSA today and be
          ready to dominate on the field!
        </p>
        <button
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-md text-lg transition duration-300 ease-in-out transform hover:scale-105"
          onClick={() => console.log("Start training clicked")}
        >
          Start Your Training Now
        </button>
      </div>
    </div>
  );
}
