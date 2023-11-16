const Hero = () => {
  return (
    <div className="flex justify-center  md:h-screen py-16  px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center space-y-4 max-w-2xl text-white">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-extrabold text-justify">
          <span className="text-main">Qaz</span>Hydrant
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-3xl font-regular tracking-wide text-left">
          A gamechanger in fire safety system.
        </p>
      </div>
    </div>
  );
};

export default Hero;
