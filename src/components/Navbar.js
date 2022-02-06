import React from "react";
import { Link } from "gatsby";
import logo from "../img/logo.svg";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: "",
    };
  }

  toggleHamburger() {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active",
            })
          : this.setState({
              navBarActiveClass: "",
            });
      }
    );
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand is-flex-direction-row">
              <Link to="/" title="Logo">
                <img src={logo} alt="Runakuna" style={{ width: "88px", padding: "0.25rem 0.5rem 0 0.5rem" }} />
              </Link>
              <div style={{
                    padding: "0.5rem 2rem 0.5rem 0",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center"
                  }}>
                <h4
                  className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-5-widescreen"
                  style={{
                    color: "black",
                    lineHeight: "1",
                    fontFamily:"Cormorant Garamond, serif",
                  }}
                >
                  Runakuna
                </h4>
                <h4 className="is-size-6-mobile is-size-6-tablet is-size-6-widescreen"
                  style={{
                    color: "black",
                    lineHeight: "1",
                    fontFamily:"Cormorant Garamond, serif",
                  }}
                >
                  Asesoría Jurídica
                </h4>
              </div>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              role="menuitem"
              tabIndex={0}
              onKeyPress={() => this.toggleHamburger()}
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item" to="/">
                Home
              </Link>
              <Link className="navbar-item" to="/about">
                Quienes somos
              </Link>
              <Link className="navbar-item" to="/products">
                Servicios
              </Link>
              <Link className="navbar-item" to="/blog">
                Blog
              </Link>
              <Link className="navbar-item" to="/contact">
                Contacto
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
