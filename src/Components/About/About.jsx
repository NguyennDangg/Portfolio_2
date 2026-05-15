import "./About.css";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: "easeOut" }
  })
};

function About() {
  return (
    <section className="about-section" id="about">

      <motion.div
        className="about-title"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h1>PERSONNEL FILE</h1>
      </motion.div>

      <motion.div
        className="about-container"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        custom={0.2}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="about-left">

          {[
            { label: "NAME", value: "Nguyen Hai Dang" },
            { label: "STATUS", value: "UNKNOWN" },
            { label: "SPECIALIZATION", value: "Frontend Development" },
            { label: "CURRENT ARC", value: "React/Vite Journey" },
            { label: "ENERGY SOURCE", value: "Evangelion & Bocchi The Rock" },
          ].map((item, i) => (
            <motion.p
              key={item.label}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              custom={0.1 * i}
              viewport={{ once: true }}
            >
              <span>{item.label} :</span> {item.value}
            </motion.p>
          ))}

          <div className="about-bio">
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              custom={0.5}
              viewport={{ once: true }}
            >
              I enjoy building aesthetic and interactive web experiences
              inspired by anime, cyberpunk interfaces, and modern frontend
              design.
            </motion.p>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              custom={0.6}
              viewport={{ once: true }}
            >
              Currently exploring React, animation systems, and creative
              development.
            </motion.p>
          </div>

          <motion.div
            className="about-tags"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.08, delayChildren: 0.3 } }
            }}
          >
            {["React", "Vite", "JavaScript", "CSS", "HTML", "Git"].map((tag) => (
              <motion.span
                key={tag}
                className="tag"
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1 }
                }}
                whileHover={{ scale: 1.1 }}
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>

        </div>

        <motion.div
          className="about-image"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <img src="/assets/PatrickBateman.jpeg" alt="Nguyen Hai Dang" />
        </motion.div>

      </motion.div>
    </section>
  );
}

export default About;