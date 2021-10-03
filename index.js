import App from "./components/App.js";
// import Car from "./components/Car.js";
import { attach } from "./store.js";



attach(App, document.getElementById('root'));
// attach(Car, document.getElementById('root2'));
