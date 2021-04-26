import React from "react";
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem,} from "reactstrap";
import { Link } from "react-router-dom";


const Menu = (props) => {
  const { inform } = props;
  
  const menuItem = () => {
    return (
      <div className="col-12 col-md-5 m-1">
        {inform.map((item, index) => (
          <Card key={index}>
             <Link to={`/menu/${item.id}`}>
               <CardImg
                 width="100%"
                 src={item.image}
                 alt={item.name}
               ></CardImg>
               <CardImgOverlay>
                 <CardTitle>{item.name}</CardTitle>
               </CardImgOverlay>
             </Link>
          </Card>          
        ))}
      </div>
    );
  }


  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/home">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Menu</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>Menu</h3>
          <hr />
        </div>
      </div>
      <div className="row">{menuItem()}</div>
    </div>
  );
}

export default Menu;
