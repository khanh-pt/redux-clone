let initState = [
  'BMW',
  'PORSCHE'
];
export default function reducerCar(state = initState, action = {}){
  console.log('action', action);
  switch (action.type){
    case 'ADD':
      state.push(action.payload)
      return state;
      break;
    case 'REMOVE':
      state.pop();
      return state;
      break;
    default:
      return state;
  }
}


// reducer is a function
// has own state value
// change state through action.type and action.payload
// after all, return new state