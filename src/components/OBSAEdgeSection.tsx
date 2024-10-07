import React from "react";
import { Zap, Shield, LineChart, RefreshCw } from "lucide-react";

const technologies = [
  { name: "Trackman", icon: "/placeholder.svg?text=Trackman&w=100&h=100" },
  { name: "Rapsodo", icon: "/placeholder.svg?text=Rapsodo&w=100&h=100" },
  { name: "Driveline", icon: "/placeholder.svg?text=Driveline&w=100&h=100" },
  {
    name: "Biomechanics Analysis",
    icon: "/placeholder.svg?text=Biomechanics&w=100&h=100",
  },
  {
    name: "Force Plates",
    icon: "/placeholder.svg?text=Force+Plates&w=100&h=100",
  },
  {
    name: "High-Speed Cameras",
    icon: "/placeholder.svg?text=High-Speed+Cameras&w=100&h=100",
  },
];

const features = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Precision Performance Enhancement",
    description:
      "Unlock your full potential with our targeted skill development programs.",
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
      "Witness your growth with our precise, objective measurement systems.",
  },
  {
    icon: <RefreshCw className="w-6 h-6" />,
    title: "Adaptive Training",
    description:
      "Experience a dynamic program that evolves with your progress in real-time.",
  },
];

export default function OBSAEdgeSection() {
  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
          The OBSA Edge: Revolutionizing Baseball Training
        </h2>
        <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
          At OBSA, we're not just training athletes; we're engineering the
          future of baseball excellence.
        </p>

        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6">
            Cutting-Edge Technology Meets Personalized Coaching
          </h3>
          <p className="mb-4">
            Imagine a training regiment as unique to you as your DNA. That's the
            OBSA experience. We harness the power of advanced analytics and
            state-of-the-art biomechanics analysis to decode your body's
            potential and sculpt a training program that's exclusively yours.
          </p>
          <p className="mb-8">
            Our mission? To catapult your performance to unprecedented heights
            while fortifying your body against the rigors of the game. It's not
            just about playing better; it's about playing smarter, longer, and
            with unwavering confidence.
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

        <div>
          <h3 className="text-2xl font-bold text-center mb-8">
            Access to technology that's trusted and used by MLB organizations.
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-12">
            {technologies.map((tech, index) => (
              <div key={index} className="flex flex-col items-center">
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-24 h-24 mb-4"
                />
                <p className="text-center">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <button
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-md text-lg transition duration-300 ease-in-out transform hover:scale-105"
            onClick={() =>
              console.log("Experience Our Tech-Driven Training clicked")
            }
          >
            Experience Our Tech-Driven Training
          </button>
        </div>
      </div>
    </section>
  );
}
