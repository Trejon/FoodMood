import React from 'react'; 
import { updateMealForm } from '../../actions/mealForm';
import { connect } from 'react-redux';


const MealForm = ({ formData, updateMealForm, handleSubmit, editMode }) => {
  const { name, kind, meal_type, description, url, meal_date } = formData

  const handleChange = event => {
    const { name, value} = event.target
    updateMealForm(name, value)
  } 
  
  return (
    <form className="ui form" onSubmit={event => handleSubmit(event, formData)}> 
      <input 
        name="name"
        onChange={handleChange}
        value={name}
        placeholder="Name"
        autoComplete="off"
        required
      /><br /><br/>
      <input 
        name="kind"
        onChange={handleChange}
        value={kind}
        placeholder="Restaurant or Recipe?"
        autoComplete="off"
      /><br /><br/>
      <input 
        name="meal_type"
        onChange={handleChange}
        value={meal_type}
        placeholder="Breakfast, Brunch, Lunch, Snack or Dinner?"
        autoComplete="off"
      /><br /><br/>
      <input 
        name="description"
        onChange={handleChange}
        value={description}
        placeholder="Description"
        autoComplete="off"
      /><br /><br/>
      <input 
        name="url"
        onChange={handleChange}
        value={url}
        placeholder="Link to Recipe or Restaurant?"
        autoComplete="off"
      /><br /><br/>
      <input type="date"
        name="meal_date"
        onChange={handleChange}
        value={meal_date}
        placeholder="Date"
        autoComplete="off"
      /><br /><br/>
      <button className="ui primary button" type="submit">{editMode ? "Add Meal" : "Create Meal"}</button>
    </form>
  )
}

const mapStateToProps = state => {
  const userId =  state.currentUser ? state.currentUser.currentUser.data.id : ""
  return {
    formData: state.MealForm, 
    userId
  }
}

export default connect(mapStateToProps, { updateMealForm })(MealForm);