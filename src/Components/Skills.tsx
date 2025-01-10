import { FaAsterisk } from "react-icons/fa";
import SingleSkill from "./SingleSkill";

const Skills = () => {
  return (
    <div className="lg:text-2xl text-base bg-white w-full flex items-center justify-evenly gap-4 lg:gap-0 h-16 font-bold mt-16">
      <SingleSkill
        header="HTML"
        img_src="https://cdn.iconscout.com/icon/free/png-256/free-html-5-logo-icon-download-in-svg-png-gif-file-formats--programming-langugae-language-pack-logos-icons-1175208.png?f=webp&w=256"
        letterColor="red"
      />
      <span className=" text-yellow-400">
        <FaAsterisk />
      </span>
      <SingleSkill
        header="CSS"
        img_src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/css-icon.png"
        letterColor="blue"
      />
      <span className=" text-yellow-400">
        <FaAsterisk />
      </span>
      <SingleSkill
        header="Javascript"
        img_src="https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png"
        letterColor="yellow"
      />
      <span className=" text-yellow-400">
        <FaAsterisk />
      </span>
      <SingleSkill
        header="Typescript"
        img_src="https://seekvectors.com/files/download/Typescript-01.png"
        letterColor="blue"
      />
      <span className=" text-yellow-400">
        <FaAsterisk />
      </span>
      <SingleSkill
        header="Node Js"
        img_src="https://cdn.freebiesupply.com/logos/large/2x/nodejs-1-logo-png-transparent.png"
        letterColor="green"
      />
      <span className=" text-yellow-400">
        <FaAsterisk />
      </span>
      <SingleSkill
        header="React Js"
        img_src="https://static-00.iconduck.com/assets.00/react-original-wordmark-icon-840x1024-vhmauxp6.png"
        letterColor="sky"
      />
    </div>
  );
};

export default Skills;
