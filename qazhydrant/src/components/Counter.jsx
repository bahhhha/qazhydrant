import React, { useState, useEffect } from "react";
import AnimatedNumbers from "react-animated-numbers";

const Counter = () => {
  const [livesSaved, setLivesSaved] = useState(1000);
  const [money, setMoney] = useState(2000000);
  const videoId = "aTKWjbkcGlo"; // Replace with your video ID

  // Construct the YouTube embed URL with autoplay and mute parameters
  const youtubeEmbedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&playlist=${videoId}&loop=1`;

  useEffect(() => {
    const interval = setInterval(() => {
      setLivesSaved((prev) => prev + Math.floor(Math.random() * 10) + 1);
      setMoney((prev) => prev + Math.floor(Math.random() * 900) + 100);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const formatNumberWithSpaces = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  return (
    <div className="flex justify-center counterbg mt-5 p-10 space-x-16 ">
      <div className="pb-20 text-center">
        <p className="text-6xl pb-8 font-bold text-[#1e1e1e]">
          We are <span className="text-main">saving</span>
        </p>
        <div className="flex flex-col justify-center">
          <div>
            <AnimatedNumbers
              animateToNumber={livesSaved}
              fontStyle={{
                fontSize: 40,
                color: "#f7a43e",
                fontWeight: "800",
              }}
              config={{ tension: 200, friction: 300 }}
            >
              {(num) => formatNumberWithSpaces(num)}
            </AnimatedNumbers>
            <p className="text-left pl-1 font-bold">Lives</p>
          </div>
          <div>
            <div>
              <AnimatedNumbers
                animateToNumber={money}
                fontStyle={{
                  fontSize: 40,
                  color: "#f7a43e",
                  fontWeight: "800",
                }}
                config={{ tension: 10, friction: 300 }}
              >
                {(num) => `$${formatNumberWithSpaces(num)}`}
              </AnimatedNumbers>
              <p className="text-left pl-1 font-bold">US Dollars</p>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <iframe
          width="480"
          height="300"
          src={youtubeEmbedUrl}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>{" "}
    </div>
  );
};

export default Counter;
