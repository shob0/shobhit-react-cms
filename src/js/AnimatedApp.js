import React from "react";
import { withRouter, Switch, Route, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Main from "./intro/Main";
import Blogs from "./Blogs/Blogs";
import ViewPost from "./Blogs/ViewPost";
import projects from "./Projects/Projects";
import Notfound from "./notFound";

const AnimatedSwitch = ({ prevLoc }) => {
  const location = useLocation();
  console.log(prevLoc);
  console.log(location);
  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="slide" timeout={1000}>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/blogs" component={Blogs} />
          {/* <Route path="/blogs/:id" component={ViewPost} /> */}
          <Route path="/projects" component={projects} />
          <Route component={Notfound} />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
};
export default AnimatedSwitch;
