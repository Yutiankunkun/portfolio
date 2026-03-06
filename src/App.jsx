import { useEffect } from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Education from './Components/Education'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

function App() {
  useEffect(() => {
    const homeSection = document.querySelector('.home')
    const menuBtn = document.querySelector('.navbar .menu-btn')
    const menuList = document.querySelector('.navbar .nav-list')
    const menuListItems = document.querySelectorAll('.nav-list li a')

    const pageScrollFunction = () => {
      if (window.scrollY > 80) {
        homeSection?.classList.add('active')
      } else {
        homeSection?.classList.remove('active')
      }
    }

    const addActiveClass = () => {
      menuList?.classList.toggle('active')
    }

    const menuItemClicked = () => {
      menuList?.classList.remove('active')
    }

    window.addEventListener('scroll', pageScrollFunction)
    window.addEventListener('load', pageScrollFunction)
    menuBtn?.addEventListener('click', addActiveClass)
    menuListItems.forEach((item) => item.addEventListener('click', menuItemClicked))

    return () => {
      window.removeEventListener('scroll', pageScrollFunction)
      window.removeEventListener('load', pageScrollFunction)
      menuBtn?.removeEventListener('click', addActiveClass)
      menuListItems.forEach((item) => item.removeEventListener('click', menuItemClicked))
    }
  }, [])

  return (
    <div className="web-container">
      <section className="home" id="home">
        <Navbar />
        <Hero />
      </section>
      <About />
      <Education />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
