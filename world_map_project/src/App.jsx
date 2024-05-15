import Header from "./components/Header.jsx";
import { Outlet } from "react-router-dom";
import "./App.css";
import { ThemeProvider } from "./context/ThemeContext.jsx";

const App = () => {
  return (
    <ThemeProvider>
      <Header></Header>
      <Outlet></Outlet>
    </ThemeProvider>
  );
};

export default App;
