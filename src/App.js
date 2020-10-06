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
          <Route path="/" exact component={StartPage} />
          <Route path="/play" exact component={PlayPage} />
          <Route path="/finish" exact component={FinishPage} />
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </div>
  );
};
