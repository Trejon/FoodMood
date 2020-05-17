import { UPDATE_MEAL_FORM, RESET_MEAL_FORM, SET_MEAL_FORM_DATA_FOR_EDIT } from './types';

// synchronous
export const updateMealForm = (name, value) => {
  const formData = { name, value }
  return {
    type: UPDATE_MEAL_FORM,
    formData
  }
}

export const resetMealForm = () => {
  return {
    type: RESET_MEAL_FORM
  }
}

export const setFormDataForEdit = meal => {
  const mealFormData = {
    name: meal.attributes.name, 
    kind: meal.attributes.kind, 
    meal_type: meal.attributes.meal_type,
    description: meal.attributes.description,
    url: meal.attributes.url, 
    meal_date: meal.attributes.meal_date
  }
  return {
    type: SET_MEAL_FORM_DATA_FOR_EDIT, 
    mealFormData
  }
}
