import React from 'react';
import { createRoot } from 'react-dom/client';
import '../css/index.css';
import Homepage from './Homepage';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

const rootNode = document.querySelector("#root");
const root = createRoot(rootNode);
root.render(
  <React.StrictMode>
    <Homepage />
  </React.StrictMode>,
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
