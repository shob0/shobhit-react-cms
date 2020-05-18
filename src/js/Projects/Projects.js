import React from "react";
import WIP from "../WIP";
import Iframe from "./Iframe";

function Projects() {
  return (
    <div className="route-div">
      <WIP fontSize="16px" color="salmon" marginTop="40px" />
      <div className="iframe">
        <Iframe
          src="https://codepen.io/shob0/full/ExVQGrd"
          title="codepen-animation-sidenav"
          linkText="side navigation animation"
        />
        <Iframe
          src="https://codepen.io/shob0/full/yLYvwmJ"
          title="codepen-random-user-generator"
          linkText="random user list generation"
        />
      </div>
    </div>
  );
}

export default Projects;
