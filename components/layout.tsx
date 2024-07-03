import React from 'react';
import Header from './header';
import Footer from './footer';
import SideNav from './sidenavbar';
import { User, ROLES, LECTURER_TYPES } from '@/utils/constants';

// Define the user type (this should ideally come from your authentication context)

const user: User = {
  role: ROLES.LECTURER,
  lecturerType: LECTURER_TYPES.EXAMINER
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-grow">
        <SideNav user={user} />
        <main className="flex-grow p-4">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;