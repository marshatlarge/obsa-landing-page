import { Star } from "lucide-react";

const testimonials = [
  {
    name: "GJ Tengesdahl, Parent",
    text: "My son has been going to OBSA for 3 years now for winter instruction. I can say for a fact that for many years I searched for high end pitching instruction and there wasn’t any until I found OBSA. From the elite level mechanics breakdown, instruction, nutrition, weight training, and pitch shaping, his growth and development have been off the charts. Seeing him from an unranked player throwing in the mid 70’s, to a D1 committed junior throwing in the 90’s would not have been possible without Eric and his staff's help. The best arms in the area come out of OBSA!",
    rating: 5,
  },
  {
    name: "David Dunaway, Parent",
    text: "My Son Max has been working with OBSA for 17 months. The transformation has been incredible. Eric's Team has been focused on Max's mechanics and energy so that his added size and strength hasn't hurt his arm. Max just hit 90mph, starting to get some attention, and has just been accepted into IMG Academy for the 2023-24 school year. He is on-track and excited. This would not have been possible without the excellent Ohio BSA Team! Thanks guys!!!",
    rating: 5,
  },
  {
    name: "Greg Phillips, Parent",
    text: "Our boys have been going to OBSA for three years for pitching and catching training. The positive environment and the knowledge of the trainers are simply the best. We have seen positive results for both of our boys and they are being taught how to take care of their bodies to prevent injury. We recommend OBSA to all the players we know.",
    rating: 5,
  },
  {
    name: "TJ Brock, Athlete",
    text: "I started to work with Eric when I was in college throwing 92-95. Ever since then, I've learned a multitude of things from Eric. Not only did help me to throw harder, he helped me to get drafted in the sixth round by the Toronto Blue Jays by fine tuning my skills. I learned how to pitch and how to utilize and trust my pitch sequence. By end of the process, Eric was praising me, helping me to reach my goals and building my confidence. In the end, Eric had me sitting between 96 to 99 miles an hour in games and even reaching to 102 miles an hour. I highly recommend working with Eric! His love and passion for the game is a natural instinct. He is a great coach, mentor, leader and friend.",
    rating: 5,
  },
  {
    name: "Jason Clarke, Parent",
    text: "The team at OBSA is the absolute best. Coming off of injury I have seen the confidence in my son grow in just 3 months. He loves going to train with the guys. His hitting (Exit velo +10mph), pitching (+8mph), and fielding has improved in just a short period of time. Thanks to Eric and the team. The technology and science is the making the difference.",
    rating: 5,
  },
  {
    name: "Eddie Beck, Parent",
    text: "If you are looking for a team of trainers that have your athlete's best interest at heart, this organization provides it. Our experience with this program has been meaningful & impactful in numerous ways. The training is such that all the details are being looked at & nothing is just glossed over. Their system is a roadmap to getting your athlete to an elite level delivery motion to improve accuracy & velocity while always paying attention to & ensuring that arm health is top of mind. Trust & genuine care is obvious with the staff & their positive attitudes & instruction approach gets their students to a higher level. We appreciate how they do their job! Thanks Eric!",
    rating: 5,
  },
];

const TestimonialCard = ({
  testimonial,
}: {
  testimonial: (typeof testimonials)[0];
}) => (
  <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
    <div className="flex items-center mb-4">
      {[...Array(testimonial.rating)].map((_, i) => (
        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
      ))}
    </div>
    <p className="text-gray-300 mb-4">{testimonial.text}</p>
    <p className="text-gray-400 font-semibold">- {testimonial.name}</p>
  </div>
);

export default function Component() {
  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          What others have to say...
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.slice(0, 4).map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
          {testimonials.slice(4, 6).map((testimonial, index) => (
            <div key={index} className="hidden md:block">
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
