import Header from "./components/Header.jsx";
import {Outlet}from "react-router-dom"
const App = () => {

  return (
    <>
    <Header></Header>
  <Outlet></Outlet>
    
    </>
  );
};

export default App;
