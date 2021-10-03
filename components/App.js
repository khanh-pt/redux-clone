import { decrease, increase } from '../actions/actionCounter.js';
import { connect } from '../store.js';
import html from '../utils.js';

const connector = connect();
console.log('connector', connector);

function App(state){
  console.log('props', state);
  return html`
    <p>Couter: ${state}</p>
    <button onclick='dispatch(${JSON.stringify(increase())})'>increase</button>
    <button onclick='dispatch(${JSON.stringify(decrease())})'>decrease</button>
  `
}

export default connector(App);