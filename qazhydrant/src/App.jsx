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
    <div>
      <div className="bg-[url('/images/firefighters-bg.png')] bg-cover h-screen">
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
