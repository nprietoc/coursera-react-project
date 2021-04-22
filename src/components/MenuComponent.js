import React, { useState } from "react";
import DishdetailComponent from "../../src/components/DishdetailComponent";
import {  Card, CardImg, CardImgOverlay, CardTitle} from "reactstrap";

const Menu = (props) => {
  const { inform } = props;
  const [objetoSeleccionado, setObjetoSeleccionado] = useState(null);  

  const cambioEstado = (dish) => {
    setObjetoSeleccionado(dish);
  };

  return (
    <div className="container">
      <div className="row">
        {inform.map((item, index) => (
          <div key={index} className="col-12 col-md-5 m-1">
            <Card onClick={() => cambioEstado(item)}>
              <CardImg width="100%" src={item.image} alt={item.name}></CardImg>

              <CardImgOverlay>
                <CardTitle>{item.name}</CardTitle>
              </CardImgOverlay>
            </Card>
          </div>
        ))}
      </div>
      <div>
        <DishdetailComponent click={objetoSeleccionado}/>
      </div>
    </div>
  );
};

export default Menu;
