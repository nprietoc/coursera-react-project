import React from "react";
import HomeComponent from "./HomeComponent";
import MenuComponent from "./MenuComponent";
import ContactComponent from './ContactComponent';
import DishdetailComponent from "./DishdetailComponent";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import { DISHES } from "../shared/dishes";
import { COMMENTS } from "../shared/comments";
import { LEADERS } from "../shared/leaders";
import { PROMOTIONS } from "../shared/promotions";
import { Switch, Route, Redirect } from 'react-router-dom';

function Main() {
  const HomePage = () => {
    return(
        <HomeComponent dish={DISHES.filter((value) => value.featured)[0]}
        promotion={PROMOTIONS.filter((value) => value.featured)[0]}
        leader={LEADERS.filter((value) => value.featured)[0]}
        />
    );
  }
  const DishWithId = ({match}) => {
    return(
      <DishdetailComponent data={COMMENTS} plato={DISHES.filter((value) => value.id === parseInt(match.params.dishId,10))[0]} 
        comentario={COMMENTS.filter((value) => value.dishId === parseInt(match.params.dishId,10))} />
  );
  }
  
  return (
    <div>
      <HeaderComponent />
      <Switch>
        <Route path="/home" component={HomePage} />
        <Route exact path="/menu" component={() => <MenuComponent inform={DISHES} />}/>
        <Route path="/menu/:dishId" component={DishWithId}/>
        <Route exact path="/contactus" component={ContactComponent} />
        <Redirect to="/home" />
      </Switch>      
      <FooterComponent />
    </div>
  );
}

export default Main;
