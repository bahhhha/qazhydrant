const Statistics = () => {
  return (
    <div className="relative z-30 bottom-6 contactbg max-w-screen-lg mx-auto border-main border-2 rounded-xl border-opacity-30 drop-shadow-2xl text-[#3e3e3e] flex justify-center p-4 md:p-8">
      <div className="">
        <p className="font-bold py-5 text-xl md:text-3xl text-center tracking-wide">
          A <span className="text-main">Real World</span> Problem
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-12 py-8">
          <div className="flex flex-col items-center">
            <img
              src="images/underground.png"
              alt="Underground Hydrant"
              className="w-48 md:w-64 rounded-md drop-shadow-xl border-2 border-main"
            />
            <p className="py-4">
              <span className="font-bold text-main">Underground</span> Hydrant
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="images/normal.png"
              alt="Ground Hydrant"
              className="w-48 md:w-64 rounded-md drop-shadow-xl border-2 border-main"
            />
            <p className="py-4">
              <span className="font-bold text-main">Ground</span> Hydrant
            </p>
          </div>
        </div>
        <div className="text-justify px-4 md:px-0 md:flex md:justify-center w-3/5 md:w-full m-auto">
          <p className="max-w-prose">
            In around 14 countries globally,{" "}
            <span className="font-bold">
              firefighters spend a significant amount of time—approximately 6-9
              minutes—locating the nearest operational hydrant
            </span>{" "}
            due to the use of underground hydrants.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
