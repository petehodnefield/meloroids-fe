import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../../utils/mutations";
import Auth from "../../utils/auth";
import "../../assets/LoginSignup.css";
const Login = () => {
  const [formState, setFormState] = useState({ username: "", password: "" });
  console.log(formState);
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { ...formState },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e.graphQLErrors[0].message);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };
  return (
    <div className="login-form-wrapper">
      <h3 className="form__header">Login</h3>
      <form onSubmit={handleFormSubmit} id="login-form" className="form">
        <div className="input__wrapper">
          <label className=" form__label">Username</label>
          <input
            name="username"
            className="form__input"
            type="username"
            onChange={handleChange}
          ></input>
        </div>
        <div className="input__wrapper">
          <label label className=" form__label">
            Password
          </label>
          <input
            name="password"
            className="form__input "
            type="password"
            onChange={handleChange}
          ></input>
        </div>
        <div className="form-btn-wrapper">
          <button type="submit" className="btn btn-form btn-tertiary">
            Login
          </button>{" "}
          <Link className="btn-form " to="/signup">
            <button className="btn btn-outline btn-form btn-signup">
              Signup
            </button>
          </Link>
        </div>
      </form>{" "}
    </div>
  );
};

export default Login;
