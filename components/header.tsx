import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    // Implement logout functionality here
    alert('Logged out');
  };

  return (
    <header className="bg-gray-800 text-white p-4 flex items-center justify-between">
      <div className="flex items-center">
        <div className="h-20 w-20">
          <img src="/images/logo.png" alt="logo" className="h-full w-full object-contain" />
        </div>
        <h1 className="text-2xl ml-4">Master's Dissertation Management System</h1>
      </div>
      <div className="relative">
        <button
          onClick={toggleDropdown}
          className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
        >
          Account
        </button>
        {isOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20">
            <button
              onClick={handleLogout}
              className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
