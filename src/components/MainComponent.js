import React, { useEffect } from "react";
import HomeComponent from "./HomeComponent";
import MenuComponent from "./MenuComponent";
import ContactComponent from "./ContactComponent";
import DishdetailComponent from "./DishdetailComponent";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import AboutComponent from "./AboutComponent";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { postComment, fetchComments, fetchDishes, fetchPromos, fetchLeaders, postFeedback } from "../redux/ActionCreators";
import { actions } from 'react-redux-form';

// esta transforma el estado actual del store en los props que se dean pasar a un componente 
const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    leaders: state.leaders,
    promotions: state.promotions,
  };
};

let postFeedbacks;
let fetchLeader;
let fetchComment;
let fetchProm;
let resetFeedbackForm;
let fetchDish;
let postComments;


const mapDispatchToProps = (dispatch) => {
  postComments = (dishId, rating, author, comment) => {
    dispatch(postComment(dishId, rating, author, comment));
  };
  fetchDish = () => dispatch(fetchDishes())
  resetFeedbackForm = () => dispatch(actions.reset('feedback'))
  fetchComment = () => dispatch(fetchComments())
  fetchProm = () => dispatch(fetchPromos())
  fetchLeader = () => dispatch(fetchLeaders())
  postFeedbacks = (firstName, lastName, contact, email, agree, contactType, message) => {
    dispatch(postFeedback(firstName, lastName, contact, email, agree, contactType, message));
  }
};

function Main(props) {
  const { dishes, comments, leaders, promotions } = props;

  useEffect(() => {
    fetchDish();
    fetchComment();
    fetchProm();
    fetchLeader();
  }, []);

  console.log(`dishLoandig Main: ${dishes.isLoading}`)

  const HomePage = () => {
    return (
      <HomeComponent
        dish={dishes.dishes.filter((value) => value.featured)[0]}
        dishesLoading={dishes.isLoading}
        dishesErrMess={dishes.errMess}
        promotion={promotions.promotions.filter((value) => value.featured)[0]}
        promosLoading={promotions.isLoading}
        promosErrMess={promotions.errMess}

        leader={leaders.leaders.filter((value) => value.featured)[0]}
        leaderLoading={leaders.isLoading}
        leaderErrMess={leaders.errMess}
      />
    );
  };
  const DishWithId = ({ match }) => {
    return (
      <DishdetailComponent
        datos={comments}
        plato={
          dishes.dishes.filter(
            (value) => value.id === parseInt(match.params.dishId, 10)
          )[0]
        }
        isLoading={dishes.isLoading}
        errMess={dishes.errMess}
        comentario={comments.comments.filter(
          (value) => value.dishId === parseInt(match.params.dishId, 10)
        )}
        commentsErrMess={comments.errMess}
        post={postComments}
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
              <Route exact path="/contactus" component={() => <ContactComponent resetFeedbackForm={resetFeedbackForm} postFeedback={postFeedbacks}/>}  />
              <Route
                exact
                path="/aboutus"
                component={() => <AboutComponent leader={leaders.leaders} aboutLoading={leaders.isLoading}
                aboutErrMess={leaders.errMess}/>}
              />
              <Redirect to="/home" />
            </Switch>                
      <FooterComponent />
    </div>
  );
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
