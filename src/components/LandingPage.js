import React from 'react';

const LandingPage = () => {
  return (
    <div className="bg-gray-100 h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to EdTech</h1>
      <p className="text-lg mb-8">Learn new skills and advance your career with our courses.</p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded">Get Started</button>
    </div>
  );
};

export default LandingPage;