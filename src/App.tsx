import './App.css';
import Header from './sections/Header';
import Hero from './sections/Hero';
import Services from './sections/Services';
import About from './sections/About';
import Clients from './sections/Clients';
import Contacts from './sections/Contacts';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-dark">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Clients />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
}

export default App;
