const Hero = () => {
  return (
    <div className="flex justify-center h-screen">
      <div className="flex flex-col items-center mt-36 space-y-8  max-w-2xl text-white">
        <p className=" font-extrabold text-7xl">QazHydrant</p>
        <p className="font-extralight text-center">
          {" "}
          QazHydrant is at the forefront of enhancing fire safety systems in CIS
          countries, pioneering a digital revolution that enables rapid
          emergency responses, saving critical time when it matters most.
        </p>
        <button className="bg-main py-2 px-4 rounded-xl drop-shadow-xl hover:bg-white hover:text-main duration-100">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Hero;
