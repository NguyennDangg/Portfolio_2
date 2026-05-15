import "./Hero.css";
import "../Animation/Animation.css";

const Hero = () => {
  return (
    <>
      <main id="home">
        <div className="image_container slide-in-left">
          <img src="/assets/PB.jpeg" alt="Patrick" />
        </div>

        <div className="content">
          <h1 className="slide-in-right delay-1">
            <span>Hey, I'm Dang!</span>
          </h1>

          <p className="typing_text slide-in-right delay-2">
            <span></span>
          </p>

          <p className="slide-in-right delay-3">
            Powered by Bocchi the Rock and Evangelion energy.
          </p>

          <div className="hero_buttons fade-in-up delay-4">
            <button
              className="button btn-primary"
              onClick={() => window.open("/assets/resume-nhd.pdf", "_blank")}
            >
              Download CV ↓
            </button>
          </div>

          <div className="social_icon fade-in-up delay-5">
            <a
              href="https://github.com/NguyennDangg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href="https://www.instagram.com/danguwuowo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a
              href="https://x.com/danguwuwu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-x-twitter"></i>
            </a>
          </div>
        </div>
      </main>
    </>
  );
};

export default Hero;
