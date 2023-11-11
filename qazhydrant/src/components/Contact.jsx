const Contact = () => {
  return (
    <div className="flex flex-col justify-center   pt-8 pb-24 contactbg">
      <p className="text-xl font-bold text-center">Contact Us</p>
      <div className="border-main shadow-md border-2 m-auto w-72 p-5 my-4">
        <div className="flex  flex-col gap-4 py-4 items-center justify-around">
          <div className="flex flex-row items-center gap-4 ">
            <img src="graphic/mail.svg" />
            atlessov@iwu.edu
          </div>
          <div className="flex flex-row items-center gap-4">
            <img src="graphic/phone.svg" />
            309-750-1831
          </div>
          <div className="flex flex-row items-center gap-4">
            {" "}
            <img src="graphic/send.svg" />
            @Littleken22
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
