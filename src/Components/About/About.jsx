import "./About.css";
import "../Animation/Animation.css";

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-title">
        <h1>PERSONNEL FILE</h1>
      </div>

      <div className="about-container">
        <div className="about-left">
          <p>
            <span>NAME :</span> Nguyen Hai Dang
          </p>
          <p>
            <span>STATUS :</span> UNKNOWN
          </p>
          <p>
            <span>SPECIALIZATION :</span> Frontend Development
          </p>
          <p>
            <span>CURRENT ARC :</span> React/Vite Journey
          </p>
          <p>
            <span>ENERGY SOURCE :</span> Evangelion & Bocchi The Rock
          </p>

          <div className="about-bio">
            <p>
              I enjoy building aesthetic and interactive web experiences
              inspired by anime, cyberpunk interfaces, and modern frontend
              design.
            </p>

            <p>
              Currently exploring React, animation systems, and creative
              development.
            </p>
          </div>

          <div className="about-tags">
            {["React", "Vite", "JavaScript", "CSS", "HTML", "Git"].map(
              (tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ),
            )}
          </div>
        </div>

        <div className="about-image">
          <img src="/assets/PatrickBateman.jpeg" alt="Nguyen Hai Dang" />
        </div>
      </div>
    </section>
  );
}

export default About;
