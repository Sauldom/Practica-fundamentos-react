import { useState } from "react";
import login from "../authorize/service.jsx";
function LoginPage({ onLogin }) {
  const [formValues, setFormValues] = useState({
    username: "",
    password: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((currentValues) => ({
      ...currentValues,
      [name]: value,
    }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(event);
    try {
      const response = await login({
        email: formValues.username,
        password: formValues.password,
      });
      onLogin();
      console.log("esta es la respuesta del login: ", response);
    } catch (error) {
      throw new Error(error);
    }
  };
  return (
    <div className="loginPage">
      <h1 className="title-Welcome">Bienvenido a Walla-React</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username" className="form-label">
          Introduzca su nombre de usuario:
        </label>
        <br />
        <input
          type="text"
          name="username"
          label="phone, email or username"
          className="loginForm-field"
          value={formValues.username}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="password" className="form-label">
          Introduzca su contraseña:
        </label>
        <br />
        <input
          type="password"
          name="password"
          label="password"
          className="loginForm-field"
          value={formValues.password}
          onChange={handleChange}
        />

        <br />
        <button className="logIn-Button" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}
export default LoginPage;
