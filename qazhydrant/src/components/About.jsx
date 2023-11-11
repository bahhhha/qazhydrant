const About = () => {
  return (
    <div
      className="aboutbg flex text-white gap-16 justify-center py-16"
      id="about"
    >
      <div className="flex flex-col items-center">
        <img
          src="images/author.png"
          className="w-48 rounded-full drop-shadow-sm border-2 border-white"
        />
        <div className="w-48  text-center py-4">
          <p className="font-extrabold">Aslan Tlessov</p>
          <p>Founder of QazHydrant</p>
        </div>
      </div>
      <div className="w-[720px] text-justify">
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
