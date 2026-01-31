import "./Login.css";

const Login = () => {
  return (
    <div className="login-page">
      <div className="login-card">
        <h2>Login</h2>

        <form>
          <input
            type="text"
            placeholder="Enter Username"
            required
          />

          <input
            type="password"
            placeholder="Enter Password"
            required
          />

          <button type="submit">Login</button>
        </form>

        {/* Optional future links */}
        <div className="extra-links">
          <p>
            Forgot Password? <a href="#">Reset</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
