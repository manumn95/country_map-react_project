import { useState } from "react";

const Header = () => {
  const [isdark, setIsdark] = useState(
    JSON.parse(localStorage.getItem("isdarkmode"))
  );

  if (isdark) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
  return (
    <>
      <header className={"header-container"}>
        <div className="header-content">
          <h2>
            <a href="/">Where in the world</a>
          </h2>
          <p
            className="theme-changer"
            onClick={() => {
              setIsdark(!isdark);
              localStorage.setItem("isdarkmode", !isdark);
            }}
          >
            <i className={`fa-regular fa-${isdark ? "sun" : "moon"}`}></i>
            &nbsp;&nbsp;{isdark ? "Light-Mode" : "Dark-Mode"}
          </p>
        </div>
      </header>
    </>
  );
};

export default Header;
