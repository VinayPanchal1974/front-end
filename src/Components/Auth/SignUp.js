import React, { useState } from 'react';
import styles from "./SignUp.module.css"
import { useNavigate } from 'react-router-dom';
import { signUpApi } from '../../Api/Api';

const Signup = () => {
  const [signUp, setSignUp] = useState({
    name: "",
    email: "",
    password: ""
  });
  const navigate = useNavigate()
  const goTologin = () => {
    navigate("/")
  }

  const handleChange = (e) => {
    setSignUp({ ...signUp, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = await signUpApi(signUp)
    console.log(data);
    setSignUp({
      name: "",
      email: "",
      password: ""
    })
  };

  return (
    <div className={styles.signupContainer}>
      <h1>Sign Up</h1>
      <div className={styles.inputGroup}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={signUp.name}
          onChange={handleChange}
        />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={signUp.email}
          onChange={handleChange}
        />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={signUp.password}
          onChange={handleChange}
        />
      </div>
      <button onClick={handleSubmit}>Sign Up</button>
      <p>Already have a account. </p>
      <button onClick={goTologin}>Go to Login</button>
    </div>
  );
};

export default Signup;