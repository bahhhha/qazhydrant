const achievements = [
  {
    src: "graphic/hub.jpg",
    desc: "QazHydrant achieved notable success and secured financial backing by ranking among the top 15 out of more than 100 teams in the prestigious international Astana Hub 'Smart City' accelerator program. The team's thorough research and experiments demonstrated that 'QazHydrant' significantly improves firefighters' ability to find the closest fire hydrant, being four times quicker than using conventional physical maps.",
  },
  {
    src: "graphic/sft.png",
    desc: "QazHydrant participated in Professional Training 'Design Thinking and Product Development' led by Samsung Electronics coaches. Researched in fire safety system of CIS countries and how to improve mobility of firefighters by digitizing a navigation to fire hydrants. Top 1 Social projects award by Samsung Electronics (Solve for Tomorrow) and funding of $14000 for realization.",
  },
];

const Achievement = ({ achievement }) => {
  return (
    <div className="flex flex-col md:h-[600px] gap-4 md:gap-8 justify-center group hover:bg-main border-main border-2 p-4 md:px-8 rounded-2xl shadow-xl contactbg items-center h-full">
      <img
        src={achievement.src}
        alt="Achievement"
        className="w-32 md:w-48 lg:w-64 xl:w-72"
      />
      <p className="w-64 md:w-80 lg:w-96 text-sm md:text-base leading-7 text-justify">
        {achievement.desc}
      </p>
    </div>
  );
};

const Achievements = () => {
  return (
    <div className="text-[#3e3e3e] py-8 ">
      <p className="text-center text-black font-bold text-xl md:text-4xl py-8">
        Achievements
      </p>

      <div className="flex flex-col py-8 gap-8 md:gap-16 items-center md:h-auto justify-center md:flex-row">
        {achievements.map((achievement, index) => {
          return <Achievement achievement={achievement} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Achievements;
