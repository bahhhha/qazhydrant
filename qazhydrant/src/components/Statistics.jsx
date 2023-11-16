const Statistics = () => {
  return (
    <div className="relative  bottom-6 contactbg w-[960px] m-auto border-main border-2 rounded-xl border-opacity-30 drop-shadow-2xl text-[#3e3e3e] flex justify-center">
      <div className=" py-4">
        <div className="flex justify-center gap-24 items-center">
          <div>
            <p className="font-bold py-5 text-3xl text-left tracking-wide">
              A <span className="text-main">Real World</span> Problem
            </p>
            <p className="text-justify w-[360px] ">
              In around 14 countries globally,{" "}
              <span className="font-bold">
                firefighters spend a significant amount of time—approximately
                6-9 minutes—locating the nearest operational hydrant
              </span>{" "}
              due to the use of underground hydrants.
            </p>
          </div>
          <div>
            <img src="images/hydrants.png" className="w-64"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
