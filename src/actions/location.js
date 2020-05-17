import { GET_USER_LOCATION } from './types';

export const getUserLocation = location => {
  return {
    type: GET_USER_LOCATION, 
    location
  }
}

// asynchronous requests 
export const getUserCoords = () => {
  return dispatch => {
    return window.navigator.geolocation.getCurrentPosition(
      position => dispatch(getUserLocation({latitude: position.coords.latitude,longitude: position.coords.longitude})),
      err => console.log({errorMessage: err.message})
    );
    }
  }
