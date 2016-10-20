import * as types from '../constants/ActionTypes';

export function onIncrement() {
  return {
    type: types.INCREMENT
  }
}

export function onDecrement(){
  return {
    type: types.DECREMENT
  }
}
