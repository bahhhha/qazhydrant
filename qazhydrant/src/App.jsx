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
    <div className="flex flex-col min-h-screen">
      <div className="relative h-auto md:h-screen">
        <video
          autoPlay
          loop
          muted
          className="absolute w-full h-full object-cover"
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>
        <img
          src="/graphic/overlay.png"
          alt="Overlay"
          className="absolute flag bottom-0 w-full"
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
