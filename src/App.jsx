import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

const LandingPage = lazy(() => import('./pages/LandingPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Suspense fallback={<div style={{padding: '2rem'}}>Loading…</div>}>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;