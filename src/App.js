import React, { Fragment } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Start from "./components/pages/StartPage/Start";
import Game from "./components/pages/GamePage/Game";
import Summary from "./components/pages/SummaryPage/Summary";
import NavBar from "./components/NavBar";
import "./App.css";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Fragment>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Start} />
            <Route path="/game" component={Game} />
            <Route path="/summary" component={Summary} />
          </Switch>
        </Fragment>
      </BrowserRouter>
    </>
  );
};

export default App;
