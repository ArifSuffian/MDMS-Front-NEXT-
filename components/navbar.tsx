// components/Navbar.tsx
import React from 'react';

type NavbarProps = {
  toggleSidebar: () => void;
};

const Navbar: React.FC<NavbarProps> = ({ toggleSidebar }) => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <button onClick={toggleSidebar} className="text-xl focus:outline-none">
        &#9776;
      </button>
      <h1 className="text-xl">MyApp</h1>
    </nav>
  );
};

export default Navbar;
