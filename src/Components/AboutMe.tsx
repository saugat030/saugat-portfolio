import { motion } from "framer-motion";
import { BiLogoTypescript } from "react-icons/bi";
import { DiDotnet } from "react-icons/di";

import {
  FaFigma,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaReact,
} from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { TbBrandRedux } from "react-icons/tb";

const AboutMe = () => {
  return (
    <section
      id="About"
      className="container mx-auto xl:flex-row lg:gap-14 flex-col-reverse gap-5 flex justify-between items-center p-4 text-white h-auto lg:h-[480px] lg:mt-32 mt-16"
    >
      <motion.div
        initial={{ x: -100 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 2, type: "spring" }}
        viewport={{ once: true }}
        className="flex flex-col gap-5 justify-evenly flex-1"
      >
        <h1 className="cursor-default text-[#FF8E5E] w-60 2xl:text-5xl text-3xl font-bold relative after:absolute after:w-full after:h-[4px] after:bg-[#FF8E5E] after:-bottom-1 after:left-0 after:scale-x-0 after:origin-right after:transition-transform after:duration-500 hover:after:scale-x-100 hover:after:origin-left">
          About <span className="text-white">Me</span>
        </h1>
        <p className="text-justify xl:text-base text-sm line-clamp-5">
          A highly creative individual with a robust portfolio in full-stack web
          development, demonstrating expertise in building dynamic and
          user-centric applications. Proficient in modern programming languages
          like JavaScript and C#, with a deep understanding of both front-end
          and back-end technologies. A fluent and innovative user of popular
          design tools such as Figma, leveraging them to create visually
          appealing and functional user interfaces. Skilled in problem-solving,
          teamwork, and continuously staying updated with the latest trends in
          web development to deliver cutting-edge solutions.
        </p>
        <div className="flex gap-4 text-xl">
          <FaGithub />
          <FaInstagram />
          <FaLinkedin />
        </div>
        <h3 className="text-lg font-medium">
          Here are a few technologies I've been working with recently:
        </h3>
        <div className="grid grid-cols-3 gap-y-2">
          <h4 className="flex gap-2 items-center">
            <BiLogoTypescript color="#3178c6" className="text-xl" />
            <span>Typescript</span>
          </h4>
          <h4 className="flex gap-2 text-base items-center">
            <TbBrandRedux color="#764ABC" className="text-xl" />
            <span>Redux</span>
          </h4>
          <h4 className="flex gap-2 text-base items-center">
            <FaReact className="text-xl" color="#61dbfb" /> <span>React</span>
          </h4>
          <h4 className="flex gap-2 text-base items-center">
            <SiExpress
              className="text-xl bg-red-500 p-1 rounded-full"
              strokeWidth={1}
            />
            <span>Express</span>
          </h4>
          <h4 className="flex gap-2 text-base items-center">
            <FaFigma className="text-xl" /> <span>Figma</span>
          </h4>
          <h4 className="flex gap-2 text-base items-center">
            <DiDotnet className="text-xl" color="#00FFFF" />
            <span>Asp.Net</span>
          </h4>
        </div>
      </motion.div>
      <motion.figure
        initial={{ x: 100 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 2, type: "spring" }}
        viewport={{ once: true }}
        className="flex-1 xl:ps-16"
      >
        <img
          src="https://images.unsplash.com/photo-1607799279861-4dd421887fb3?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D"
          alt="Photo"
          className="h-full object-contain rounded-2xl float-right"
        />
      </motion.figure>
    </section>
  );
};

export default AboutMe;
