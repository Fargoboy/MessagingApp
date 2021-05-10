import { combineReducers } from 'redux';
 
const INITIAL_STATE = {
  all_visitors: [
    {visitorName: "Professor", visitorEmail: "Professor@fhsu.edu", visitorPhone: "1800-999-9999"},
 ],
};
 
const visitorsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_VISITOR':  
        const { all_visitors } = state; // copy the state 
        const newState = {all_visitors: [...all_visitors, action.payload]};
        return newState; //return new state
    default:
      return state
  }
};
 
export default combineReducers({
  visitors: visitorsReducer
});