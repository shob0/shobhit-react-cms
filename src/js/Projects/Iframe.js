import React from "react";

function Iframe(props) {
  return (
    <div style={{ textAlign: "center" }} className="iframe-div">
      <div>
        <iframe src={props.src} title={props.title}></iframe>
      </div>
      <div>
        <a
          href={props.src}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "underline" }}
        >
          {props.linkText}
        </a>
      </div>
    </div>
  );
}

export default Iframe;
