import React from 'react';
import Header from './Components/Landing Page Component/Header';
import Hero from './Components/Landing Page Component/Hero';
import Services from './Components/Landing Page Component/Services';
import WhyUs from './Components/Landing Page Component/WhyUs';
import Contact from './Components/Landing Page Component/Contact';
import Footer from './Components/Landing Page Component/Footer';
import GoTop from './Components/Landing Page Component/GoTop';
import './assets/css/style.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <article>
          <Hero />
          <Services />
          <WhyUs />
          <Contact />
        </article>
      </main>
      <Footer />
      <GoTop />
    </div>
  );
}

export default App;