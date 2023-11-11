const Footer = () => {
  return (
    <div className="flex flex-col justify-center">
      <a
        className="my-4 text-main hover:text-orange-600 text-center rounded-xl duration-100 drshadow-2xl m-auto"
        href="#header"
      >
        <p>🢁 </p>
        <p> Go back</p>
      </a>
      <footer className="aboutbg text-white p-2 flex justify-center">
        © QazHydrant 2023. All rights reserved.
      </footer>
    </div>
  );
};

export default Footer;
