const About = () => {
  return (
    <section>
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-8 lg:px-10 lg:py-24">
        <div className="flex flex-wrap items-center mx-auto max-w-7xl">
          <div className="w-full lg:max-w-lg lg:w-1/2 rounded-xl">
            <div>
              <div className="relative w-full max-w-lg">
                <div className="absolute top-0 rounded-full bg-violet-300 -left-4 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>

                <div className="absolute rounded-full bg-fuchsia-300 -bottom-24 right-20 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                <div className="relative">
                  <img
                    className="w-3/4 mx-auto rounded-lg shadow-2xl"
                    alt="hero"
                    src="/public/images/about_us/person.jpg"
                  />
                  <img
                    src="/public/images/about_us/parts.jpg"
                    alt=""
                    className="absolute hover:scale-125 ease-in-out duration-300 hover:duration-500 w-1/2 rounded-lg top-1/2 left-1/2 border-8 border-white"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start mt-12 mb-16 text-left lg:flex-grow lg:w-1/2 lg:pl-6 xl:pl-24 md:mb-0 xl:mt-0">
            <span className="mb-8 text-xs font-bold tracking-widest text-[#FF3811] uppercase">
              About Us
            </span>
            <h1 className="mb-8 text-2xl font-bold leading-none tracking-tighter text-neutral-600 dark:text-neutral-200 md:text-4xl lg:text-5xl">
              We are qualified & of experience in this field
            </h1>
            <p className="mb-5 text-base leading-relaxed text-left text-gray-500 dark:text-zinc-300">{`There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`}</p>
            <p className="mb-7 text-base leading-relaxed text-left text-gray-500 dark:text-zinc-300">{`the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. `}</p>
            <div className="mt-0 lg:mt-6 max-w-7xl sm:flex">
              <div className="mt-3 rounded-lg sm:mt-0">
                <button className="items-center block px-10 py-4 text-base font-medium text-center text-white  duration-300 ease-in-out transform bg-[#FF3811] rounded-xl hover:bg-transparent hover:border-2 hover:border-[#FF3811] hover:text-[#FF3811] focus:outline-none focus:ring-2 focus:ring-offset-2 ">
                  Get More Info
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
