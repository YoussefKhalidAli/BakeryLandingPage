import { useRef } from "react";
import "./App.css";

import About from "./components/About/About";
import Banners from "./components/Banners/Banners";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import Services from "./components/Services/Services";

function App() {
  const homeRef = useRef(null);
  const servicesRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <NavBar
        onScroll={scrollToSection}
        sections={[homeRef, servicesRef, aboutRef, contactRef]}
      />
      <Banners ref={homeRef} />
      <About ref={aboutRef} />
      <Services ref={servicesRef} />
      <Footer ref={contactRef} />
    </>
  );
}

export default App;
