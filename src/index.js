import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import items from "./foods"
import { choice, remove, RANDOMFRUIT } from "./helpers"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


console.log(`I'd like one ${choice(items)}`);
console.log(`Here you go: ${RANDOMFRUIT}`);
console.log(`Delicious! May I have another?`);
remove(items, RANDOMFRUIT);
console.log(`I'm sorry, we're all out. We have ${items.length} left.`)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
