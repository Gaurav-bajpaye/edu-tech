import React from 'react';

const AuthModal = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg">
        <h2 className="text-xl mb-4">Sign Up / Log In</h2>
        <form>
          <input type="email" placeholder="Email" className="border p-2 mb-4 w-full" />
          <input type="password" placeholder="Password" className="border p-2 mb-4 w-full" />
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AuthModal;