import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

const Home = (props) => {
    const {dish, promotion, leader, dishesLoading, dishesErrMess, promosLoading, promosErrMess} = props

    const renderCard = (item, loader, error) => {
        if (loader) {
            return(
                <Loading />
            );
        }
        else if (error) {
            return(
                <h4>{error}</h4>
            );
        }
        else 
          return(
            <Card>
            <CardImg src={baseUrl + item.image} alt={item.name} />
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
                    {renderCard(dish, dishesLoading, dishesErrMess)}                
                </div>
                <div className="col-12 col-md m-1">
                    {renderCard(promotion, promosLoading, promosErrMess)}
                </div>
                <div className="col-12 col-md m-1">
                    {leader ? renderCard(leader) : ''}
                </div>
            </div>
        </div>
    )
}

export default Home; 