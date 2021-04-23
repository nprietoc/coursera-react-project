import React from "react";
import {  Card, CardImg, CardImgOverlay, CardTitle} from "reactstrap";

const Menu = (props) => {
  const { inform, onClick } = props;
  

  return (
    <div className="container">
      <div className="row">
        {inform.map((item, index) => (
          <div key={index} className="col-12 col-md-5 m-1">
            <Card onClick={() => onClick(item.id)}>
              <CardImg width="100%" src={item.image} alt={item.name}></CardImg>

              <CardImgOverlay>
                <CardTitle>{item.name}</CardTitle>
              </CardImgOverlay>
            </Card>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Menu;
