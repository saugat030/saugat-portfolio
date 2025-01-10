import { motion } from "framer-motion";

type SkillsProps = {
  borderColor: string;
  header: string;
};
const SkillContainer = (props: SkillsProps) => {
  return (
    <motion.div
      initial={{ y: -150, opacity: 0 }}
      whileInView={{ y: 0, opacity: [0.3, 0.6, 1] }}
      transition={{ duration: 2, type: "spring" }}
      viewport={{ once: false }}
      className={`flex-1 gap-3 flex flex-col px-6 py-3 border-s-4 rounded-2xl border-${props.borderColor}-600`}
    >
      <h2 className="xl:text-2xl text-xl font-semibold">{props.header}</h2>
      <p className="text-justify xl:text-base text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
        delectus porro accusamus recusandae sunt incidunt tempora aut
        exercitationem fugiat iusto itaque aliquam laudantium rerum impedit enim
        nemo voluptatem nulla provident facilis eaque quos, soluta, beatae vero
        hic! Laboriosam aperiam labore sed voluptatibus voluptate repudiandae
        laudantium velit aspernatur reiciendis ?
      </p>
    </motion.div>
  );
};

export default SkillContainer;
