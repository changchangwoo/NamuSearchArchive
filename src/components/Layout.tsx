import React from "react";
import Header from "./Header";
import Search from "./Search";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="mx-auto max-w-xl bg-white-grey h-screen border-l-1 border-r-1 border-white-grey">
      <Header />
      <Search />
      <div className="px-5">
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
