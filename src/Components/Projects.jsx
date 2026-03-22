const projects = [
  {
    title: 'AI Meeting Agent',
    techStack: 'Python / FastAPI / SQLAlchemy / SQLite / Docker / AWS EC2',
    date: 'March 2026',
    description: 'Full-stack monorepo for student management and AI-assisted meeting support. Homeroom teachers manage students, teachers, and meeting records via natural language with an LLM agent. Includes FastAPI backend and React frontend as submodules.',
    repoUrl: 'https://github.com/Yutiankunkun/smart-repo-agent',
  },
  {
    title: 'Research Proposal Assistant',
    techStack: 'Java / Spring Boot / LangChain4j / Docker / AWS EC2',
    date: 'Feb 2026',
    description: 'AI-powered chatbot to help students draft Japanese graduate school research plans with real-time conversational guidance. Full-stack app with Vue 3 frontend, Spring Boot backend, and SSE streaming.',
    repoUrl: 'https://github.com/Yutiankunkun/tian-chatbot',
  },
  {
    title: 'Holotest WeApp',
    techStack: 'Taro / React / TypeScript',
    date: 'Sep 2024',
    description: 'Hololive personality matching WeChat Mini Program. 10-question A/B personality quiz that matches users with a Hololive member based on MBTI-style dimensional mapping.',
    repoUrl: 'https://github.com/Yutiankunkun/holotest-weapp',
  },
]

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="section-heading">
        <h1>Projects</h1>
        <a href="https://github.com/Yutiankunkun" target="_blank" rel="noopener noreferrer" className="btn projects-btn">
          View All Projects
        </a>
      </div>
      <div className="projects-contents">
        {projects.map((project, index) => (
          <div
            key={index}
            className="projects-post"
            onClick={() => window.open(project.repoUrl, '_blank')}
          >
            <div className="post-date">
              <span>{project.techStack}</span>
              <span>{project.date}</span>
            </div>
            <div className="post-desc">
              <h1>{project.title}</h1>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
