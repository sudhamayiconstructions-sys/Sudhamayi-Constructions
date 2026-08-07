import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import WhyChooseUs from "./components/WhyChooseUs";
import Process from "./components/Process";
import CTA from "./components/CTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Portfolio from "./pages/Portfolio";
import WhatsAppButton from "./components/WhatsAppButton";
import OngoingProjects from "./components/OngoingProjects";
import MapSection from "./components/MapSection";
import LoadingScreen from "./components/LoadingScreen";

function Home() {
  return (
    <LoadingScreen>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <OngoingProjects />
      <WhyChooseUs />
      <Process />
      <CTA />
      <Contact />
      <MapSection />
      <Footer />
      <WhatsAppButton />
    </LoadingScreen>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/portfolio" element={<Portfolio />} />
    </Routes>
  );
}

export default App;