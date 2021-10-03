let initState = 0;
export default function reducerCounter(state = initState, action = {}){
  console.log('action', action);
  switch (action.type){
    case 'INCREMENT':
      console.log('state', state);
      return state + action.payload;
      break;
    case 'DECREMENT':
      return state - action.payload;
      break;
    default:
      return state;
  }
}


// reducer is a function
// has own state value
// change state through action.type and action.payload
// after all, return new state