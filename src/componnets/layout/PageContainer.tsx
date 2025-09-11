import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const PageContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="h-screen bg-red-500 flex flex-col">
      <Header />
      <main className="max-w-[1440px] mx-auto flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default PageContainer;
