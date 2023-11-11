const Header = () => {
  return (
    <div
      className="flex justify-around items-center w-[720px] m-auto py-6"
      id="header"
    >
      <div className="flex items-center">
        <img src="/graphic/logo.png" className="h-10" />
      </div>

      <div className="flex gap-16 text-white">
        <a
          href="#howtouse"
          className="font-medium duration-150 hover:text-gray-300"
        >
          How to Use
        </a>
        <a
          href="#about"
          className="font-medium duration-150 hover:text-gray-300"
        >
          About Us
        </a>
      </div>
    </div>
  );
};

export default Header;
