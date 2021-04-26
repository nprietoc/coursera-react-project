import React from "react";
import {
  Card,
  CardImg,
  CardTitle,
  CardBody,
  CardText,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";

const Detail = (props) => {
  const { data, plato, comentario } = props;

  const renderDish = () => {
    if (plato != null) {
      return (
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            <Breadcrumb>
              <BreadcrumbItem>
                <Link to="/menu">Menu</Link>
              </BreadcrumbItem>
              <BreadcrumbItem>{plato.name}</BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12">
              <h3>{plato.name}</h3>
              <hr />
            </div>
            <Card>
              <CardImg top src={plato.image} alt={plato.name} />
              <CardBody>
                <CardTitle>{plato.name}</CardTitle>
                <CardText>{plato.description}</CardText>
              </CardBody>
            </Card>
          </div>
          {renderComments(data)}
        </div>
      );
    } else {
      return <div></div>;
    }
  };

  const renderComments = () => {
    return (
      <div className="col-12 col-md-5 m-1">
        <h4>Comments</h4>
        <ul className="list-unstyled">
          {comentario.map((value, index) => (
            <div key={index}>
              <li>{value.comment}</li>
              <p>
                --{value.author}
                <span>
                  ,
                  {new Intl.DateTimeFormat("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "2-digit",
                  }).format(new Date(Date.parse(value.date)))}
                </span>
              </p>
            </div>
          ))}
        </ul>
      </div>
    );
  };

  return <div className="container">{renderDish()}</div>;
};

export default Detail;
