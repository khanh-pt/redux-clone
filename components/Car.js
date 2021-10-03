import { add, remove } from '../actions/actionCar.js';
import { connect } from '../carStore.js';
import html from '../utils.js';

const connector = connect();
console.log('connector', connector);

function Car(state){
  console.log('props', state);
  return html`
    <p>Car: ${state}</p>
    <button onclick='dispatch(${JSON.stringify(add())})'>add</button>
    <button onclick='dispatch(${JSON.stringify(remove())})'>remove</button>
  `
}

export default connector(Car);