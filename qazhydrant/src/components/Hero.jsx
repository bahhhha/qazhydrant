const Hero = () => {
  return (
    <div className="flex justify-center items-center md:h-screen py-16  px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center space-y-8 max-w-2xl text-white md:mb-24">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-center">
          QazHydrant
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl font-extralight text-justify">
          QazHydrant is at the forefront of enhancing fire safety systems in CIS
          countries, pioneering a digital revolution that enables rapid
          emergency responses, saving critical time when it matters most.
        </p>
        <a
          className="bg-main text-sm sm:text-base py-2 px-4 rounded-xl drop-shadow-xl hover:bg-white hover:text-main duration-100"
          href="#about"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default Hero;
