import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const PageContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // this is container of all pages
  return (
    <div className="min-h-screen ">
      <Header />
      <main className="max-w-[1440px] mx-auto flex-1 px-4">{children}</main>
      <Footer />
    </div>
  );
};

export default PageContainer;
