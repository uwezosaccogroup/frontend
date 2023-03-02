import React from "react";
import { Menu } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

function Header() {
  return (
    <div className="header">
      <Menu className="menu">
        <Menu.Item header>
          Uwezo<span>Sacco</span>
        </Menu.Item>

        <Menu.Item href="#section1">About Us</Menu.Item>

        <Menu.Item href="#section2">Services</Menu.Item>

        <Menu.Item href="#section3">Faqs</Menu.Item>

        <Menu.Item href="#section4">Sign Up</Menu.Item>
      </Menu>
    </div>
  );
}

export default Header;
