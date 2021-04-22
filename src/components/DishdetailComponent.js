import React from "react";
import {  Card, CardImg, CardTitle, CardBody, CardText,} from "reactstrap";

const Detail = (props) => {
  const { click } = props;
 
  const renderDish = (plato) => {
    if (plato != null) {
      return (
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            <Card>
              <CardImg top src={plato.image} alt={plato.name} />
              <CardBody>
                <CardTitle>{plato.name}</CardTitle>
                <CardText>{plato.description}</CardText>
              </CardBody>
            </Card>
          </div>
          {renderComments(plato)}          
        </div>
      );
    } else {
      return <div></div>;
    }
  };

  const renderComments = (plato) => {
    return(
      <div className="col-12 col-md-5 m-1">
            <h4>Comments</h4>
            <ul className="list-unstyled">
              {plato.comments.map((value, index) => (
                <div key={index}>
                  <li>{value.comment}</li>
                  <p>
                    --{value.author}
                    <span>,{value.date}</span>
                  </p>
                </div>
              ))}
            </ul>
          </div>
    )
    
  }

  
  return(
    <div>{renderDish(click)}</div>
  )
};

export default Detail;
