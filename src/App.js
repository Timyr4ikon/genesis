import React, { Suspense } from "react";
import StartPage from "./components/StartPage";
import { Switch, Route, Redirect } from "react-router-dom";

const PlayPage = React.lazy(() => import("./components/Play"));
const FinishPage = React.lazy(() => import("./components/FinishPage"));

export default () => {
  return (
    <div className="container">
      <Suspense fallback={<></>}>
        <Switch>
          <Route path="/genesis/" exact component={StartPage} />
          <Route path="/genesis/play" exact component={PlayPage} />
          <Route path="/genesis/finish" exact component={FinishPage} />
          <Redirect to="/genesis/" />
        </Switch>
      </Suspense>
    </div>
  );
};
