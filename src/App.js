import './App.css';
import { About } from './pages/About';
import { Skills } from './pages/Skills';
import { Contact } from './pages/Contact';
import { Navbar } from './components/Navbar';
import { workData, projectsData } from './components/Data';
import { Card } from './components/Card';

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <div id="work">
        <Card name="Recent Works" data={workData} code="View Site" />
      </div>
      <div id="projects">
        <Card name="Projects" data={projectsData} code="View Code" />
      </div>
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
