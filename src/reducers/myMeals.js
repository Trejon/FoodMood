export default (state = null, action) => {
  switch(action.type) {
    case "SET_MY_MEALS":
      return action.meals
    case "ADD_MEAL": 
      return state.concat(action.meal)
    case "UPDATE_MEAL": 
      return state.map(meal => meal.id === action.meal.id ? action.meal : meal)
    case "DELETE_MEAL": 
      return state.filter(meal => meal.id === action.mealId ? false : true)
    case "CLEAR_MEALS": 
      return null 
    default: 
      return state
  }
}  