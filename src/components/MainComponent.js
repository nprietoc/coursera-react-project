import React from "react";
import HomeComponent from "./HomeComponent";
import MenuComponent from "./MenuComponent";
import ContactComponent from "./ContactComponent";
import DishdetailComponent from "./DishdetailComponent";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import AboutComponent from "./AboutComponent";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { addComment } from "../redux/ActionCreators";

const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    leaders: state.leaders,
    promotions: state.promotions,
  };
};
let addComments;
const mapDispatchToProps = (dispatch) => {
  addComments = (dishId, rating, author, comment) => {
    dispatch(addComment(dishId, rating, author, comment));
    
  };
};

function Main(props) {
  const { dishes, comments, leaders, promotions } = props;

  const HomePage = () => {
    return (
      <HomeComponent
        dish={dishes.filter((value) => value.featured)[0]}
        promotion={promotions.filter((value) => value.featured)[0]}
        leader={leaders.filter((value) => value.featured)[0]}
      />
    );
  };
  const DishWithId = ({ match }) => {
    return (
      <DishdetailComponent
        datos={comments}
        plato={
          dishes.filter(
            (value) => value.id === parseInt(match.params.dishId, 10)
          )[0]
        }
        comentario={comments.filter(
          (value) => value.dishId === parseInt(match.params.dishId, 10)
        )}
        addComment={addComments}
        dishId={parseInt(match.params.dishId, 10)}
      />
    );
  };

  return (
    <div>
      <HeaderComponent />
      <Switch>
        <Route path="/home" component={() => HomePage()} />
        <Route
          exact
          path="/menu"
          component={() => <MenuComponent inform={dishes} />}
        />
        <Route path="/menu/:dishId" component={DishWithId} />
        <Route exact path="/contactus" component={ContactComponent} />
        <Route
          exact
          path="/aboutus"
          component={() => <AboutComponent leader={leaders} />}
        />
        <Redirect to="/home" />
      </Switch>
      <FooterComponent />
    </div>
  );
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
