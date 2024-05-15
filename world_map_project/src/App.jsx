import Header from "./components/Header.jsx";
import { Outlet } from "react-router-dom";
import "./App.css";
const App = () => {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
    </>
  );
};

export default App;
