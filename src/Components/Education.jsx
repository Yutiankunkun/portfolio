const Education = () => {
  const education = [
    {
      school: 'Tokyo University of Science',
      degree: 'Master of Engineering in Information and Communication Engineering',
      period: 'Apr 2026 – Present',
      specialization: 'Medical Image Analysis, Computer Vision',
      logo: '/images/science-tokyo.jpg',
      showCoreCourses: false,
    },
    {
      school: 'Hitotsubashi University',
      degree: 'Master of Arts in Economics',
      period: 'Apr 2024 - Mar 2026',
      specialization: 'Motor Behavior Decoding with Deep Learning and Reservoir Computing',
      coreCourses: 'Intermediate Econometrics, Statistics I, Mathematical Analysis I, Introduction to Medical Engineering',
      logo: '/images/hitotsubashi.png',
      showCoreCourses: true,
    },
    {
      school: 'Shanghai Maritime University',
      degree: 'Bachelor of Management in International Accounting, Minor in English',
      period: 'Sep 2018 - Jun 2022',
      specialization: 'Financial Risk Analysis and Control in State-owned Enterprises',
      coreCourses: 'International Finance, Auditing, Management Accounting, Advanced Financial Accounting',
      logo: '/images/shanghai-maritime.png',
      showCoreCourses: true,
    },
  ]

  return (
    <section className="education" id="education">
      <div className="section-heading">
        <h1>Education</h1>
      </div>
      <div className="education-contents">
        {education.map((edu, index) => (
          <div key={index} className="education-box">
            <div className="education-logo">
              <img src={edu.logo} alt={edu.school} onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/64x64/e5e7eb/6b7280?text=Logo'; }} />
            </div>
            <div className="education-info">
              <div className="education-header">
                <h2>{edu.school}</h2>
                <span className="period">{edu.period}</span>
              </div>
              <p className="degree">{edu.degree}</p>
              <div className="education-details">
                <p>{edu.specialization}</p>
                {edu.showCoreCourses && edu.coreCourses && (
                  <p>Core Courses: {edu.coreCourses}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Education
