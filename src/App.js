import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Auth from "./components/Auth";
import { useContext } from "react";
import AuthContext from "./store/authContext";
import Wishlist from "./components/Wishlist"

function App() {
  const authCtx = useContext(AuthContext)
      return ( 
        <div className="App">
      <Header />
      <main>
        
      <Routes>
        <Route
          path="/"
          element={!authCtx.token ? <Auth /> : <Navigate to="/home" />}
          />
          <Route path="/home" element={authCtx.token ? <Home /> : <Navigate to="/" />}/>
          <Route path="/wishlist" element={authCtx.token? <Wishlist/> : <Navigate to="/"/>}></Route>
      </Routes>
      <Footer/>
          </main>
      
    </div>
  );
}

export default App;
