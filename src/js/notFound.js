import React from "react";

function Notfound() {
  return <p style={style}>not found</p>;
}

const style = {
  color: "tomato",
  textAlign: "center",
  fontSize: "150px",
  userSelect: "none",
  WebkitUserSelect: "none",
  MozUserSelect: "none",
};

export default Notfound;
