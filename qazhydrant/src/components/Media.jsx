const articles = [
  {
    img: "images/image1.jpg",
    link: "https://www.gov.kz/memleket/entities/emer-atyrau/press/news/details/235797?lang=ru",
    text: "«High school students developed an application that will be a 'gamechanger' in fire safety system.»",
    author: "Government of Kazakhstan",
  },
  {
    img: "images/image2.jpg",
    link: "https://bluescreen.kz/samsung-naghradila-pobieditieliei-konkursa-startapov-solve-for-tomorrow/",
    text: "«Samsung Electornics awards Winners of 'Solve for Tomorrow' Startup Competition»",
    author: "BlueScreen.kz",
  },
  {
    img: "images/image3.jpg",
    link: "https://pricom.kz/novosti/vse-pozhgidranty-v-telefone.html",
    text: "«All hydrants in one phone»",
    author: "Pricom.kz",
  },
  {
    img: "images/image4.jpg",
    link: "https://news.samsung.com/kz_ru/samsung-awarded-winners-of-solve-for-tomorrow-contest-in-almaty",
    text: "«Samsung recognized the victors of the Solve for Tomorrow startup contest held in Almaty»",
    author: "Samsung",
  },
];

const Article = ({ article }) => {
  return (
    <div className="flex gap-4  mediabg rounded-full border-2 border-main border-opacity-50 drop-shadow-sm md:w-[800px] w-full mx-auto justify-start items-center ">
      <img
        src={article.img}
        className="w-24 h-24 md:w-36 md:h-36 object-cover rounded-full"
        alt="Article"
      />
      <div className="flex-1 mr-3 text-left flex flex-col justify-start">
        <a
          href={article.link}
          className="text-main font-semibold hover:text-[#bf7c2a] duration-150 text-xs md:text-base"
        >
          {article.text}
        </a>
        <div className="text-left py-2 text-xs md:text-sm">
          {article.author}
        </div>
      </div>
    </div>
  );
};

const Media = () => {
  return (
    <div className="flex flex-col justify-center items-center px-4">
      <p className="text-center py-12 text-2xl md:text-3xl font-bold">
        Media About Us
      </p>
      <div className="w-full flex flex-col gap-8">
        {articles.map((article) => {
          return <Article article={article} key={article.link} />;
        })}
      </div>
    </div>
  );
};

export default Media;
