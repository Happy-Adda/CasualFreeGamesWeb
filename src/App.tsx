// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsandCondition from './pages/TermsandCondition'

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/privacypolicy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsandCondition />} />
            <Route path="/terms&condition" element={<TermsandCondition />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;