import ProjectCard from "./ProjectCard";

const MyProjects = () => {
  return (
    <section className="container mx-auto text-white xl:mt-28 mt-14 flex flex-col xl:gap-32 gap-12 items-center lg:items-start">
      <h1 className="cursor-default 2xl:text-5xl text-4xl font-bold relative after:absolute after:w-full after:h-[4px] after:bg-[#FF8E5E] after:-bottom-1 after:left-0 after:scale-x-0 after:origin-right after:transition-transform after:duration-500 hover:after:scale-x-100 hover:after:origin-left">
        My <span className="text-orange-400">Projects</span>
      </h1>
      <div className="grid lg:grid-cols-3 grid-cols-1  justify-items-center w-full gap-6 px-2 lg:p-0">
        <ProjectCard
          project_name="Spirits"
          img1="Spirits1"
          img2="Spirits2"
          img3="Spirits3"
          img4="Spirits4"
          description="A full-stack E-Commerce Application for selling liquors, developed using TypeScript and React for the frontend and Express.js for the backend. The application features a robust and scalable architecture, delivering a seamless shopping experience with intuitive navigation, product browsing, and secure transactions. The backend serves a well-structured REST API for efficient data handling, supporting dynamic features like user authentication, inventory management, and order processing. The app emphasizes performance, maintainability, and an engaging user experience."
        />
        <ProjectCard
          project_name="Cafe Street"
          img1="Coffee1"
          img2="Coffee2"
          img3="Coffee3"
          img4="Coffee4"
          description="A modern Coffee Shop Frontend built using React and Tailwind CSS, featuring a sleek and intuitive UI/UX design. The application provides a seamless and visually appealing experience, showcasing the coffee shop's offerings through dynamic components and responsive layouts. It prioritizes user engagement with interactive features, optimized navigation, and a polished aesthetic that aligns with contemporary design standards."
        />
        <ProjectCard
          project_name="Moving Movies"
          img1="Movie1"
          img2="Movie2"
          img3="Movie3"
          img4="Movie4"
          description="A Movie Streaming Platform Frontend developed with React, TypeScript, and Axios for API integration. The application fetches real-time movie and TV show data from an external API, providing users with an intuitive interface to browse categories, view trending titles, and explore detailed information about each selection. The platform features responsive layouts, ensuring a seamless experience across devices, while leveraging TypeScript for type safety and Axios for efficient API requests. The design prioritizes modern UI/UX principles for a smooth and engaging user experience."
        />
      </div>
    </section>
  );
};

export default MyProjects;
