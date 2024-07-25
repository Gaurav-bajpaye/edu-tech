import React from 'react';
import './App.css';
import LandingPage from './components/LandingPage';
import AuthModal from './components/AuthModal';
import PaymentSection from './components/PaymentSection';

function App() {
  return (
    <div className="App">
      <LandingPage />
      <AuthModal />
      <PaymentSection />
    </div>
  );
}

export default App;