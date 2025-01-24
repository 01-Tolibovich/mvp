import { Outlet } from "react-router-dom";
import { Footer, Header } from "../components";

import "./styles.scss";

export const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <div className="content">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
