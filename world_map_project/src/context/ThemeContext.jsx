import { createContext, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [isdark, setIsdark] = useState(
    JSON.parse(localStorage.getItem("isdarkmode"))
  );
  return (
    <ThemeContext.Provider value={[isdark, setIsdark]}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
