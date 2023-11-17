const Statistics = () => {
  return (
    <div className="relative  bottom-6 contactbg w-[960px] m-auto border-main border-2 rounded-xl border-opacity-30 drop-shadow-2xl text-[#3e3e3e] flex justify-center">
      <div className=" py-4">
        <div className="flex justify-center gap-24 py-8">
          <div className="flex flex-col text-center ">
            <img
              src="images/underground.png"
              className="w-64 rounded-md drop-shadow-xl border-2 border-main"
            ></img>
            <p className="py-4">
              <span className="font-bold text-main">Underground</span> Hydrant
            </p>
          </div>
          <div className="flex flex-col text-center ">
            <img
              src="images/normal.png"
              className="w-64 rounded-md drop-shadow-xl border-2 border-main"
            ></img>
            <p className="py-4">
              <span className="font-bold text-main">Ground</span> Hydrant
            </p>
          </div>
        </div>
        <div className="flex justify-center gap-24 items-center pb-10">
          <div>
            <p className="font-bold py-5 text-3xl text-left tracking-wide">
              A <span className="text-main">Real World</span> Problem
            </p>
            <p className="text-justify w-[480px] ">
              In around 14 countries globally,{" "}
              <span className="font-bold">
                firefighters spend a significant amount of time—approximately
                6-9 minutes—locating the nearest operational hydrant
              </span>{" "}
              due to the use of underground hydrants.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
