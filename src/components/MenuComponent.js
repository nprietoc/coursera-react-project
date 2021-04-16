import React, { useState } from "react";
import { Card, CardImg, CardImgOverlay, CardTitle, CardBody, CardText } from "reactstrap";

const Menu = (props) => {
  const { inform } = props;
  const [objeto, setObjeto] = useState({});

  const desplegar = (plato) => {
    if (plato != null) {
      return (
        <Card>
          <CardImg top src={plato.image} alt={plato.name} />
          <CardBody>
            <CardTitle>{plato.name}</CardTitle>
            <CardText>{plato.description}</CardText>
          </CardBody>
        </Card>
      );
    } else {
      return <div></div>;
    }
  };

  const cambioEstado = (dish) => {
    setObjeto(dish);
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
              <p></p>
            </Card>
          </div>
        ))}
      </div>
      <div className="row">
        <div className="col-12 col-md-5 m-1">{desplegar(objeto)}</div>
      </div>
    </div>
  );
};

export default Menu;
