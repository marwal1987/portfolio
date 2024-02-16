import { useTheme } from "@/contexts/ThemeContext";
import Image from "next/image";

export default function HeroSection() {
  const { state } = useTheme();
  const { userPreferences } = state;
  const textStyle = {
    fontSize: userPreferences.fontSize === "large" ? "2.5rem" : "1.5rem",
    transition: userPreferences.reduceAnimations
      ? "none"
      : "all 0.3s ease-in-out",
  };

  return (
    <section className="py-12 bg-stone-100 dark:bg-gray-800 flex items-center justify-evenly">
      <div className="container flex flex-col items-center justify-center gap-12 max-w-96">
        <h1
          className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white text-left"
          style={textStyle}
        >
          Versatile Front-End Developer and Linux Enthusiast with a Melodic
          Twist
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 text-left">
          Meet Martin, a multifaceted talent bridging the worlds of Front-End
          development and Linux expertise with a harmonious touch. With a
          journey that spans from mastering HTML, CSS, and React to delving into
          the intricacies of Linux systems and virtualization technologies,
          Martin brings a unique blend of technical prowess and musical
          creativity to the table. From crafting captivating user interfaces to
          orchestrating seamless DevOps workflows, Martin is on a mission to
          harmonize code and melody, one line at a time.
        </p>
      </div>
      <Image
        src="/images/man-on-the-moon.jpg"
        height={500}
        width={500}
        alt="alt text?"
        className="drop-shadow-2xl rounded-full"
      />
    </section>
  );
}
