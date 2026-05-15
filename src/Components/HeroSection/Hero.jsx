import "./Hero.css";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <>
      <main id="home">
        <motion.div
          className="image_container"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <img src="/assets/PB.jpeg" alt="Patrick" />
        </motion.div>

        <div className="content">
          <motion.h1
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            <span>Hey, I'm Dang!</span>
          </motion.h1>

          <motion.p
            className="typing_text"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
          >
            <span></span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
          >
            Powered by Bocchi the Rock and Evangelion energy.
          </motion.p>

          <motion.div
            className="hero_buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65, ease: "easeOut" }}
          >
            <motion.button
              className="button btn-primary"
              onClick={() => window.open("/assets/resume-nhd.pdf", "_blank")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download CV ↓
            </motion.button>
          </motion.div>

          <motion.div
            className="social_icon"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
          >
            {[
              {
                href: "https://github.com/NguyennDangg",
                icon: "fa-brands fa-github",
              },
              {
                href: "https://www.instagram.com/danguwuowo",
                icon: "fa-brands fa-instagram",
              },
              {
                href: "https://x.com/danguwuwu",
                icon: "fa-brands fa-x-twitter",
              },
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.4 }}
              >
                <i className={social.icon}></i>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </main>
    </>
  );
};

export default Hero;
