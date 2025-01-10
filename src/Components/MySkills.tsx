import SkillContainer from "./SkillContainer";
import { motion } from "framer-motion";

const MySkills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const skillVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section className="xl:py-[60px] p-4 bg-[#19191D] xl:mt-28 mt-14">
      <div className="container mx-auto flex flex-col gap-14">
        <motion.h1
          initial={{ x: -300 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 2, type: "spring" }}
          className="cursor-default xl:text-5xl text-3xl text-white font-bold w-56 relative after:absolute after:w-full after:h-[4px] after:bg-[#FF8E5E] after:-bottom-1 after:left-0 after:scale-x-0 after:origin-right after:transition-transform after:duration-500 hover:after:scale-x-100 hover:after:origin-left"
        >
          My <span className="text-orange-400">skills</span>
        </motion.h1>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={containerVariants}
          className="flex xl:flex-row flex-col justify-between items-center gap-6 text-white"
        >
          <motion.div variants={skillVariants}>
            <SkillContainer
              borderColor="blue"
              header="What I can do for you"
              des="I specialize in creating modern, visually appealing UI/UX designs using React, delivering functional and user-friendly solutions. From sleek static portfolio websites to robust full-stack applications, my services cater to a wide range of needs. I leverage tools like Tailwind CSS for responsive designs, Framer Motion for smooth animations, Next.js for scalability, and TypeScript for maintainable code. Whether it’s an elegant personal website or a dynamic eCommerce platform, I bring expertise and precision to bring your vision to life."
            />
          </motion.div>
          <motion.div variants={skillVariants}>
            <SkillContainer
              borderColor="green"
              header="Languages I am fluent in"
              des="I have a strong foundation in web development, with expertise in JavaScript, TypeScript, CSS, and HTML for building interactive and visually appealing user interfaces. On the backend, I am skilled in C# with ASP.NET, as well as Node.js and Express.js, allowing me to create efficient, scalable, and secure server-side applications. My familiarity with these technologies ensures a seamless integration between front-end and back-end systems, resulting in robust and high-performing full-stack web applications."
            />
          </motion.div>
          <motion.div variants={skillVariants}>
            <SkillContainer
              borderColor="pink"
              header="What can you expect"
              des="When working with me, you can expect dedication, professionalism, and a commitment to delivering high-quality results. I focus on understanding your unique requirements and transforming them into functional, visually appealing, and user-friendly solutions. Whether it’s a sleek front-end interface, a robust back-end system, or a full-stack application, I prioritize clean, maintainable code and efficient workflows. I ensure clear communication, timely project delivery, and results that exceed expectations."
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;
