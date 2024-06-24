import React from 'react';
import Header from './header';
import Footer from './footer';
import SideNav from './sidenavbar';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-grow">
        <SideNav />
        <main className="flex-grow p-4">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
