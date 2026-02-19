import './App.css';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Keunggulan from './sections/Keunggulan';
import Program from './sections/Program';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Keunggulan />
        <Program />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
