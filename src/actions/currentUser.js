import { SET_CURRENT_USER, GET_USER_LOCATION, CLEAR_CURRENT_USER } from './types';
import { getMyLists, clearLists } from './myLists';
import { getMyMeals } from './myMeals';
import history from '../history';

export const getUserLocation = location => {
  return {
    type: GET_USER_LOCATION, 
    location
  }
}

export const setCurrentUser = user => {
  return {
    type: SET_CURRENT_USER,
    user
  }
}

 export const clearCurrentUser = () => {
  return  {
    type: CLEAR_CURRENT_USER
  }
 }


export const getUserCoords = () => {
  return dispatch => {
    return window.navigator.geolocation.getCurrentPosition(
      position => dispatch(getUserLocation({latitude: position.coords.latitude,longitude: position.coords.longitude})),
      err => console.log({errorMessage: err.message})
    );
    }
  }


export const login = credentials => {
  return dispatch => {
    return fetch("http://localhost:3001/api/v1/login", {
      credentials: "include",
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      }, 
      body: JSON.stringify(credentials)
    })
    .then(res => res.json())
    .then(user => {
      if (user.error) {
        alert(user.error)
      } else {
       dispatch(setCurrentUser(user))
       dispatch(getMyLists())
       dispatch(getMyMeals())
       history.push('/')
       // Get User location
      }
    })
    .catch(console.log)
  }
}

export const logout = () => {
  return dispatch => {
    dispatch(clearCurrentUser())
    dispatch(clearLists())
    return fetch('http://localhost:3001/api/v1/logout', {
      credentials: 'include', 
      method: 'DELETE'
    })
  }
}

export const signup = credentials => {
  return dispatch => {
    return fetch("http://localhost:3001/api/v1/signup", {
      credentials: "include",
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      }, 
      body: JSON.stringify(credentials)
    })
    .then(res => res.json())
    .then(user => {
      if (user.error) {
        alert(user.error)
      } else {
       dispatch(setCurrentUser(user))
       dispatch(getMyLists())
       dispatch(getMyMeals())
       history.push('/')
       // Get User location
      }
    })
    .catch(console.log)
  }
}

export const getCurrentUser = () => {
  return dispatch => {
    return fetch("http://localhost:3001/api/v1/get_current_user", {
      credentials: "include",
      method: 'GET', 
      headers: {
        'Content-Type': 'application/json'
      }, 
    })
    .then(res => res.json())
    .then(response => {
      if (response.error) {
        console.log(response.error)
      } else {
       dispatch(setCurrentUser(response))
       dispatch(getMyLists())
       dispatch(getMyMeals())
      }
    })
    .catch(console.log)
  }
}
