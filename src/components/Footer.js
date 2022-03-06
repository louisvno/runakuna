import * as React from "react";
import { Link } from "gatsby";

import instagram from "../img/social/instagram.svg";
import linkedin from "../img/social/linkedin.png";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-text-white-ter" style={{backgroundColor: "#13373f"}}>
        <div className="content has-text-white-ter" style={{backgroundColor: "#13373f"}}>
          <div className="container has-text-white-ter">
            <div style={{ maxWidth: "100vw" }} className="columns is-multiline has-text-centered">
              <div className="column is-12 social" style={{paddingLeft: "2em"}}>
                <a target="_blank" title="facebook" href="https://www.linkedin.com/in/asesoria-en-extranjer%C3%ADa-runakuna/">
                  <img
                    src={linkedin}
                    alt="Linkedin"
                    style={{ width: "1.2em", height: "1em" }}
                  />
                </a>
                <a target="_blank" title="instagram" href="https://instagram.com/asesoria.runakuna">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: "1.2em", height: "1em" }}
                  />
                </a>
              </div>
              </div>
              <div className="columns" style={{paddingTop: "0.75em", paddingBottom: "0.75em", maxWidth: "100vw"}}>
              <div className="column is-4 is-offset-2" style={{paddingTop: 0, paddingBottom: 0}}>
                <section >
                  <ul className="menu-list" style={{marginTop: 0}}>
                    <li>
                      <Link to="/" className="navbar-item">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/about">
                        Quienes somos
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/products">
                        Servicios
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4 is-offset-2" style={{paddingTop: 0, paddingBottom: 0}}>
                <section>
                  <ul className="menu-list" style={{marginTop: 0}}>
                    <li>
                      <Link className="navbar-item" to="/blog">
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact">
                        Contacto
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/legal">
                        Legal
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              </div>

          </div>
        </div>
        <div style={{display: 'flex', justifyContent: "end", width: "100%"}}>
          <a href="https://www.linkedin.com/in/louisvno/" style={{padding: '10px', fontSize: "11px", color: '#246d7d'}}>web development: Louis van Noorden</a>
        </div>
      </footer>
    );
  }
};

export default Footer;
