import "./Projects.css";
import { motion } from "framer-motion";

function Projects() {
  const projects = [
    {
      title: "PROJECT_01",
      description:
        "Anime-inspired portfolio built with HTML/CSS and Javascript.",
      tech: "JavaScript / HTML / CSS",
      image: "/assets/Reipfp.jpg",
      github: "https://github.com/NguyennDangg/Portfolio_1",
      liveDemo: "https://portfoliodanguwu.vercel.app/",
    },
    {
      title: "PROJECT_02",
      description: "Interactive to-do list application with local storage.",
      tech: "JavaScript / HTML / CSS",
      image: "/assets/rei.jpeg",
      github: "https://github.com/NguyennDangg/TodoList",
      liveDemo: "https://todolist-pied-phi-58.vercel.app/",
    },
    {
      title: "PROJECT_03",
      description:
        "Personal portfolio built with React/Vite. Evangelion-inspired aesthetic with custom animations and responsive design.",
      tech: "React / Framer Motion",
      image: "/assets/Bale.jpeg",
      github: "",
      liveDemo: "https://portfolio-2-ruddy-psi.vercel.app/",
    },
    {
      title: "PROJECT_04",
      description:
        "A todo list app built with React, Vite, and Framer Motion — featuring Haimiya Mio from Haimiya Senpai is Scary and Cute as an interactive companion character.",
      tech: "React / Framer Motion / SCSS",
      image: "/assets/MioSenpai.jpg",
      github: "https://github.com/NguyennDangg/Todo-App",
      liveDemo: "https://todo-app-woad-nine-16.vercel.app/",
    },
    {
      title: "PROJECT_05",
      description:"A Neon Genesis Evangelion themed Spotify music player.",
      tech: "React / Framer Motion / GSAP",
      image: "https://i.pinimg.com/736x/32/8e/9e/328e9e5a29ff951bc0e6e0644bea6b2b.jpg",
      github: "https://github.com/NguyennDangg/Dangify",
      liveDemo: "https://dangify.vercel.app/",
    },
  ];

  return (
    <section className="projects-section" id="project">
      <motion.div
        className="projects-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h1>PROJECT ARCHIVE</h1>
      </motion.div>

      <div className="projects-container">
        {projects.map((project, index) => (
          <motion.div
            className="project-card"
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ y: -10, boxShadow: "0 0 30px rgba(255,0,0,0.25)" }}
          >
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>

            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <span>{project.tech}</span>

            <div className="project-buttons">
              <motion.button
                onClick={() => {
                  if (!project.github) return;
                  window.open(project.github, "_blank");
                }}
                disabled={!project.github}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  opacity: project.github ? 1 : 0.4,
                  cursor: project.github ? "pointer" : "not-allowed",
                }}
              >
                GitHub
              </motion.button>

              <motion.button
                onClick={() => {
                  if (!project.liveDemo) return;
                  project.liveDemo && window.open(project.liveDemo, "_blank");
                }}
                disabled={!project.liveDemo}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  opacity: project.liveDemo ? 1 : 0.4,
                  cursor: project.liveDemo ? "pointer" : "not-allowed",
                }}
              >
                Live Demo
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
