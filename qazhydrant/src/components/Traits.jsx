const traits = [
  {
    name: "Fast",
    description:
      "QazHydrant enables firefighters to locate the nearest fire hydrant four times faster than traditional physical maps.",
    img: "graphic/zap.svg",
  },
  {
    name: "Efficient",
    description:
      "By being robust and mobile, QazHydrant revolutionized emergency response times, resulting in annual savings of over $2,000,000",
    img: "graphic/trending-up.svg",
  },
  {
    name: "Accessible",
    description:
      "Powered by Flutter and Dart, QazHydrant services are multiplatform and free to use for IOS, Android, and as a Desktop app.",
    img: "graphic/smartphone.svg",
  },
];

const Trait = ({ trait }) => {
  return (
    <div className="group flex flex-col border-2 duration-150 hover:shadow-xl border-white rounded-2xl shadow-sm p-5 items-center text-center text-white w-64 gap-4 hover:bg-white hover:border-main">
      <img
        src={trait.img}
        className="w-24 filter invert brightness-0 group-hover:brightness-100 group-hover:invert-0"
      />
      <p className="font-bold tracking-wide	 text-2xl text-white group-hover:text-main">
        {trait.name}
      </p>
      <p className="text-left text-md font-light group-hover:text-main">
        {trait.description}
      </p>
    </div>
  );
};

const Traits = () => {
  const traitsToShow = traits.map((trait) => {
    return <Trait trait={trait} />;
  });
  return (
    <div className="flex w-full aboutbg flex-row justify-center gap-24 py-16">
      {traitsToShow}
    </div>
  );
};

export default Traits;
