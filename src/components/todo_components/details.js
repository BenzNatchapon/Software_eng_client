import React from "react";

const Detail = props => {
  return (
    <>
      <div>
        <form>
          <h2>Title</h2>
          {/* <div class="box" style={{ width: "400px" }}>
          {" "}
          <p> Software Engineering Homework</p>{" "}
        </div> */}

          <input
            class="input"
            type="text"
            defaultValue={props.selected.text}
          ></input>
          <h2> Description</h2>
          <textarea
            class="textarea"
            defaultValue={props.selected.detail}
          ></textarea>
          <h2> End Date </h2>
          <input
            class="input"
            type="text"
            defaultValue={props.selected.date}
          ></input>
          <br></br>
          <br></br>
          <button class="button" style={{ marginRight: "10px" }}>
            {" "}
            save
          </button>
          <button class="button"> delete</button>
        </form>
      </div>
    </>
  );
};

export default Detail;
