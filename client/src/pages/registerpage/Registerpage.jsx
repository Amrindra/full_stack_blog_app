import { useState } from "react";
import "../loginPage/LoginPage.scss";
import { Link } from "react-router-dom";

const Registerpage = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setInputs((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <div className="auth">
      <h1>Register</h1>
      <form>
        <input
          required
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleChange}
        />
        <input
          required
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Passowrd"
          onChange={handleChange}
        />
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
