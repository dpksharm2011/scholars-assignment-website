import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const menuItems = [
  { label: "HOME", to: "/" },
  { label: "ABOUT", to: "/about" },
  { label: "SERVICES", to: "/services" },
  { label: "DISSERTATION", to: "/dissertation" },
  { label: "EDITING", to: "/editing" },
  // { label: "PRICING", to: "/pricing" },
  // { label: "ORDER FORM", to: "/order-form" },
  // { label: "COUNTRY", to: "/country" },
  { label: "CONTACT", to: "/contact" },
  { label: "TERMS & CONDITIONS", to: "/terms" },
   
];

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="site-header">

      {/* =========================
          TOP HEADER
      ========================== */}

      <div className="header-top">

        <div className="logo-section">

          <div className="logo-mark">
            🎓
          </div>

          <div className="logo-content">

            <h1>
              Scholars Assignment Mate
            </h1>

            <p>
              Simple Prices. Good Assignments. Better Grades.
            </p>

          </div>

        </div>


        {/* Header Contact */}

        <div className="header-contact">
{/* 
          <a href="/blogs" className="header-item">
            <span className="header-icon">
              ▤
            </span>

            <span>Blogs</span>
          </a> */}


          <a href="#" className="header-item">

            <span className="header-icon skype">
              S
            </span>

            <span>
              scholarsassignmentmate@gmail.com
            </span>

          </a>


          <a
            href="tel:+91207558165"
            className="header-item"
          >

            <span className="header-icon phone">
              ☎
            </span>

            <span>
              +91 9625586206
            </span>

          </a>

        </div>

      </div>


      {/* =========================
          NAVIGATION
      ========================== */}

      <nav className="main-navigation">

        <div className="nav-container">

          {/* Desktop Menu */}

          <div
            className={`nav-menu ${
              mobileMenuOpen ? "open" : ""
            }`}
          >

            {menuItems.map((item) => (

              <Link
                key={item.label}
                to={item.to}
                className={`nav-link ${
                  item.label === "HOME"
                    ? "active"
                    : ""
                }`}
                onClick={() =>
                  setMobileMenuOpen(false)
                }
              >
                {item.label}
              </Link>

            ))}

          </div>


          {/* Mobile Menu Button */}

          <button
            className="mobile-menu-button"
            onClick={() =>
              setMobileMenuOpen(!mobileMenuOpen)
            }
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

        </div>

      </nav>

    </header>
  );
}

export default Header;