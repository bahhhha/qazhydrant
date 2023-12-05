import React, { useState, useEffect } from "react";
import AnimatedNumbers from "react-animated-numbers";

const Counter = () => {
  const [livesSaved, setLivesSaved] = useState(1000);
  const [money, setMoney] = useState(2000000);
  const videoId = "LIVm3x8nlfI"; // Replace with your video ID

  // Plain YouTube embed URL without autoplay, mute, or loop parameters
  const youtubeEmbedUrl = `https://www.youtube.com/embed/${videoId}`;

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
    <div className="flex md:flex-row flex-col items-center justify-center counterbg pb-12  md:space-x-16 ">
      <div className="pb-20 text-center">
        <p className="md:text-6xl text-4xl pb-4 font-bold text-[#1e1e1e]">
          We are <span className="text-main">saving</span>
        </p>
        <div className="flex flex-col justify-center">
          <div>
            <AnimatedNumbers
              animateToNumber={livesSaved}
              fontStyle={{
                fontSize: 32,
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
                  fontSize: 32,
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
      <div className="scale-75 md:scale-100">
        <iframe
          width="480"
          height="250"
          src={youtubeEmbedUrl}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>{" "}
    </div>
  );
};

export default Counter;
