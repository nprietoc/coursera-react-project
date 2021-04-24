import React, { Fragment, useState } from "react";
import {  Navbar,  NavbarBrand,  Nav,  NavbarToggler,  Collapse,  NavItem,  Jumbotron,} from "reactstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [estadoOpen, setEstadoOpen] = useState(false)

  const CambioEstado = () => {
    setEstadoOpen(!estadoOpen)
  }

  return (
    <Fragment>
      {/* md es para que se muestre la barra de navegacion en tamaños grandes, en pequeños se utiliza collpse */}
      <Navbar dark expand="md">
        <div className="container">
          <NavbarToggler onClick={() => CambioEstado()}/>
          <NavbarBrand className="mr-auto" href="/">
            <img
              src="assets/images/logo.png"
              height="30"
              width="41"
              alt="Ristorante Con Fusion"
            ></img>
          </NavbarBrand>

          <Collapse isOpen={estadoOpen} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink className="nav-link" to="/home">
                  <span className="fa fa-home da-lg"></span> Home
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink className="nav-link" to="/aboutus">
                  <span className="fa fa-info da-lg"></span> About Us
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink className="nav-link" to="/menu">
                  <span className="fa fa-list da-lg"></span> Menu
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink className="nav-link" to="/contactus">
                  <span className="fa fa-address-card da-lg"></span> Contact Us
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>

      <Jumbotron>
        <div className="container">
          <div className="row row-header">
            <div className="col-12 col-sm-6">
              <h1>Ristorante con Fusion</h1>
              <p>
                We take inspiration from the World's best cuisines, and create a
                unique fusion experience. Our lipsmacking creations will tickle
                your culinary senses!
              </p>
            </div>
          </div>
        </div>
      </Jumbotron>
    </Fragment>
  );
};

export default Header;
