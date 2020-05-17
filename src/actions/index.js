import {
  SIGN_IN, 
  SIGN_OUT, 
  GET_COORDS
} from './types';

export const signIn = (userId) => {
  return {
    type: SIGN_IN, 
    payload: userId
  }
}

export const signOut = () => {
  return {
    type: SIGN_OUT
  }
}

export const getCoords = () => {
  return {
    type: GET_COORDS
  }
}