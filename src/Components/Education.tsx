import { FaGraduationCap } from "react-icons/fa";
import { exp } from "./EduExp";
import { PiSuitcaseDuotone } from "react-icons/pi";

type EducationProp = {
  heading: string;
  exp: exp[];
};

const Education = (props: EducationProp) => {
  return (
    <div className="flex flex-col flex-1 gap-6 p-2">
      {props.heading == "Education" ? (
        <FaGraduationCap className="text-4xl lg:text-6xl" />
      ) : (
        <PiSuitcaseDuotone className="text-4xl lg:text-6xl" />
      )}
      <h1 className="lg:text-4xl text-2xl font-semibold relative after:absolute after:w-full after:h-[4px] after:bg-[#FF8E5E] after:-bottom-1 after:left-0 after:scale-x-0 after:origin-right after:transition-transform after:duration-500 hover:after:scale-x-100 hover:after:origin-left">
        {props.heading}
      </h1>
      {props.exp.map((item) => (
        <>
          <h2 className="lg:text-2xl text-xl">
            {item.expHeader}
            <h3 className="flex justify-between lg:text-lg text-base w-full text-gray-300">
              <span>{item.expSubheader}</span>
              <span>{item.expTimeInterval}</span>
            </h3>
          </h2>
          <hr />
        </>
      ))}
    </div>
  );
};

export default Education;
