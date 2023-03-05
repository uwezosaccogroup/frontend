import React, { useState } from "react";
import { Menu, Button, Dropdown } from "semantic-ui-react";
import { Link } from "react-scroll";
import "../../../App.css";
import "semantic-ui-css/semantic.min.css";

function Header() {
  const [menuVisible, setMenuVisible] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleMenuToggle = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div className="header">
      <Menu className="menu">
        <Menu.Item header>Uwezo Sacco Group</Menu.Item>

        <Menu.Menu position="right">
          <Menu.Item>
            <Button
              color="blue"
              icon="bars"
              onClick={handleMenuToggle}
              className="mobile-menu-icon"
            />
          </Menu.Item>
        </Menu.Menu>

        {menuVisible && (
          <Dropdown item text="Menu" className="mobile-menu">
            <Dropdown.Menu>
              <Dropdown.Item>
                <Link
                  to="about"
                  smooth={true}
                  duration={200}
                  spy={true}
                  exact="true"
                  onClick={handleMenuToggle}
                >
                  About Us
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link
                  to="services"
                  smooth={true}
                  duration={150}
                  spy={true}
                  exact="true"
                  onClick={handleMenuToggle}
                >
                  Services
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link
                  to="faqs"
                  smooth={true}
                  duration={200}
                  spy={true}
                  exact="true"
                  onClick={handleMenuToggle}
                >
                  Faqs
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link
                  to="signup"
                  smooth={true}
                  duration={200}
                  spy={true}
                  exact="true"
                  onClick={handleMenuToggle}
                >
                  Sign Up
                </Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        )}
      </Menu>

      <Button
        color="blue"
        icon="arrow up"
        onClick={handleScrollToTop}
        style={{ position: "fixed", bottom: "20px", right: "20px" }}
      />
    </div>
  );
}

export default Header;
