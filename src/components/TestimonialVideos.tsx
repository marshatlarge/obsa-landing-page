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
      <video className="w-full h-auto" src={src} controls preload="metadata" />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-transparent text-white p-4">
        <h3 className="font-bold text-lg">{name}</h3>
        <p className="text-red-400">{affiliation}</p>
        <p className="text-sm mt-1">{achievement}</p>
      </div>
    </div>
  );
};

export default function TestimonialVideos() {
  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          90% of athletes see an 8.4mph increase in velocity
        </h2>
        <p className="text-xl text-center mb-12">
          4 out of 5 athletes who train with us have seen a 4mph increase in
          velocity and playing time
        </p>
        <h3 className="text-3xl font-bold text-center mb-8">
          Hear It From Our Athletes
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
            onClick={() => console.log("Learn More clicked")}
          >
            Learn More About Our Athletes&apos; Success
          </button>
        </div>
      </div>
    </section>
  );
}
