import './Contact.css'

function Contact() {

  return (
    <section className="contact-section" id='contact'>

      <div className="contact-title">
        <h1>COMMUNICATION TERMINAL</h1>
      </div>

      <div className="contact-container">

        <p>
          Open for collaboration, frontend experiments,
          and aesthetic web development projects.
        </p>

        <div className="contact-links">

          <a
            href="https://github.com/NguyennDangg"
            target="_blank"
          >
            GITHUB
          </a>

          <a
            href="https://www.facebook.com/danguwuuuuu"
            target="_blank"
          >
            FACEBOOK
          </a>

          <a
            href="https://discordapp.com/users/danguwu_delulu"
            target="_blank"
          >
            DISCORD
          </a>

          <a
            href="https://mail.google.com/mail/?view=cm&to=nguynhai.dangg@gmail.com"
            target='_blank'
          >
            EMAIL
          </a>

        </div>

      </div>

    </section>
  )
}

export default Contact