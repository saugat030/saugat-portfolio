type projectCard = {
  project_name: string;
  img1: string;
  img2: string;
  img3: string;
  img4: string;
  description: string;
};
const ProjectCard = (props: projectCard) => {
  return (
    <figure className="rounded-2xl hover:w-[500px] group hover:h-[600px] overflow-hidden h-[260px] transform duration-700 border border-gray-600">
      <div className="h-full absolute w-full hidden group-hover:flex flex-col justify-evenly items-center z-10 p-2">
        <h1 className="font-semibold text-3xl text-yellow-600 hover:underline">
          <a href="">{props.project_name}</a>
        </h1>
        <div className="grid grid-cols-2 w-full gap-2 px-2">
          <img
            src={`MyProjectsImg/${props.img1}.png`}
            alt=""
            className="rounded-xl duration-200  transform-gpu  hover:-rotate-2 hover:scale-105 h-[126px] w-full"
          />
          <img
            src={`MyProjectsImg/${props.img2}.png`}
            alt=""
            className="rounded-xl duration-200 hover:-rotate-2 hover:scale-105 h-[126px]"
          />
          <img
            src={`MyProjectsImg/${props.img3}.png`}
            alt=""
            className="rounded-xl duration-200 hover:-rotate-2 hover:scale-105 h-[126px]"
          />
          <img
            src={`MyProjectsImg/${props.img4}.png`}
            alt=""
            className="rounded-xl duration-200 hover:-rotate-2 hover:scale-105 h-[126px] w-full"
          />
        </div>
        <p className="text-xs text-justify">{props.description}</p>
        <h2 className="text-xl font-medium">
          Links:
          <a
            href=""
            className="ms-2 italic text-orange-500 font-bold hover:underline"
          >
            Github
          </a>
          <a
            href=""
            className="ms-2 italic text-orange-500 font-bold hover:underline"
          >
            Live Preview
          </a>
        </h2>
      </div>
      <img
        src={`MyProjectsImg/${props.img1}.png`}
        alt=""
        className="object-cover group-hover:blur-xl h-full"
      />
    </figure>
  );
};

export default ProjectCard;
