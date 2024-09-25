import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello, Davide Pellegrino!</h1>
      </header>
      
      <main>
        <section className="bio">
          <h2>About Me</h2>
          <p>
            I am a passionate web developer with experience in building interactive and dynamic websites.
            I love to learn new technologies and improve my skills in software development.
          </p>
        </section>
        
        <section className="skills">
          <h2>Skills</h2>
          <ul>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>HTML/CSS</li>
            <li>Python</li>
            <li>Git/GitHub</li>
          </ul>
        </section>
        
        <section className="experience">
          <h2>Experience</h2>
          <h3>Web Developer at XYZ Company</h3>
          <p>
            Developed responsive web applications and collaborated with designers and back-end developers.
            Utilized React and Node.js to build robust features.
          </p>
          
          <h3>Intern at ABC Corporation</h3>
          <p>
            Assisted in developing internal tools and participated in team meetings to discuss project progress.
          </p>
        </section>
        
        <section className="contact">
          <h2>Contact Me</h2>
          <p>Email: davide.pellegrino@example.com</p>
          <p>LinkedIn: <a href="https://linkedin.com/in/davidepellegrino" target="_blank" rel="noopener noreferrer">linkedin.com/in/davidepellegrino</a></p>
          <p>GitHub: <a href="https://github.com/pex9" target="_blank" rel="noopener noreferrer">github.com/pex9</a></p>
        </section>
      </main>
      
      <footer>
        <p>&copy; {new Date().getFullYear()} Davide Pellegrino. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
