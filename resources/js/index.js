import React from 'react';
import  { createRoot } from 'react-dom/client';
import '../css/index.css';
import Homepage from './Homepage';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

const node = document.querySelector("#root");
const root = createRoot(node);
root.render(
  <React.StrictMode>
    <Homepage />
  </React.StrictMode>,
);

/*ReactDOM.render(
  document.querySelector("#root")
);*/

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.register();
