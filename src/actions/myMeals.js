import history from '../history';
import { resetMealForm } from './mealForm';
import { SET_MY_MEALS, CLEAR_MEALS, ADD_MEAL, DELETE_MEAL, UPDATE_MEAL } from './types';

export const setMyMeals = meals => {
  return {
    type: SET_MY_MEALS,
    meals
  }
}

export const clearMeals = () => {
  return {
    type: CLEAR_MEALS, 
  }
}

export const addMeal = meal => {
  return {
    type: ADD_MEAL, 
    meal
  }
} 

export const deleteMealSuccess = mealId => {
  return {
    type: DELETE_MEAL, 
    mealId
  }
} 

export const updateMealSuccess = meal => {
  return {
    type: UPDATE_MEAL, 
    meal
  }
} 

// Asynchronous actions

 export const getMyMeals = () => {
   return dispatch =>  {
    return fetch("http://localhost:3001/api/v1/meals", {
      credentials: "include", 
      method: "GET", 
      headers: {
        "Content-Type": "application/json"
      }, 
    })
    .then(res => res.json())
    .then(response => {
      if (response.error) {
        alert(response.error)
      } else {
        dispatch(setMyMeals(response.data))
      }
    })
    .catch(console.log)
  }
} 

export const createMeal = mealData => {
  return dispatch => { 
    const sendableMealData = {
        name: mealData.name, 
        kind: mealData.kind, 
        meal_type: mealData.meal_type, 
        description: mealData.description, 
        url: mealData.url, 
        meal_date: mealData.meal_date,
        user_id: mealData.userId, 
        list_id: mealData.listId
    }
    return fetch("http://localhost:3001/api/v1/meals", {
      credentials: 'include', 
      method: 'POST', 
      headers: {
        "Content-Type": "application/json"
      }, 
      body: JSON.stringify(sendableMealData)
    })
    .then(res => res.json())
    .then(response => {
      if (response.error) {
        alert(response.error)
      } else {
        dispatch(addMeal(response.data))
        dispatch(resetMealForm())
        history.push(`/meals/${response.data.id}`)
        // Go somewhere else ---> meal show
        // add the new meal to the store 
      }
    })
    .catch(console.log)
  }
} 
 
export const updateMeal = mealData => {
  return dispatch => { 
    const sendableMealData = {
        name: mealData.name, 
        kind: mealData.kind, 
        meal_type: mealData.meal_type, 
        description: mealData.description, 
        url: mealData.url, 
        meal_date: mealData.meal_date,
    }
    return fetch(`http://localhost:3001//api/v1/meals/${mealData.mealId}`, {
      credentials: 'include', 
      method: "PATCH", 
      headers: {
        "Content-Type": "application/json"
      }, 
      body: JSON.stringify(sendableMealData)
    })
    .then(res => res.json())
    .then(response => {
      if (response.error) {
        alert(response.error)
      } else {
        dispatch(updateMealSuccess(response.data))
        history.push(`/meals/${response.data.id}`)
        // Go somewhere else ---> meal show
        // add the new meal to the store 
      }
    })
    .catch(console.log)
  }
} 

export const deleteMeal = mealId => {
  return dispatch => { 
    return fetch(`http://localhost:3001/api/v1/meals/${mealId}`, {
      credentials: 'include', 
      method: "DELETE", 
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(res => res.json())
    .then(response => {
      if (response.error) {
        alert(response.error)
      } else {
        dispatch(deleteMealSuccess(mealId))
        history.push('/lists')
        // Go somewhere else ---> meal show
        // add the new meal to the store 
      }
    })
    .catch(console.log)
  }
}