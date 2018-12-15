import initialState from './initialState';
import {GET_CHAMPIONS, SET_CHAMPIONS} from '../actions/actionTypes';

export default function champions(state = initialState.champions, action) {
  let newState;
  switch (action.type) {
    case GET_CHAMPIONS:
      console.log('GET_CHAMPIONS Action')
      return action;
    case SET_CHAMPIONS:
      newState = action.champions;
      console.log('SET_CHAMPIONS Action')
      return newState;
    default:
      return state;
  }
}