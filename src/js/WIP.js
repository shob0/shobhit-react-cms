import React from "react";

function WIP(props) {
  return (
    <div style={{ textAlign: "center", marginTop: props.marginTop }}>
      <p style={{ color: props.color, fontSize: props.fontSize }}>
        <b>Perfection is a Work in Progress</b>. As is this section.
        <br /> Do come back.
      </p>
    </div>
  );
}

export default WIP;
