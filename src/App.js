import './App.css';

import Nav from './components/nav';
import Splash from './components/splash';
import About from './components/about';
import Qualifications from './components/qualifications';
import Projects from './components/projects';
import Contact from './components/contact';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <header className="App-header" style={{ marginBottom: '-51px' }}>
        <Splash />
      </header>
      <Nav />
      <section className="About-Section" style={{ margin: '50px' }}>
        <About />
      </section>
      <section className="Qualifications-Section">
        <Qualifications />
      </section>
      <section className="Projects">
        <Projects />
      </section>
      <section className="Contact">
        <Contact />
      </section>
      <Footer />
    </div>
  );
}

export default App;
