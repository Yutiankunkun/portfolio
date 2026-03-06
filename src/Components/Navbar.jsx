const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li><a href="#home" className="nav-link">HOME</a></li>
        <li><a href="#about" className="nav-link">ABOUT</a></li>
        <li><a href="#education" className="nav-link">EDUCATION</a></li>
        <li><a href="#projects" className="nav-link">PROJECTS</a></li>
        <li><a href="#contact" className="nav-link nav-link-contact">CONTACT</a></li>
      </ul>
      <div className="menu-btn">
        <i className="fas fa-bars"></i>
      </div>
    </nav>
  )
}

export default Navbar
