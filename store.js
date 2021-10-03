import createStore from "./createStore.js";
import reducerCounter from "./reducers/reducerCounter.js";


const {attach, connect, dispatch} = createStore(reducerCounter);
window.dispatch = dispatch;
export {
  attach,
  connect
}