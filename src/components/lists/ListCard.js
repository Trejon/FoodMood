import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import NewMealFormWrapper from '../meals/NewMealFormWrapper';
import EditMealFormWrapper from '../meals/EditMealFormWrapper';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import { getMyMeals } from '../../actions/myMeals'

class ListCard extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    const renderedMeal = this.props.location.query ? this.props.location.query.renderedMeal : null
    const mealType = this.props.location.query ? this.props.location.query.mealType : null
    const { list } = this.props

    const meals = list && this.props.myMeals ? this.props.myMeals.filter(meal => meal.attributes.list.id == this.props.listId) : null

    const listMeals = list && meals ? meals.map(meal => <li key={meal.id}><Link to={`/meals/${meal.id}`}><h5>{meal.attributes.name}</h5></Link></li>) : null

    return (
      this.props.list ?  
          <div>
            <div className="ui one column grid">
              <div className="column">
                <div className="ui fluid card">
                  <div className="content">
                    <div className="header"><h3>{list.attributes.name}</h3></div>
                    <h4>Restaurants and Recipes:</h4>
                    <ul>{listMeals}</ul>
                  </div>
                </div>
                <Link className="ui primary button" list={list} to={`/lists/${list.id}/edit`}><h5>Edit this list</h5></Link>
            </div>
          </div> 
          <h1>Add a new meal to this list:</h1>
           { renderedMeal ? <EditMealFormWrapper pulledRecipe mealType={mealType} renderedMeal={renderedMeal} list={list} listId={list.id}/> : <NewMealFormWrapper mealType={mealType} renderedMeal={renderedMeal} listId={list.id}/>  }
            </div>
          : 
          <p>This is the list card with no list!</p>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    myMeals: state.myMeals
  }
}

export default withRouter(connect(mapStateToProps, { getMyMeals })(ListCard));