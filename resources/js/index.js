import React from 'react';
//import  { createRoot } from 'react-dom/client';
import * as ReactDOM from "react-dom/client";
import {
	createBrowserRouter,
	RouterProvider
} from "react-router-dom";
import '../css/index.css';
import Homepage from './Homepage';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

/*root.render(
  <React.StrictMode>
    <Homepage />
  </React.StrictMode>,
);*/

const rootNode = document.querySelector("#root");
const reactRoot = createRoot(node);
const router = createBrowserRouter(
	[
		{
			path: "/",
			element: <Homepage />
		}
	]
);
reactRoot.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.register();
