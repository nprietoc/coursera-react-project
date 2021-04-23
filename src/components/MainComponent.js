import React, { useState } from "react";
import MenuComponente from "./MenuComponent";
import DishdetailComponent from "../../src/components/DishdetailComponent";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import { DISHES } from "../shared/dishes";

function Main() {
  const [data, SetData] = useState(null);

  const cambioEstado = (dish) => {
    SetData(dish);
  };

  return (
    <div>
      <HeaderComponent />
      <MenuComponente inform={DISHES} onClick={(dish) => cambioEstado(dish)} />
      <DishdetailComponent click={DISHES.filter((value) => value.id === data)[0]}/>
      <FooterComponent />
    </div>
  );
}

export default Main;
