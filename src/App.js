import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import './App.css'
import ListCard from './components/lists/ListCard';
import MealCard from './components/meals/MealCard';
import FetchRestaurants from './components/restaurants/FetchRestaurants';
import FetchRecipes from './components/recipes/FetchRecipes';
import Header from './components/Header';
import Login from './components/user/Login';
import Signup from './components/user/SignUp';
import MyLists from './components/lists/MyLists';
import Home from './components/Home';
import history from './history';
import { connect } from 'react-redux'; 
import { getCurrentUser, getUserCoords } from './actions/currentUser';
import { setFormDataForEdit } from './actions/listForm';
import NewListFormWrapper from './components/lists/NewListFormWrapper';
import EditListFormWrapper from './components/lists/EditListFormWrapper';
import EditMealFormWrapper from './components/meals/EditMealFormWrapper';
import GoogleMaps from './apis/GoogleMaps';
import ListDelete from './components/lists/ListDelete'
import MealDelete from './components/meals/MealDelete'


class App extends React.Component {
  
  componentDidMount() {
    this.props.getCurrentUser()
    this.props.getUserCoords()
    window.scrollTo(0, 0)
  }

  render() {
    const { loggedIn, lists, meals } = this.props
    return(
      <Router history={history}>
        <div className="app">
          {loggedIn ? <Header location={this.props.location} /> : <Header /> }
          <Switch>
            <Route path="/map" exact component={GoogleMaps} />
            <Route path="/restaurants" exact component={FetchRestaurants} />
            <Route path="/recipes" exact component={FetchRecipes} />
            <Route path="/" exact component={Home} />
            <Route path="/login" exact component={Login} />
            <Route path="/signup" exact component={Signup} /> 
            <Route path="/lists" exact component={MyLists} />
            <Route path="/lists/new" exact component={NewListFormWrapper} />
            <Route path="/lists/:id" exact render={props => {
              const list = lists.find(list => list.id === props.match.params.id)
              return <ListCard listId={props.match.params.id} list={list} />
              }
              }/>
              <Route path="/lists/:id/edit" exact render={props => {
              const list = lists.find(list => list.id === props.match.params.id)
              return <EditListFormWrapper list={list} />
              }
              }/>
              <Route path="/lists/delete/:id" exact render={props => {
                const list = lists.find(list => list.id === props.match.params.id)
                return <ListDelete list={list} />
              }} />
              <Route path="/meals/:id" exact render={props => {
              const meal = meals ? meals.find(meal => meal.id === props.match.params.id) : null
              return <MealCard  meal={meal} />
              }
              }/>
              <Route path="/meals/:id/edit" exact render={props => {
              const meal = meals ? meals.find(meal => meal.id === props.match.params.id) : null
              return <EditMealFormWrapper meal={meal} />
              }
              }/>
              <Route path="/meals/delete/:id" exact render={props => {
                const meal = meals.find(meal => meal.id === props.match.params.id)
                return <MealDelete meal={meal} />
              }} />
          </Switch>
        </div>
      </Router>
    )
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: !!state.currentUser, 
    lists: state.myLists, 
    meals: state.myMeals
  }
}

export default connect(mapStateToProps, { getCurrentUser, setFormDataForEdit, getUserCoords })(App);
