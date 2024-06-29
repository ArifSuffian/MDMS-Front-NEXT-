//rle based navbar
import React from 'react';
import { useUser } from '../utils/usercontext';

type SidebarProps = {
  isOpen: boolean;
  toggleSidebar: () => void;
};

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const { role } = useUser();

  const commonLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
  ];

  const adminLinks = [
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Settings', href: '/settings' },
  ];

  const userLinks = [
    { name: 'Profile', href: '/profile' },
    { name: 'Messages', href: '/messages' },
  ];

  const getLinks = () => {
    switch (role) {
      case 'admin':
        return [...commonLinks, ...adminLinks];
      case 'user':
        return [...commonLinks, ...userLinks];
      default:
        return commonLinks;
    }
  };

  return (
    <div
      className={`fixed top-0 left-0 h-full bg-gray-800 text-white transition-transform transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } w-64`}
    >
      <button
        onClick={toggleSidebar}
        className="p-4 text-xl focus:outline-none"
      >
        &times;
      </button>
      <nav className="p-4">
        <ul>
          {getLinks().map((link) => (
            <li key={link.name} className="py-2">
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
