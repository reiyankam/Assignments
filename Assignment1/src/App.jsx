import './App.css'

function Header() {
  return (
    <header className="header">
      <div className="logo">RM</div>

      <nav>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#education">Education</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  )
}

function Home() {
  return (
    <section id="home" className="home">
      <div className="home-content">
        <p className="welcome">WELCOME TO MY PORTFOLIO</p>

        <h1>
          Hi, I'm <span>Reiyanka Mondal</span>
        </h1>

        <h2>BCA Student | Aspiring Web Developer</h2>

        <p>
          I am passionate about web development, programming and learning
          new technologies.
        </p>

        <div className="buttons">
          <a href="#projects" className="btn">View Projects</a>
          <a href="#contact" className="btn outline">Contact Me</a>
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="section">
      <p className="section-title">GET TO KNOW ME</p>
      <h2>About Me</h2>

      <div className="about-card">
        <p>
          Hello! I am Reiyanka Mondal, a BCA student interested in
          web development and programming. I enjoy learning new
          technologies and creating useful and creative projects.
        </p>

        <p>
          My goal is to develop my technical skills and build a
          successful career in the field of technology.
        </p>
      </div>
    </section>
  )
}

function Education() {
  return (
    <section id="education" className="section">
      <p className="section-title">MY ACADEMIC JOURNEY</p>
      <h2>Education</h2>

      <div className="cards">
        <div className="card">
          <div className="icon">🎓</div>
          <h3>Bachelor of Computer Applications</h3>
          <p>Techno India University West Bengal</p>
          <span>BCA</span>
        </div>

        <div className="card">
          <div className="icon">📚</div>
          <h3>Higher Secondary</h3>
          <p>Ariadaha Sarbamangala Balika Vidyalaya</p>
          <span>Higher Secondary Education</span>
        </div>

        <div className="card">
          <div className="icon">🏫</div>
          <h3>Secondary Education</h3>
          <p>Ariadaha Sarbamangala Balika Vidyalaya</p>
          <span>Secondary Education</span>
        </div>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section id="skills" className="section">
      <p className="section-title">WHAT I KNOW</p>
      <h2>My Skills</h2>

      <div className="skills">
        <div className="skill">HTML</div>
        <div className="skill">CSS</div>
        <div className="skill">JavaScript</div>
        <div className="skill">React</div>
        <div className="skill">Python</div>
        <div className="skill">PHP</div>
        <div className="skill">SQL</div>
        <div className="skill">GitHub</div>
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section id="projects" className="section">
      <p className="section-title">MY WORK</p>
      <h2>Projects</h2>

      <div className="cards">
        <div className="card project">
          <div className="icon">🧠</div>
          <h3>QuizSphere</h3>
          <p>
            An interactive quiz website designed to provide
            quizzes on different topics and display results.
          </p>
          <div className="tags">
            <span>HTML</span>
            <span>CSS</span>
            <span>PHP</span>
            <span>MySQL</span>
          </div>
        </div>

        <div className="card project">
          <div className="icon">💻</div>
          <h3>Personal Portfolio</h3>
          <p>
            A responsive personal portfolio website created
            using React and reusable components.
          </p>
          <div className="tags">
            <span>React</span>
            <span>JSX</span>
            <span>CSS</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="section contact">
      <p className="section-title">GET IN TOUCH</p>
      <h2>Contact Me</h2>

      <div className="contact-card">
        <p>📧 Email: debatetubai01@gmail.com</p>
        <p>📍 Location: Kolkata, West Bengal</p>

        <a href="mailto:your-email@example.com" className="btn">
          Send Me an Email
        </a>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer>
      <p>© 2026 Reiyanka Mondal. All Rights Reserved.</p>
      <p>Made with React ❤️</p>
    </footer>
  )
}

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App