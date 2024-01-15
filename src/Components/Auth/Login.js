import React, { useState } from 'react';
import styles from "./Login.module.css"
import { useNavigate } from 'react-router-dom';
import { loginApi } from '../../Api/Api';

const Login = () => {
  const [login, setLogin] = useState({
    email: "",
    password: ""
  });
  const navigate = useNavigate()

  const goToSignUp = () => {
    navigate("/signup")
  }

  const handleChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await loginApi(login)
    console.log(data);
    if(data.status=="success"){
              localStorage.setItem("log_info",JSON.stringify(data))
              setLogin({
                email: "",
                password: ""
              })
              navigate("/products")
          }
  };

  return (
    <div className={styles.loginContainer}>
      <h1>Login</h1>
      <div className={styles.inputGroup}>
        <label htmlFor="username">Username:</label>
        <input
          name="email"
          type="text"
          id="username"
          value={login.email}
          onChange={handleChange}
        />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="password">Password:</label>
        <input
          name="password"
          type="password"
          id="password"
          value={login.password}
          onChange={handleChange}
        />
      </div>
      <button onClick={handleSubmit}>Login</button>
      <p>Don't have a account ?</p>
      <button onClick={goToSignUp}>Create Account</button>
    </div>
  );
};

export default Login;