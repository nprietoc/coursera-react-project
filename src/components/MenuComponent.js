import React, { useState } from "react";
import DishdetailComponent from "../../src/components/DishdetailComponent";
import {  Card, CardImg, CardImgOverlay, CardTitle, CardBody, CardText,} from "reactstrap";

const Menu = (props) => {
  const { inform } = props;
  const [objeto, setObjeto] = useState(null);

  const desplegar = (plato) => {
    if (plato != null) {
      return (
        <div className="row" >
          <div className="col-12 col-md-5 m-1">
          <Card>
            <CardImg top src={plato.image} alt={plato.name} />
            <CardBody>
              <CardTitle>{plato.name}</CardTitle>
              <CardText>{plato.description}</CardText>
            </CardBody>
          </Card>
          </div>
        
          
            <div className="col-12 col-md-5 m-1">
              <h4>Comments</h4>
              <ul className="list-unstyled">
                {plato.comments.map((value, index) => (
                  <div key={index}>
                    <li>{value.comment}</li>
                    <p>--{value.author}
                    <span>,{value.date}</span>
                    </p>                    
                  </div>                  
                ))}
              </ul>
            </div>
          
        </div>
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
            </Card>
          </div>
        ))}
      </div>
      <div>
        <DishdetailComponent detalle={desplegar(objeto)} info={inform} />
      </div>
    </div>
  );
};

export default Menu;
