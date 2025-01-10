import { motion } from "framer-motion";

type SkillsProps = {
  borderColor: string;
  header: string;
  des: string;
};
const SkillContainer = (props: SkillsProps) => {
  return (
    <motion.div
      initial={{ y: -150, opacity: 0 }}
      whileInView={{ y: 0, opacity: [0.3, 0.6, 1] }}
      transition={{ duration: 2, type: "spring" }}
      viewport={{ once: false }}
      className={`flex-1 gap-3 flex flex-col px-6 py-3 border-s-4 2xl:h-[320px] xl:w-[400px] h-auto 2xl:w-[500px] rounded-2xl border-${props.borderColor}-600`}
    >
      <h2 className="xl:text-2xl text-xl font-semibold">{props.header}</h2>
      <p className="text-justify 2xl:text-base text-sm">{props.des}</p>
    </motion.div>
  );
};

export default SkillContainer;
