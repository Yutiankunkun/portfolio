const projects = [
  {
    title: 'Tian Chatbot',
    techStack: 'Vue 3 / Spring Boot / LangChain4j / DashScope (Qwen)',
    date: '2024',
    description: 'AI-powered chatbot to help students draft Japanese graduate school research plans with real-time conversational guidance. Full-stack app with Vue 3 frontend, Spring Boot backend, and SSE streaming.',
    repoUrl: 'https://github.com/Yutiankunkun/tian-chatbot',
  },
  {
    title: 'Holotest WeApp',
    techStack: 'Taro / React / TypeScript',
    date: '2024',
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
