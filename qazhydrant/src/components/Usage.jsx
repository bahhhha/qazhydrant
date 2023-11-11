const Usage = () => {
  return (
    <div
      className="flex flex-col sm:flex-row justify-center items-center py-8 px-4 gap-6"
      id="howtouse"
    >
      <img
        src="images/phone_ui.png"
        className="w-full sm:w-96 max-w-xs sm:max-w-md lg:max-w-lg"
      />
      <div className="flex flex-col gap-4 sm:gap-8 mb-8 sm:mb-16 font-regular text-center sm:text-left">
        <p className="text-xl sm:text-2xl font-bold">How to use?</p>
        <ol className="list-decimal list-inside sm:space-y-4">
          <li>Your location.</li>
          <li>General information of a hydrant.</li>
          <li>Set destination to the hydrant.</li>
          <li>List of available hydrants.</li>
        </ol>
      </div>
    </div>
  );
};

export default Usage;
