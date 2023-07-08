import "./LoginPage.scss";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="auth">
      <h1>LoginPage</h1>
      <form>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Passowrd" />
        <button>LOGIN</button>
        <p>This is an error!</p>
        <span>
          Don't you have an acccount? <Link to="/register">Register</Link>
        </span>
      </form>
    </div>
  );
};

export default LoginPage;
