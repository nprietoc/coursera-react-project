import React, {useState} from "react";
import { Card, CardImg, CardTitle, CardBody, CardText, Breadcrumb, BreadcrumbItem, Button, Label, Col, Row, Modal, ModalBody, ModalHeader} from "reactstrap";
import { Link } from "react-router-dom";
import { Control, LocalForm, Errors} from 'react-redux-form';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

const need = (val) => val && val.length;
const maxrequired = (len) => (val) => !(val) || (val.length <= len);
const minrequired = (len) => (val) => val && (val.length >= len);

const Detail = (props) => {
  const { datos, plato, comentario, post, dishId, isLoading, errMess, commentsErrMess } = props;
  const [ estadoTog, setEstadoTog ] = useState(false);
  
  const CambioTog = () => {
    setEstadoTog(!estadoTog)
  }

  function handleSubmit(values) {
    post(dishId, values.rating, values.author, values.comment);
    console.log(values)    
  }

  const CommentForm = (item) => {    
    return(
      <div>
        <Button outline onClick={() => CambioTog()}>
          <span className="fa fa-pencil"></span>
          Submit Comment
        </Button>
        <Modal isOpen={estadoTog} toggle={() => CambioTog()}>
          <ModalHeader>Submit Comment</ModalHeader>
          <ModalBody>
          <LocalForm onSubmit={(values) => handleSubmit(values)}>
            <Row className="form-group">
              <Label htmlFor="rating" md={12}>
                Rating
              </Label>                
              <Col>
                <Control.select
                  model=".rating"                    
                  name="rating"                    
                  className="form-control">
                  <option></option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Control.select>
              </Col>
            </Row>              
            <Row className="form-group">
              <Label htmlFor="author" md={12}>
                Your Name
              </Label>
              <Col>
                <Control.text
                  model=".author"
                  id="author"
                  name="author"
                  placeholder="Your Name"
                  className="form-control"
                  validators={{
                    need,
                    minrequired: minrequired(3),
                    maxrequired: maxrequired(15)
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".author"
                  show="touched"
                  messages={{
                    need: 'Required',
                    minrequired: 'Must be greater than 3 characters',
                    maxrequired: 'Must be 15 characters or less'
                  }}
                  />
              </Col>
            </Row>              
            <Row className="form-group">
              <Label htmlFor="comment" md={12}>
                Comment
              </Label>
              <Col md={12}>
                <Control.textarea
                  model=".message"
                  id="message"
                  name="message"
                  rows="6"
                  className="form-control"
                />
              </Col>
            </Row>
            <Row className="form-group">
              <Col>
                <Button type="submit" color="primary">
                  Submit
                </Button>
              </Col>
            </Row>
          </LocalForm>
          </ModalBody>
          </Modal>
        </div>
    )
  }

  const renderDish = (load, error) => {
    if (load) {
      return(
          <div className="container">
              <div className="row">            
                  <Loading />
              </div>
          </div>
      );
  }
  else if (error) {
      return(
          <div className="container">
              <div className="row">            
                  <h4>{error}</h4>
              </div>
          </div>
      );
  }
  else if (plato != null) {
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
              <CardImg top src={baseUrl + plato.image} alt={plato.name} />
              <CardBody>
                <CardTitle>{plato.name}</CardTitle>
                <CardText>{plato.description}</CardText>
              </CardBody>
            </Card>
          </div>
          {renderComments(datos)}
        </div>
      );
    } else {
      return <div></div>;
    }
  };

  const renderComments = (post) => {
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
        {CommentForm(post)}
      </div>
    );
  };

  return <div className="container">{renderDish(isLoading, errMess)}</div>;
};

export default Detail;
