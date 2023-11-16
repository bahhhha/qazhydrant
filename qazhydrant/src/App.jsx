import "./App.css";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Description from "./components/Description";
import Usage from "./components/Usage";
import Traits from "./components/Traits";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Counter from "./components/Counter";
import Statistics from "./components/Statistics";

function App() {
  return (
    <div className="flex flex-col h-[980px]">
      <div className="relative md:h-1/2 h-1/2">
        {" "}
        {/* Adjust the height here */}
        <video
          autoPlay
          loop
          muted
          poster="images/poster.png"
          className="relative w-full h-full object-cover"
        >
          <source src="/videos/hero-video.webm" type="video/mp4" />
        </video>
        <img
          src="/graphic/overlay.png"
          alt="Overlay"
          className="absolute bottom-0 w-full"
        />
        <Header />
        <Hero />
      </div>
      <Counter />
      <Statistics />
      <Description />
      <Traits />
      <Usage />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
