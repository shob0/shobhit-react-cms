import React from "react";
import Experience from "./Experience";
import ME from "../../../content/img/Me_OOty.jpg";
import {impacts} from "../../../content/Impact";

function Main() {
  console.log(impacts)
  const [experienceImpact, volunteerImpact] = impacts;
  return (
    <div className="textColor route-div">
      <div id="intro" className="intro-header">
        <div>
          <hr className="divider" />
        </div>
        <strong>about</strong>
        <div id="intro-content">
          <div style={{ marginLeft: "70px" }}>
            <hr className="divider" style={{ transform: "scale(0.6)" }} />
            {/* <span className="light-content">about me</span> */}
            <p className="light-content">
              I'm Shobhit; front end developer, certified nutrition expert,
              poetry lover, yogi, kick boxer, toastmaster, loves to explore
              <em>JavaScript, HTML/CSS.</em>
            </p>
          </div>
        </div>
        <img
          src={ME}
          alt="Shobhit stnading in front of hills. red tshirt, smiling"
          className="full-width-img"
          style={{ marginLeft: "0", position: "relative", marginTop: "20px" }}
        />
      </div>

      <Experience
        title="i`ve worked at"
        company="Infosys Limited"
        roleName="front end dev"
        impact={experienceImpact}
      />
      <Experience
        title="also volunteered at"
        company="the Indian Stammering Assosiation"
        roleName="volunteer"
        impact={volunteerImpact}
      />
    </div>
  );
}

export default Main;
