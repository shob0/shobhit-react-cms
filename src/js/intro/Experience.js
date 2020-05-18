import React from "react";

/**
 *Title: String
 *Company: String
 *roleName: String
 *Impacts: []
 */
function Experience(props) {
  let imp = props.impact;
  return (
    <div className="experience">
      <div>
        <hr className="divider" />
      </div>
      <strong>{props.title}</strong>
      <div style={{ margin: "8px 0 0 70px" }} className="light-content">
        <span>
          <u>{props.company}</u>
        </span>
        <h6 style={{ margin: "0 0 0 24px" }}>
          <i>{props.roleName}</i>
        </h6>
      </div>
      <div className="light-content">
        <ul>
          {imp.map((imm, ind) => (
            <li key={ind} style={{ listStyle: "none" }}>
              {imm}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Experience;
