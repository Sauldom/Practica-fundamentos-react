import { useState } from "react";
import { login } from "../authorize/service.jsx";
import { useLocation, useNavigate } from "react-router-dom";
import Layout from "../adsPage/componentes/layout/Layout.jsx";
import { useAuth } from "../authorize/context.jsx";
import Button from "../adsPage/componentes/StyledButton.jsx";
function LoginPage() {
  const { onLogin } = useAuth();
  const [formValues, setFormValues] = useState({
    username: "",
    password: "",
  });
  const location = useLocation();
  const navigate = useNavigate();
  const [checked, setChecked] = useState(false);

  const [error, setError] = useState();
  const [waiting, setWaiting] = useState(false);
  const buttonDisabled =
    !formValues.username || !formValues.password || waiting;
  const handleChange = (event) => {
    resetError();
    const { name, value } = event.target;
    setFormValues((currentValues) => ({
      ...currentValues,
      [name]: value,
    }));
  };
  const handleChecked = () => {
    setChecked((prevChecked) => !prevChecked);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setWaiting(true);

      await login(
        {
          email: formValues.username,
          password: formValues.password,
        },
        checked
      );
      setWaiting(false);
      onLogin();
      const toUrl = location.state?.from || "/adverts";
      navigate(toUrl, { replace: true });
    } catch (error) {
      setWaiting(false);
      setError(error);
    }
  };
  const resetError = () => {
    setError(null);
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
            onChange={handleChecked}
          />
          <Button
            className="logIn-Button"
            type="submit"
            disabled={buttonDisabled}
          >
            Login
          </Button>
        </form>
        {error && (
          <div className="loginPage-error">{`El usuario ha recibido este error: ${error.message}`}</div>
        )}
      </div>
    </Layout>
  );
}
export default LoginPage;
