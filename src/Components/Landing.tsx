import { motion } from "framer-motion";
import TypewriterText from "./TypewriterText";
import { useEffect, useState } from "react";
const Landing = () => {
  const img_arr: string[] = ["me.jpg", "me2.jpg"];
  const [currentindex, setCurrentIndex] = useState<number>(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % img_arr.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);
  console.log("rendering");
  return (
    <section className="flex lg:flex-row flex-col-reverse justify-between container mx-auto p-2 h-auto lg:gap-0 gap-6 mt-12">
      <motion.div
        initial={{ x: -100 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 2, type: "spring" }}
        viewport={{ once: true }}
        className="flex gap-3 flex-col items-start justify-center flex-1"
      >
        <h3 className="xl:text-lg text-sm font-medium text-white">
          👋 Hello , my name is
        </h3>
        <h1 className="2xl:text-5xl text-4xl text-white font-bold">
          <TypewriterText text="Saugat Dahal. " typingSpeed={0.5} />
        </h1>
        <h1 className="2xl:text-5xl text-3xl text-[#FF8E5E] font-bold xl:line-clamp-3 2xl:w-[60%] w-full p-2">
          Full Stack Developer and Digital Designer
        </h1>
        <p className="text-slate-300 xl:text-base text-xs font-semibold text-balance  xl:w-[480px]">
          I CREATE WEBSITES THAT ARE A PLEASURE TO USE. I DESIGN THEM WITH
          BEAUTIFUL TYPOGRAPHY, MEANINGFUL TRANSITIONS AND THOUGHTFUL
          INTERACTIONS THAT DELIGHT PEOPLE.
        </p>
      </motion.div>

      <motion.figure
        initial={{ x: 100 }}
        whileInView={{ x: 0 }}
        exit={{ x: 100 }}
        transition={{ duration: 2, type: "spring" }}
        viewport={{ once: true }}
        className="flex-1 flex justify-center items-center"
      >
        <img
          src={img_arr[currentindex]}
          alt="Cycling image"
          className="h-72 xl:h-[350px] 2xl:h-[620px] rounded-2xl"
        />
      </motion.figure>
    </section>
  );
};

export default Landing;
