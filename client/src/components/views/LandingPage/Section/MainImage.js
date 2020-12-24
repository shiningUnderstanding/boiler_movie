import React, { useEffect } from "react";

function MainImage(props) {
  useEffect(() => {
    console.log(props);
  }, [props]);
  return (
    <div
      style={{
        background: `linear-gradient(to bottom, rgba(0,0,0,0) 39%, rgba(0,0,0,0.65) 100%) center center/ 100%, url('${props.image}') center center / cover , #1c1c1c`,
        height: "60vh",
        width: "100%",
        position: "relative",
      }}
    >
      <div>
        <div
          style={{
            position: "absolute",
            maxWidth: "500px",
            bottom: "2rem",
            marginLeft: "2rem",
          }}
        >
          <h2 style={{ color: "white" }}> {props.title} </h2>
          <p style={{ color: "white", fontSize: "1rem" }}>{props.text}</p>
        </div>
      </div>
    </div>
  );
}

export default MainImage;
