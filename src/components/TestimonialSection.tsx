"use client";

import React, { useCallback } from "react";
import { Star } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Eddie Beck",
    text: "If you are looking for a team of trainers that have your athlete's best interest at heart, this organization provides it. Our experience with this program has been meaningful & impactful in numerous ways. The training is such that all the details are being looked at & nothing is just glossed over. Their system is a roadmap to getting your athlete to an elite level delivery motion to improve accuracy & velocity while always paying attention to & ensuring that arm health is top of mind. Trust & genuine care is obvious with the staff & their positive attitudes & instruction approach gets their students to a higher level. We appreciate how they do their job! Thanks Eric!",
    rating: 5,
  },
  {
    name: "Jason Clarke",
    text: "The team at OBSA is the absolute best. Coming off of injury I have seen the confidence in my son grow in just 3 months. He loves going to train with the guys. His hitting (Exit velo +10mph), pitching (+8mph), and fielding has improved in just a short period of time. Thanks to Eric and the team. The technology and science is the making the difference.",
    rating: 5,
  },
  {
    name: "David Dunaway",
    text: "My Son Max has been working with OBSA for 17 months. The transformation has been incredible. Eric's Team has been focused on Max's mechanics and energy so that his added size and strength hasn't hurt his arm. Max just hit 90mph, starting to get some attention, and has just been accepted into IMG Academy for the 2023-24 school year. He is on-track and excited. This would not have been possible without the excellent Ohio BSA Team! Thanks guys!!!",
    rating: 5,
  },
  {
    name: "Greg Phillips",
    text: "Our boys have been going to OBSA for three years for pitching and catching training. The positive environment and the knowledge of the trainers are simply the best. We have seen positive results for both of our boys and they are being taught how to take care of their bodies to prevent injury. We recommend OBSA to all the players we know.",
    rating: 5,
  },
  {
    name: "TJ Brock",
    text: "I started to work with Eric when I was in college throwing 92-95. Ever since then, I've learned a multitude of things from Eric. Not only did help me to throw harder, he helped me to get drafted in the sixth round by the Toronto Blue Jays by fine tuning my skills. I learned how to pitch and how to utilize and trust my pitch sequence. By end of the process, Eric was praising me, helping me to reach my goals and building my confidence. In the end, Eric had me sitting between 96 to 99 miles an hour in games and even reaching to 102 miles an hour. I highly recommend working with Eric! His love and passion for the game is a natural instinct. He is a great coach, mentor, leader and friend.",
    rating: 5,
  },
  {
    name: "TJ Johnson",
    text: "My son Cole started with OBSA 5 months ago for a few throwing mechanics tweaks and to improve infield velo. Eric and thr OBSA team do some great things using proven methods and the latest tech to get these boys where they wanna go. We have been very impressed with how far he has came in 5 months. Velo is well above where it started, accuracy and confidence on the field as well as the mound has changed dramatically. Would highly recommend OBSA for your player.",
    rating: 5,
  },
];

const TestimonialCard: React.FC<{ testimonial: (typeof testimonials)[0] }> = ({
  testimonial,
}) => (
  <div className="bg-gray-800 p-6 rounded-lg shadow-lg h-full flex flex-col">
    <div className="flex items-center mb-4">
      {[...Array(testimonial.rating)].map((_, i) => (
        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
      ))}
    </div>
    <p className="text-gray-300 mb-4 flex-grow">{testimonial.text}</p>
    <p className="text-gray-400 font-semibold">- {testimonial.name}</p>
  </div>
);

export default function TestimonialSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          And if you wanted to hear more...
        </h2>
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] md:flex-[0_0_33.33%] px-4"
                >
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-8 gap-4">
          <Button
            variant="outline"
            size="icon"
            className="bg-gray-800 text-white hover:bg-gray-700"
            onClick={scrollPrev}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
            <span className="sr-only">Previous slide</span>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="bg-gray-800 text-white hover:bg-gray-700"
            onClick={scrollNext}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
            <span className="sr-only">Next slide</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
