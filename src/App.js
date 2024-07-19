import Layout from './components/Layout/Layout.js';
import About from './pages/About/About.js';
import Skills from './pages/Skills/Skills.js';
import Project from './pages/projects/Project.js'
import Education from './pages/Education/Education.js';
import Contact from './pages/Contact/Contact.js';
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from './context/ThemeContext.js';

function App() {
  const [theme] = useTheme();
  return (
    <div id={theme}>
      <Layout />
      <About />
      <Education />
      <Skills/>
      <Project />
      <Contact />
      <ScrollToTop style={{backgroundColor: "gray"}} />
    </div>
  );
}

export default App;