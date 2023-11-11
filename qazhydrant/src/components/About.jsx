const About = () => {
  return (
    <div
      className="aboutbg flex flex-col md:flex-row text-white gap-8 md:gap-16 justify-center py-8 px-4 md:py-16"
      id="about"
    >
      <div className="flex flex-col items-center mb-8 md:mb-0">
        <img
          src="images/author.png"
          className="w-32 md:w-48 rounded-full drop-shadow-sm border-2 border-white"
        />
        <div className="w-full md:w-48 text-center py-4">
          <p className="font-extrabold">Aslan Tlessov</p>
          <p>Founder of QazHydrant</p>
        </div>
      </div>
      <div className="w-full max-w-md md:max-w-lg px-6 md:px-0 lg:max-w-xl text-justify">
        <span className="font-bold">Aslan Tlessov</span> is an exceptional
        student at Illinois Wesleyan University, where he's pursuing a Bachelor
        of Science in Computer Science & Business. His research at Astana Hub
        catapulted him into the top echelon of startups, further demonstrating
        his prowess in product management. Aslan has also honed his skills
        through a Samsung Electronics professional program, winning top awards
        and funding for his social projects. An active member of his
        university's community and a recipient of the prestigious IWU
        Presidential Scholarship, Aslan's academic and entrepreneurial journey
        is marked by excellence and a commitment to impactful innovation.
      </div>
    </div>
  );
};

export default About;
