import { useContext } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../store/authContext";
import logo from "../assets/gg.png";

const Header = () => {
  const authCtx = useContext(AuthContext);
  console.log(authCtx);

  return (
    <header className="header-container">
      <div className="logo">
        <img src={logo} alt="GG-logo" className="logo" />
        <h1>Good Game</h1>
      </div>
      <div className="header"></div>
      <nav className="main-nav">
        {authCtx.token ? (
          <div className="navBtn">
            
              <NavLink to="/">
                Home
              </NavLink>
            
            
              <NavLink to="wishlist">
                Wishlist
              </NavLink>
            

            <button className="logout-btn" onClick={() => authCtx.logout()}>
              Logout
            </button>
          </div>
        ) : (
          <div className="main-nav">
            <NavLink to="/home">
              Home
            </NavLink>

            <NavLink to="/">
              Login or Register
            </NavLink>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
