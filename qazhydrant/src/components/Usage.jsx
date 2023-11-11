const Usage = () => {
  return (
    <div className="flex justify-center items-center py-8" id="howtouse">
      <img src="images/phone_ui.png" className="w-96" />
      <div className="flex flex-col gap-8 mb-16 font-regular">
        <p className="text-2xl font-bold">How to use?</p>
        <p>1. Your location.</p>
        <p>2. General information of a hydrant.</p>
        <p>3. Set destination to the hydrant.</p>
        <p>4. List of available hydrants.</p>
      </div>
    </div>
  );
};

export default Usage;
