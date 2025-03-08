import React from "react";
import Header from "./Header";
import Search from "./Search";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="mx-auto max-w-xl bg-white-gray min-h-screen border-l-1 border-r-1 border-white-gray">
      <Header />
      <div className="p-5">
        <Search />
        <main>{children}</main>
      </div>
      <Footer />

    </div>
  );
};

export default Layout;
