import createStore from "./createStore.js";
import reducerCar from "./reducers/reducerCar.js";

const {attach, connect, dispatch} = createStore(reducerCar);
window.dispatch = dispatch;
export {
  attach,
  connect
}