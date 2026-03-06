import { Code2, BarChart3, Brain } from 'lucide-react'

const About = () => {
  const abilities = [
    {
      icon: Code2,
      title: 'Software Engineering',
      description: 'Developing scalable applications and backend systems with modern tools, clean architecture, and reliable performance.',
      color: '#2563eb',
    },
    {
      icon: BarChart3,
      title: 'Data Analytics',
      description: 'Analyzing and modeling data to uncover patterns, support decisions, and communicate insights clearly.',
      color: '#059669',
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Designing and training intelligent models that learn from data and power advanced applications.',
      color: '#7c3aed',
    },
  ]

  return (
    <section className="about" id="about">
      <div className="about-contents">
        <div className="about-info">
          <h1 className="section-heading">About Me</h1>
          <p>
            I'm Tian, a graduate student pursuing Economics at Hitotsubashi University (Class of 2026).
            My master's thesis focuses on decoding motor behavior with deep learning and reservoir computing.
          </p>
          <p>
            <strong>Paper:</strong>{' '}
            <a href="https://arxiv.org/pdf/2512.06725" target="_blank" rel="noopener noreferrer">
              Decoding Motor Behavior Using Deep Learning and Reservoir Computing
            </a>
          <br />
            <strong>Source Code:</strong>{' '}
            <a href="https://github.com/Yutiankunkun/Motion-Decoding-Using-Biosignals" target="_blank" rel="noopener noreferrer">
              Motion-Decoding-Using-Biosignals
            </a>
          </p>
          <p>
          Now, I'm pursuing Master of Engineering in Information and Communication Engineering at Institute of Science Tokyo (Class of 2028).
          </p>
        </div>
        <div className="about-experience">
          {abilities.map((item, index) => {
            const IconComponent = item.icon
            return (
              <div key={index} className="experience-box">
                <div className="icon" style={{ backgroundColor: `${item.color}15`, borderColor: `${item.color}40` }}>
                  <IconComponent size={20} color={item.color} strokeWidth={2} />
                </div>
                <div className="experience-desc">
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default About
