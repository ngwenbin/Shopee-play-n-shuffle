import React, { Fragment, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Start from "./components/pages/StartPage/Start";
import GamePage from "./components/pages/GamePage/GamePage";
import Summary from "./components/pages/SummaryPage/Summary";
import NavBar from "./components/NavBar";
import "./App.css";

const App = () => {
  const [counter, setCounter] = useState(3);
  const [movescount, setmovescount] = useState(0);
  return (
    <>
      <BrowserRouter>
        <Fragment>
          <NavBar />
          <Switch>
            <Route
              exact
              path="/"
              component={Start}
              children={
                <div>
                  <Start counter={counter} setCounter={setCounter} />
                </div>
              }
            />
            <Route
              path="/game"
              component={GamePage}
              children={
                <div>
                  <GamePage
                    movescount={movescount}
                    setmovescount={setmovescount}
                  />
                </div>
              }
            />
            <Route
              path="/summary"
              component={Summary}
              children={
                <div>
                  <Summary
                    counter={counter}
                    movescount={movescount}
                    setmovescount={setmovescount}
                  />
                </div>
              }
            />
          </Switch>
        </Fragment>
      </BrowserRouter>
    </>
  );
};

export default App;
