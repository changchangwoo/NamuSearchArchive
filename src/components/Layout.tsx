import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="container pt-20 mx-auto px-5 max-w-xl bg-[#F5F5F5] h-screen border-l-1 border-r-1 border-[#E5E5E5]">
      <main>{children}</main>
    </div>
  );
};

export default Layout;
