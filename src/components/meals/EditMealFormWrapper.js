import React from 'react';
import { updateMeal, deleteMeal, createMeal } from '../../actions/myMeals'; 
import {  setFormDataForEdit, resetMealForm } from '../../actions/mealForm';
import { connect } from 'react-redux';
import MealForm from './MealForm';
import {v1 as uuid} from 'uuid';
import { Link } from 'react-router-dom';
import { format } from 'date-fns'

class EditMealFormWrapper extends React.Component {
  componentDidMount() { 
    if (this.props.mealType === 'recipe'){
      let meal = {
        attributes: {
          name: this.props.renderedMeal.title,
          meal_type: '',
          kind: 'recipe',
          description: '',
          url: this.props.renderedMeal.source_url,
          date: format(new Date(), 'MM-dd-yyyy')
        }
      }
      meal && this.props.setFormDataForEdit(meal)
    } else if (this.props.mealType === 'restaurant') {
        let meal = {
          attributes: {
            name: this.props.renderedMeal.name,
            meal_type: '',
            kind: 'restaurant',
            description: '',
            url: this.props.renderedMeal.url,
            date: format(new Date(), 'MM-dd-yyyy')
          }
        }
        meal && this.props.setFormDataForEdit(meal)
     } else {
      this.props.meal && this.props.setFormDataForEdit(this.props.meal)
    }
  }

  componentDidUpdate(prevProps) {
    this.props.meal && !prevProps.meal && this.props.setFormDataForEdit(this.props.meal)
  }

  componentWillUnmount() {
    this.props.resetMealForm() 
  }

  handleSubmit = (event, formData ) => {
     const { updateMeal, createMeal, meal, userId, listId } = this.props
     let mealId = !this.props.renderedMeal ? meal.id : uuid()
    event.preventDefault()
    if(this.props.pulledRecipe === true) {
      createMeal({
        ...formData, 
        mealId, 
        userId, 
        listId
      })
    } else {
       updateMeal({
        ...formData,
        mealId,  
        userId
        })
    }     
  }  

  render() {
    const { meal } = this.props
    const mealId = meal ? meal.id : null
    return (
      <div>
        <>
          <MealForm editMode renderedMeal={this.props.renderedMeal} handleSubmit={this.handleSubmit} />
          <br/>
          <Link className="ui negative button" meal={meal} to={`/meals/delete/${mealId}`}><h5>Delete this meal</h5></Link>
        </>
      </div>
    );
    }
  }

  const mapStateToProps = state => {
    const userId =  state.currentUser ? state.currentUser.currentUser.data.id : ""
    return {
      userId
    }
  }

export default connect(mapStateToProps, { updateMeal, setFormDataForEdit, resetMealForm, deleteMeal, createMeal })(EditMealFormWrapper);
