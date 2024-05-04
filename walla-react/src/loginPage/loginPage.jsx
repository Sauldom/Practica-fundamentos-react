import { useState } from "react";
import { login } from "../authorize/service.jsx";
import { useLocation, useNavigate } from "react-router-dom";
import Layout from "../adsPage/componentes/layout/Layout.jsx";
import { useAuth } from "../authorize/context.jsx";
import Button from "../adsPage/componentes/StyledButton.jsx";
function LoginPage() {
  const { isLogged, onLogin } = useAuth();
  const [formValues, setFormValues] = useState({
    username: "",
    password: "",
  });
  const location = useLocation();
  const navigate = useNavigate();
  const [checked, setChecked] = useState(false);
  const buttonDisabled = !formValues.username || !formValues.password;
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((currentValues) => ({
      ...currentValues,
      [name]: value,
    }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await login({
        email: formValues.username,
        password: formValues.password,
      });
      onLogin();
      const toUrl = location.state?.from || "/adverts";
      navigate(toUrl, { replace: true });
    } catch (error) {
      throw new Error(error);
    }
  };
  return (
    <Layout>
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
          <label htmlFor="login-checkbox" className="form-label">
            Recordar:
          </label>
          <br />
          <input
            type="checkbox"
            id="login-checkbox"
            className="loginForm-field"
            checked={checked}
            onChange={(event) => setChecked(event.target.checked)}
          />
          <Button
            className="logIn-Button"
            type="submit"
            disabled={buttonDisabled}
          >
            Login
          </Button>
        </form>
      </div>
    </Layout>
  );
}
export default LoginPage;
