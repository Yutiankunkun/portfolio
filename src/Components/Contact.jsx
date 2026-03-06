const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-contents">
        <div className="contact-left">
          <h1 className="section-heading">Get in Touch</h1>
          <p className="contact-intro">
            I'm here to collaborate and create something amazing together. 
            Feel free to reach out for opportunities, collaborations, or just to say hello!
          </p>
        </div>
        <div className="contact-right">
          <div className="contact-item">
            <div className="icon">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <div className="contact-text">
              <span>Location</span>
              <span>Tokyo, Japan</span>
            </div>
          </div>
          <div className="contact-item">
            <div className="icon">
              <i className="fab fa-linkedin-in"></i>
            </div>
            <div className="contact-text">
              <span>LinkedIn</span>
              <span>
                <a href="https://www.linkedin.com/in/tian-lan-70a4863b5" target="_blank" rel="noopener noreferrer">
                  linkedin.com/in/tian-lan-70a4863b5
                </a>
              </span>
            </div>
          </div>
          <div className="contact-item">
            <div className="icon">
              <i className="fab fa-github"></i>
            </div>
            <div className="contact-text">
              <span>GitHub</span>
              <span>
                <a href="https://github.com/Yutiankunkun" target="_blank" rel="noopener noreferrer">
                  github.com/Yutiankunkun
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
