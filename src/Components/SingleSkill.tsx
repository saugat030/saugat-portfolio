import { motion } from "framer-motion";
import { useState } from "react";

type SingleSkillProp = {
  header: string;
  img_src: string;
  letterColor: string;
};

const SingleSkill = (props: SingleSkillProp) => {
  const [visible, setVisible] = useState<boolean>(false);
  return (
    <h1
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      className={`w-[140px] text-center relative p-1 cursor-pointer transform hover:scale-110 hover:-translate-y-1 hover:text-${props.letterColor}-600`}
    >
      {props.header}
      {visible && (
        <motion.figure
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: -12, opacity: 1 }}
          exit={{ y: 0, opacity: 0 }}
          transition={{ duration: 1.5, type: "spring" }}
          className="w-20 h-20  absolute bottom-full left-8"
        >
          <img src={props.img_src} className="w-full h-full object-contain" />
        </motion.figure>
      )}
    </h1>
  );
};

export default SingleSkill;
