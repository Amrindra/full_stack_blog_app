import "../loginPage/LoginPage.scss";
import { Link } from "react-router-dom";

const Registerpage = () => {
  return (
    <div className="auth">
      <h1>Register</h1>
      <form>
        <input required type="text" placeholder="Username" />
        <input required type="email" placeholder="Email" />
        <input type="password" placeholder="Passowrd" />
        <button>Register</button>
        <p>This is an error!</p>
        <span>
          Already have an acccount? <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  );
};

export default Registerpage;
