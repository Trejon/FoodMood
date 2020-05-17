import { combineReducers } from 'redux'; 
import locationReducer from './locationReducer';
import currentUser from './currentUser';
import myLists from './myLists';
import myMeals from './myMeals';
import ListForm from './listForm';
import MealForm from './mealForm';

export default combineReducers({
  location: locationReducer, 
  currentUser,  
  myLists, 
  myMeals,
  ListForm,
  MealForm
});