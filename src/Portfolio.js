import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';


const Portfolio = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <About />
      <Projects />
      <Experience />  {/* Adding Experience Section */}
      <Contact />  {/* Adding Contact Section */}
      <Footer/>
    
    </div>
  );
};

export default Portfolio;
