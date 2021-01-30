import React from "react";
import "./Summary.css";
import winners from "../../../assets/winners.svg";
import stats_page from "../../../assets/stats_page.jpg";

const Summary = ({ counter, movescount }) => {
  return (
    <>
      <div className="container">
        <div className="summary-img">
          <img src={winners} alt=""></img>
        </div>
        <h1>Congratulations!</h1>
        <div className="stats-img">
          <img src={stats_page} alt=""></img>
        </div>
        <div className="tokenCounter">
          <p>Moves: {movescount}</p>
          <p>Tokens left: {counter}</p>
        </div>
      </div>
    </>
  );
};

export default Summary;
