import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home.jsx";
import Error from "./components/Error.jsx";
import CountryDetail from "./components/CountryDetail.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement:<Error></Error>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:"/:countryDetail",
        element:<CountryDetail></CountryDetail>
      }
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  
  
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
);
