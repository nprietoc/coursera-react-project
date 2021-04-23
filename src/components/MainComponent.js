import React, { useState } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import MenuComponente from "./MenuComponent";
import DishdetailComponent from "../../src/components/DishdetailComponent";
import { DISHES } from "../shared/dishes";

function Main() {
  const [data, SetData] = useState(null);

  const cambioEstado = (dish) => {
    SetData(dish);
  };

  return (
    <div>
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Ristorante con Fusion</NavbarBrand>
        </div>
      </Navbar>

      <MenuComponente inform={DISHES} onClick={(dish) => cambioEstado(dish)} />
      <DishdetailComponent click={DISHES.filter((value) => value.id === data)[0]}/>
    </div>
  );
}

export default Main;
