import { useState } from "react";
import "./Write.scss";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Write = () => {
  const [value, setValue] = useState("");
  return (
    <div className="writepage">
      <div className="content">
        <input type="text" placeholder="Title" />
        <div className="editor-container">
          <ReactQuill
            className="react-quill"
            theme="snow"
            value={value}
            onChange={setValue}
          />
        </div>
      </div>
      {/* end of content */}

      <div className="menu">
        <div className="item">
          <h1>Public</h1>
          <span>
            <b>Status: </b> Draft
          </span>
          <span>
            <b>Visibilty: </b> Public
          </span>
          <input style={{ display: "none" }} type="file" name="" id="file" />
          <label className="file" htmlFor="file">
            Upload file
          </label>

          <div className="buttons">
            <button>Save as a draft</button>
            <button>Update</button>
          </div>
        </div>

        <div className="item">
          <h1>Category</h1>
          <div className="category">
            <input type="radio" name="category" value="art" id="art" />
            <label htmlFor="art">Art</label>
          </div>

          <div className="category">
            <input type="radio" name="category" value="scient" id="scient" />
            <label htmlFor="art">Scient</label>
          </div>

          <div className="category">
            <input
              type="radio"
              name="category"
              value="technology"
              id="technology"
            />
            <label htmlFor="art">Technology</label>
          </div>
          <div className="category">
            <input type="radio" name="category" value="cinema" id="cinema" />
            <label htmlFor="art">Cinema</label>
          </div>

          <div className="category">
            <input type="radio" name="category" value="design" id="design" />
            <label htmlFor="art">Design</label>
          </div>

          <div className="category">
            <input type="radio" name="category" value="food" id="food" />
            <label htmlFor="art">Food</label>
          </div>
        </div>
      </div>
      {/* end of menu */}
    </div> // end of write page
  );
};

export default Write;
