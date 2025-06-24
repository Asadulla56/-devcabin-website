import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";

const reviews = [
  {
    name: " Mubassir Bappi",
    role: "Founder & CEO",
    img: "https://i.ibb.co/7Jfgpzkm/suiteb.jpg",
  },
  {
    name: " Azharul Haque",
    role: "Co-Founder & COO",
    img: "https://i.ibb.co.com/d42pfkvk/Whats-App-Image-2025-04-25-at-18-34-06-caa19e8b.jpg",
  },
  {
    name: "  Asadullah",
    role: " Lead Front-End Developer",
    img: "https://i.ibb.co.com/t6qbzJV/Screenshot-2025-04-25-120100.png",
  },
  {
    name: "Md Tariqul Islam ",
    role: "Front End Developer",
    img: "https://i.ibb.co/qLM0tJSb/IMG-20250501-225320-Md-Tariqul-Islam.png",
  },
  {
    name: "Md Ridoy Hasan Naeem",
    role: "UI/UX & QA Executive., ",
    img: "https://i.ibb.co/YFWwrwHx/20241211-223347-Ridoy-Hassan.jpg",
  },
 
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, role }) => {
  return (
    <figure
      style={{ backgroundImage: `url(${img})` }}
      className={cn(
        "relative h-72 w-72 cursor-pointer overflow-hidden rounded-xl bg-cover bg-center text-white shadow-lg"
      )}
    >
      {/* Overlay for darkening the background image */}
      <div className="absolute inset-0 bg-black/40 "></div>

      {/* Name and Role */}
      <div className="relative z-10 flex h-full flex-col justify-end p-4">
        <h3 className="text-lg font-bold text-blue-400">{name}</h3>
        <h5 className="text-sm text-gray-300">{role}</h5>
      </div>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-black py-8">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </Marquee>

      {/* Side gradients */}
      {/* <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black"></div> */}
    </div>
  );
}
