import React from "react";
import HomeComponent from "./HomeComponent";
import MenuComponent from "./MenuComponent";
import DishdetailComponent from "./DishdetailComponent";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import { DISHES } from "../shared/dishes";
import { Switch, Route, Redirect } from 'react-router-dom';

function Main() {
  const HomePage = () => {
    return(
        <HomeComponent />
    );
  }
  
  return (
    <div>
      <HeaderComponent />
      <Switch>
        <Route path="/home" component={HomePage} />
        <Route exact path="/menu" component={() => <MenuComponent inform={DISHES} />}/>
        <Redirect to="/home" />
      </Switch>      
      <FooterComponent />
    </div>
  );
}

export default Main;
