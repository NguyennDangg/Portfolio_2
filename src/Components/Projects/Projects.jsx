import './Projects.css'

function Projects() {

  const projects = [
    {
      title: 'PROJECT_01',
      description: 'Anime-inspired portfolio built with HTML/CSS and Javascript.',
      tech: 'JavaScript / HTML / CSS',
      image:'/assets/Reipfp.jpg',
      github:'https://github.com/NguyennDangg/Portfolio_1',
      liveDemo:'https://portfoliodanguwu.vercel.app/'
    },

    {
      title: 'PROJECT_02',
      description: 'Interactive to-do list application with local storage.',
      tech: 'JavaScript / HTML / CSS',
      image:'/assets/rei.jpeg',
      github:'https://github.com/NguyennDangg/TodoList',
      liveDemo:'https://todolist-pied-phi-58.vercel.app/'
    },

    {
      title: 'PROJECT_03',
      description: 'Experimental frontend UI inspired by Evangelion systems.',
      tech: 'React / Framer Motion',
      image:'/assets/Bale.jpeg',
      github:'',
      liveDemo:''
    }
  ]

  const handleGitHub = (url) => {
    window.open(url, '_blank')
  }

  const handleLiveDemo = (url) => {
    window.open(url, '_blank')
  }

  return (
    <section className="projects-section" id='projects'>

      <div className="projects-title">
        <h1>PROJECT ARCHIVE</h1>
      </div>

      <div className="projects-container">

        {projects.map((project, index) => (

          <div className="project-card" key={index}>

            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>

            <h2>{project.title}</h2>

            <p>{project.description}</p>

            <span>{project.tech}</span>

            <div className="project-buttons">

              <button onClick={() => handleGitHub(project.github)} >GitHub</button>

              <button onClick={() => handleLiveDemo(project.liveDemo)}>Live Demo</button>

            </div>

          </div>

        ))}

      </div>

    </section>
  )
}

export default Projects