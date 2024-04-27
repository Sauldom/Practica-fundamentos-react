function LoginPage() {
  return (
    <div className="loginPage">
      <h1 className="title-Welcome">Bienvenido a </h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          label="phone, email or username"
          className="loginForm-field"
          value={username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          label="password"
          className="loginForm-field"
          value={password}
          onChange={handleChange}
        />
        <button className="logIn-Button" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}
export default LoginPage;
