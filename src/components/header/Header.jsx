import { AiOutlineLogin, AiOutlineLogout } from "react-icons/ai";
import useAuth from "../../store/auth";
import { BsInfoCircle } from "react-icons/bs";
import { TbReportAnalytics } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import { Logo } from "../ui";
import { RiCloseLargeFill } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";

import "./styles.scss";
import { useState } from "react";

export const Header = () => {
  const { isAuth, setIsAuth } = useAuth();

  const navLink = [
    {
      icon: <BsInfoCircle />,
      text: "О нас",
      link: "/about-us",
    },
  ];

  if (!isAuth) {
    navLink.push({
      icon: <AiOutlineLogin />,
      text: "Вход",
      link: "/login",
    });
  } else {
    navLink.unshift({
      icon: <TbReportAnalytics />,
      text: "Отчёты",
      link: "/",
    });
  }

  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header className="header">
      <div className="header-items">
        <Logo />
        <div
          role="button"
          onClick={() => setMobileMenu(!mobileMenu)}
          className="menu-buttons"
        >
          {!mobileMenu ? (
            <span>
              <RxHamburgerMenu />
            </span>
          ) : (
            <span>
              <RiCloseLargeFill />
            </span>
          )}
        </div>
        <nav className={`nav ${mobileMenu ? "active" : ""}`}>
          <ul className="header-links">
            {navLink.map((item) => (
              <li key={Math.random()}>
                <NavLink className="header-link" to={item.link}>
                  <span>{item.icon}</span>
                  <span>{item.text}</span>
                </NavLink>
              </li>
            ))}
            {isAuth && (
              <div
                role="button"
                onClick={() => setIsAuth(false)}
                className="header-link"
              >
                <span>
                  <AiOutlineLogout />
                </span>
                <span>Выход</span>
              </div>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};
