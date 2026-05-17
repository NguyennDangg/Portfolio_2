import { useState, useEffect } from "react";
import { AnimatePresence, useScroll, motion } from "framer-motion";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/HeroSection/Hero";
import Loader from "./Components/Loader/Loader";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import BackToTop from "./Components/BackToTop/BackToTop";

function App() {
  const [loading, setLoading] = useState(true);

  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && <Loader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && scrolled && (
        <motion.div
          style={{
            scaleX: scrollYProgress,
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            height: "3px",
            background: "#ff2a2a",
            transformOrigin: "0%",
            zIndex: 9999,
            boxShadow: "0 0 10px #ff2a2a",
          }}
        />
      )}

      {!loading && (
        <div>
          <Navbar />
          <Hero />
          <About />
          <Projects />
          <Contact />
          <Footer />
          <BackToTop />
        </div>
      )}
    </>
  );
}

export default App;
