import React from "react";

import Header from "./header";
import Footer from "./footer";

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

const Layout = ({ children, className }: LayoutProps) => {
  return (
    <div
      className={`w-screen min-h-screen bg-black text-white flex flex-col ${className}`}
    >
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
