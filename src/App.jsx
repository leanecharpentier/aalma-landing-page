import Header from './components/Header';
import Hero from './components/Hero';
import AboutAalma from './components/AboutAalma';
import WhyAalma from './components/WhyAalma';
import Features from './components/Features';
import Benefits from './components/Benefits';
import Testimonial from './components/Testimonial';
import Privacy from './components/Privacy';
import CTASection from './components/CTASection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-white text-gray-900">
      <Header />
      <main>
        <Hero />
        <AboutAalma />
        <WhyAalma />
        <Features />
        <Benefits />
        <Testimonial />
        <Privacy />
        <CTASection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;

