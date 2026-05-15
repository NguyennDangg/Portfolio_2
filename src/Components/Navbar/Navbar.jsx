import "./Navbar.css";
import "../Animation/Animation.css";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <header className="fade-in-up">
      <div className="logo">Nguyen Hai Dang</div>

      <nav className={menuOpen ? "nav-open" : ""}>
        <ul>
          <li className="buton delay-1">
            <a href="#home" onClick={() => scrollTo("#home")}>Home</a>
          </li>
          <li className="buton delay-2">
            <a href="#about" onClick={() => scrollTo("#about")}>About</a>
          </li>
          <li className="buton delay-3">
            <a href="#project" onClick={() => scrollTo("#projects")}>Project</a>
          </li>
          <li className="buton delay-4">
            <a href="#contact" onClick={() => scrollTo("#contact")}>Contact</a>
          </li>
        </ul>
      </nav>

      <div>
        {/* <button
          className="button contact buton delay-4"
          onClick={() => window.open("https://nguynhaidang.carrd.co", "_blank")}
        >
          Contact
          <i className="fa-regular fa-address-card"></i>
        </button> */}

        <div className="bars" onClick={() => setMenuOpen(!menuOpen)}>
          <i className={menuOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
        </div>
      </div>
    </header>
  );
};

export default Navbar;