const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-text">
        <h3>Hi, My name is</h3>
        <h1>Tian Lan</h1>
        <p className="hero-role">
          <span className="role-prefix">I am a </span>
          <span className="role-title">Software Development Engineer</span>
        </p>
        <p>
          Specializing in full-stack software development and data analytics.
          Researching AI for medical image analysis and computer-aided diagnosis.
        </p>
        <a href="https://www.linkedin.com/in/tian-lan-70a4863b5" target="_blank" rel="noopener noreferrer" className="download-btn">
          View Resume
        </a>
      </div>
      <div className="hero-img">
        <img 
          src="https://github.com/Yutiankunkun.png" 
          alt="Tian Lan" 
        />
      </div>
    </div>
  )
}

export default Hero
