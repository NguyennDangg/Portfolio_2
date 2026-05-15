import './Contact.css'
import { motion } from 'framer-motion'

function Contact() {
  const links = [
    { label: 'FACEBOOK', href: 'https://www.facebook.com/danguwuuuuu' },
    { label: 'DISCORD', href: 'https://discordapp.com/users/danguwu_delulu' },
    { label: 'EMAIL', href: 'https://mail.google.com/mail/?view=cm&to=nguynhai.dangg@gmail.com' },
  ]

  return (
    <section className="contact-section" id="contact">

      <motion.div
        className="contact-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h1>COMMUNICATION TERMINAL</h1>
      </motion.div>

      <motion.div
        className="contact-container"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <p>
          Open for collaboration, frontend experiments,
          and aesthetic web development projects.
        </p>

        <motion.div
          className="contact-links"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } }
          }}
        >
          {links.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              whileHover={{ y: -5, backgroundColor: '#ff2a2a', boxShadow: '0 0 20px rgba(255,0,0,0.3)' }}
              transition={{ duration: 0.2 }}
            >
              {link.label}
            </motion.a>
          ))}
        </motion.div>

      </motion.div>
    </section>
  )
}

export default Contact