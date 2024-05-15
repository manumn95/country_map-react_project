import { useTheme } from "../hooks/useTheme";



const Header = () => {
  const [isdark, setIsDark] = useTheme();

  return (
    <>
      <header className={`header-container ${isdark? 'dark': ''}`}>
        <div className="header-content">
          <h2>
            <a href="/">Where in the world</a>
          </h2>
          <p
            className="theme-changer"
            onClick={() => {
              setIsDark(!isdark);
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
