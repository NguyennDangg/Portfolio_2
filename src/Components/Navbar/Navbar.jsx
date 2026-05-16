import "./Navbar.css";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <motion.header
      className="fade-in-up"
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="logo">Nguyen Hai Dang</div>

      <nav className={menuOpen ? "nav-open" : ""}>
        <ul>
          {["Home", "About", "Project", "Contact"].map((item, i) => (
            <motion.li
              key={item}
              className="buton"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.4 }}
            >
              <a
                href={`#${item.toLowerCase()}`}
                onClick={() => scrollTo(`#${item.toLowerCase()}`)}
              >
                {item}
              </a>
            </motion.li>
          ))}
        </ul>
      </nav>

      <div>
        <div className="bars" onClick={() => setMenuOpen(!menuOpen)}>
          <i
            className={menuOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}
          ></i>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {["Home", "About", "Project", "Contact"].map((item, i) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => scrollTo(`#${item.toLowerCase()}`)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 }}
              >
                {item}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
