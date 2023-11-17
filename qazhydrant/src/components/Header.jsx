const Header = () => {
  return (
    <div
      className="flex  flex-wrap justify-around items-center w-full m-auto py-6 px-4"
      id="header"
    >
      <div className="flex items-center justify-center w-full sm:w-auto">
        <img src="/graphic/logo.png" className="h-20" />
      </div>

      <div className="flex justify-center items-center w-full sm:w-auto sm:flex-nowrap gap-4 sm:gap-16 text-white mt-4 sm:mt-0">
        <a
          href="#howtouse"
          className="font-medium z-30 duration-150 hover:text-gray-300"
        >
          How to Use
        </a>
        <a
          href="#about"
          className="font-medium z-30 duration-150 hover:text-gray-300"
        >
          About Us
        </a>
      </div>
    </div>
  );
};

export default Header;
