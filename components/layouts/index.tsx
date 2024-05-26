import React from "react";
import Header from "../header";
import Footer from "../footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const Menu = [
    {
      name: "Home",
      path: "#",
      active: false,
    },
    {
      name: "Family",
      path: "#",
      active: true,
    },
    {
      name: "History",
      path: "#",
      active: false,
    },
    {
      name: "Blog",
      path: "#",
      active: false,
    },
    {
      name: "Galleries",
      path: "#",
      active: false,
    },
  ];
  return (
    <>
      <Header data={Menu} />
      <div className="body">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
