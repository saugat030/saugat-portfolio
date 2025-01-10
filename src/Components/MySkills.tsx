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
    <section className="xl:py-[60px] p-4 xl:px-[122px] bg-[#19191D] xl:mt-28 mt-14">
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
            <SkillContainer borderColor="blue" header="What I can do for you" />
          </motion.div>
          <motion.div variants={skillVariants}>
            <SkillContainer
              borderColor="green"
              header="Languages I am fluent in"
            />
          </motion.div>
          <motion.div variants={skillVariants}>
            <SkillContainer borderColor="pink" header="What can you expect" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;
