import { useState, useContext } from "react";
import axios from "axios";
import AuthContext from "../store/authContext";

const Auth = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [register, setRegister] = useState(true);
  
  const authCtx = useContext(AuthContext)

  
    const submitHandler = (e) => {
    e.preventDefault();
        
    console.log("submitHandler called");

    const body = {
      username,
      password,
    }

    const url = "http://localhost:4005";
    axios
    .post(register ? `${url}/register` : `${url}/login`, body)
    .then((res) => {
      console.log("AFTER AUTH", res.data);
        authCtx.login(res.data.token, res.data.exp, res.data.userId)
        setRegister(!register)
    })
    .catch((error) => {
      setPassword("");
      setUsername("");
      setRegister("");
    });
};
  return (
    <div className="mainLogin">
      <h1>Welcome!</h1>
      <form className="auth-form" onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          className="form-input"
        />
        {console.log(username)}
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className="form-input"
        />
        {console.log(password)}
        <button
          className="form-btn"
          onChange={(event) => setRegister(event.target.value)}
        >
          {register ? "Sign Up" : "Login"}
        </button>
        {console.log(register)}
      </form>
      <button className="form-btn" onClick={() => setRegister(!register)}>
        Need to {register ? "Login" : "Sign Up"}?
      </button>
    </div>
  );
};

export default Auth;