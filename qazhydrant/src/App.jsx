import "./App.css";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Description from "./components/Description";
import Usage from "./components/Usage";
import Traits from "./components/Traits";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-[url('/images/firefighters-bg.png')] bg-cover bg-center bg-no-repeat h-auto md:h-screen">
        <Header />
        <Hero />
      </div>
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
