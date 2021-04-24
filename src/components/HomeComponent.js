import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap';

const Home = (props) => {
    const {dish, promotion, leader} = props

    const renderCard = (item) => {
        return(
            <Card>
            <CardImg src={item.image} alt={item.name} />
            <CardBody>
            <CardTitle>{item.name}</CardTitle>
            {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null }
            <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
        );
    }

    return(
        <div className="container">
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                    {dish ? renderCard(dish) : ''}                    
                </div>
                <div className="col-12 col-md m-1">
                    {promotion ? renderCard(promotion) : ''}
                </div>
                <div className="col-12 col-md m-1">
                    {leader ? renderCard(leader) : ''}
                </div>
            </div>
        </div>
    )
}

export default Home; 