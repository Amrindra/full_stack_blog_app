import "./Singlepage.scss";
import Delete from "../../assets/delete.png";
import Edit from "../../assets/edit.png";
import { Link } from "react-router-dom";
import Menu from "../../components/menu/Menu";

const Singlepage = () => {
  return (
    <article className="singlePage">
      <div className="content">
        <img
          src="https://cdn.pixabay.com/photo/2022/08/17/15/46/labrador-7392840_1280.jpg"
          alt=""
        />

        <div className="user">
          <img
            src="https://cdn.pixabay.com/photo/2022/08/17/15/46/labrador-7392840_1280.jpg"
            alt=""
          />
          <div className="info">
            <div className="edit">
              <h3>Amrin</h3>
              {/* /write?edit=2 = query*/}
              <Link to={`/write?edit=2`}>
                <img src={Edit} alt="This is the edit icon." />
              </Link>
              <img src={Delete} alt="This is the delete icon." />
            </div>
            <p>Posted 1 day ago.</p>
          </div>
        </div>

        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem magni
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          veniam corrupti fugiat eum ipsa ipsum quis exercitationem. Ea esse
          assumenda, sed voluptatem sequi tenetur debitis laborum iste veniam
          architecto eligendi fugiat laboriosam eius? Dignissimos, aperiam
          ducimus nam necessitatibus odit ea quam nesciunt voluptatum voluptates
          nostrum at numquam maxime recusandae fugiat officiis sed accusantium
          ut accusamus. Officiis culpa maiores at porro illo. Officiis error
          dicta sequi, temporibus totam ut nostrum sit dolor enim porro deleniti
          eum expedita eos, exercitationem modi inventore! Incidunt veritatis
          pariatur id beatae quia libero odio quibusdam blanditiis voluptatem
          necessitatibus nisi consectetur, rerum reprehenderit maxime aliquid
          quaerat eum.
        </p>
      </div>

      <div className="menu">
        <Menu />
      </div>
    </article>
  );
};

export default Singlepage;
