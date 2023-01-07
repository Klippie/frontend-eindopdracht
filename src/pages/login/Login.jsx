import React from 'react';
import './Login.css';
import {useForm} from "react-hook-form";

function Login(props) {
  const {register, handleSubmit, formState: {errors}} = useForm();

  function handleFormSubmit(data) {
    console.log(data);
  }

  return (
    <>
      <h1 className="title">Login</h1>
      <div className="container form-container">
        <form className="form" onSubmit={handleSubmit(handleFormSubmit)}>
          <label htmlFor="email-field">Email
          </label>
          <input
            type="email"
            id="email-field"
            {...register("email", {
              required: {
                value: true,
                message: 'Dit veld is verplicht'
              },
              pattern: {
                value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: 'Voldoet niet aan de eisen voor email adres'
              }
            })}
          />
          {errors.email && <p>{errors.email.message}</p>}
          <label htmlFor="password-field">Password
          </label>
          <input
            type="password"
            id="password-field"
            {...register("password", {
              required: {
                value: true,
                message: 'Dit veld is verplicht'
              }
            })}
          />
          {errors.password && <p>{errors.password.message}</p>}
          <label htmlFor="password-confirm-field">Confirm password
          </label>
          <input
            type="text"
            name="password-confirm"
            id="password-confirm-field"
          />
          <button className="button form-button" type="submit">
            Login
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;