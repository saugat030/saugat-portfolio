import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const NavBar = () => {
  return (
    <header className="h-[115px] flex items-center container mx-auto justify-between border-b-2 border-gray-500 text-white px-2">
      <h1 className="lg:text-4xl text-3xl font-bold cursor-default relative after:absolute after:w-full after:h-[4px] after:bg-white after:-bottom-1 after:left-0 after:scale-x-0 after:origin-right after:transition-transform after:duration-500 hover:after:scale-x-100 hover:after:origin-left">
        SD
      </h1>
      <div className="flex lg:gap-[36px] gap-3 items-center">
        <div className="flex lg:gap-3 gap-2">
          <h1>
            <a href="https://github.com/saugat030" target="_blank">
              <FaGithub size={24} />
            </a>
          </h1>
          <h1>
            <a
              href="https://www.linkedin.com/in/saugat-dahal030"
              target="_blank"
            >
              <FaLinkedin size={24} />
            </a>
          </h1>
          <h1>
            <a href="https://www.instagram.com/saugat_030/" target="_blank">
              <FaInstagram size={24} />
            </a>
          </h1>
        </div>
        <button className="rounded-3xl hover:-translate-y-1 hover:bg-white hover:text-black border py-2 px-4 transform duration-300 border-white font-semibold">
          Download CV
        </button>
      </div>
    </header>
  );
};

export default NavBar;
