const Footer = () => {
  return (
    <section className="lg:px-[443px] p-12 lg:py-[100px] bg-[#19191D] lg:mt-32 mt-16">
      <div className="flex flex-col items-center gap-9">
        <h1 className="xl:text-5xl text-2xl text-orange-400 font-bold text-center relative after:absolute after:w-full after:h-[4px] after:bg-[#FF8E5E] after:-bottom-1 after:left-0 after:scale-x-0 after:origin-right after:transition-transform after:duration-500 hover:after:scale-x-100 hover:after:origin-left">
          Let's build your project together
        </h1>
        <button className="bg-white rounded-3xl font-semibold text-black lg:text-base text-sm px-10 py-3">
          Get in touch
        </button>
      </div>
    </section>
  );
};

export default Footer;
