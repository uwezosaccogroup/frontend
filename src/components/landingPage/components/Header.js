import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-scroll";
import '../../../App.css'
import "semantic-ui-css/semantic.min.css";

function Header() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="header">
      <Menu className="menu">
        <Menu.Item header>
          Uwezo<span>Sacco</span>
        </Menu.Item>

        <Menu.Item>
          <Link
            to="section1"
            smooth={true}
            duration={200}
            spy={true}
            exact="true"
          >
            About Us
          </Link>
        </Menu.Item>

        <Menu.Item>
          <Link
            to="section2"
            smooth={true}
            duration={150}
            spy={true}
            exact="true"
          >
            Services
          </Link>
        </Menu.Item>

        <Menu.Item>
          <Link
            to="section3"
            smooth={true}
            duration={200}
            spy={true}
            exact="true"
          >
            Faqs
          </Link>
        </Menu.Item>

        <Menu.Item>
          <Link
            to="section4"
            smooth={true}
            duration={200}
            spy={true}
            exact="true"
          >
            Sign Up
          </Link>
        </Menu.Item>
      </Menu>

      <button onClick={handleScrollToTop}>Scroll to top</button>
    </div>
  );
}

export default Header;
