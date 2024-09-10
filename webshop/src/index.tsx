import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
//? ******************************************************************?//
//? This is the dependency for our components. We need this!          ?//
//? ******************************************************************?//

import { ThemeProvider } from "@material-tailwind/react";

//? ******************************************************************?//
//? Create the React Browser Router. This routes you between pages!   ?//
//? ******************************************************************?//

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


//? ******************************************************************?//
//? Put here the pages that you want to import!                       ?//
//? ******************************************************************?//

import Contact from './pages/contact';


//? ******************************************************************?//
//? Router Configuration                                              ?//
//? ******************************************************************?//

const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
  },
  {
    path: "/Contact",
    element: <Contact />,
  }
]);




//? ******************************************************************?//
//? Here the app is create which we use to create our website         ?//
//? ******************************************************************?//

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
);
