import React, { useRef } from "react";
import '../styles/Login.scss';

const Login = () => {
  const form = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(form.current);
    const data = {
      username: formData.get('email'),
      password: formData.get('password'),
    }
    console.log(data);
  }

  return (
    <main className="Login">
      <form action="/" className="Login-form" ref={form}>
        <div>
          <input name="email" type="email" className="Login-form__input input__email" placeholder=" "/>
          <label htmlFor="email" className="Login-form__label">Email address</label>
          <span className="Login-form__line"></span>
        </div>
        <div>
          <input name="password" type="password" className="Login-form__input input__password" placeholder=" "/>
          <label htmlFor="password" className="Login-form__label">Password</label>
          <span className="Login-form__line"></span>
        </div>
        <button 
          className="primary-button" id="Login-button"
          onClick={handleSubmit}>
          Log in
        </button>
        <a href="/" className="forgot-password">Forgot my password</a>
      </form>
      <button className="secondary-button">Sing up</button>
    </main>
  );
}

export default Login;
