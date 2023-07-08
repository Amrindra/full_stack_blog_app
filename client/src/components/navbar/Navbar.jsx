import { Link } from "react-router-dom";
import "./NavbarStyle.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <img
            src="https://amrindraouk.com/static/media/Amrindra.a232ff876db801dce850.png"
            alt="amrindra's logo"
          />
        </div>

        <div className="links">
          {/* /? meaning that it is query */}
          <Link className="link" to="/?category=art">
            <h6>ART</h6>
          </Link>
          <Link className="link" to="/?category=science">
            <h6>SCIENCE</h6>
          </Link>
          <Link className="link" to="/?category=technology">
            <h6>TECHNOLOGY</h6>
          </Link>
          <Link className="link" to="/?category=cinema">
            <h6>CINEMA</h6>
          </Link>
          <Link className="link" to="/?category=design">
            <h6>DESIGN</h6>
          </Link>
          <Link className="link" to="/?cacategory=food">
            <h6>FOOD</h6>
          </Link>

          <span>Amrin</span>
          <span>Logout</span>

          <span className="write">
            <Link className="link" to="/write">
              Write
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
