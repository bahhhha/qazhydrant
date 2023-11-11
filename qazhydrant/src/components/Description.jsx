const Description = () => {
  return (
    <div className="flex flex-col py-12 justify-center items-center contactbg">
      <img src="graphic/logo.png" className="w-48 py-2 " />
      <p>
        <span className="font-extrabold text-main">QazHydrant</span> enables
        firefighters to find the nearest hydrants by digitalizing fire hydrant
        locations:
      </p>
      <div>
        <img
          src="images/screenshots.png"
          className="w-[720px] drop-shadow-2xl"
        />
        <div className="pt-16">
          <p className="text-center text-sm font-regular tracking-widest	uppercase">
            Finalist of
          </p>
          <div className="flex justify-around items-center scale-75">
            <img src="graphic/sft.png" className="w-64" />
            <img src="graphic/hub.jpg" className="w-48" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
