import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import TermsOfService from './components/TermsOfService';
import PrivacyPolicy from './components/PrivacyPolicy';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="bg-white text-gray-900">
              <Header />
              <main>
                <Home />
              </main>
              <Footer />
            </div>
          }
        />
        <Route path="/conditions-utilisation" element={<TermsOfService />} />
        <Route path="/politique-confidentialite" element={<PrivacyPolicy />} />
      </Routes>
    </Router>
  );
}

export default App;

