import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Start.css";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import fancy_image from "../../../assets/fancy_image.svg";

const Start = () => {
  const [helpEnabled, sethelpEnabled] = useState(false); // share tray state
  const handleHelpToggle = () => sethelpEnabled(!helpEnabled); // handle ON/ OFF share modal popup

  const [carouselEnabled, setcarouselEnabled] = useState(false);
  const handleCarouselToggle = () => setcarouselEnabled(!carouselEnabled);

  return (
    <>
      <div className="container">
        <div
          className="HelpText"
          style={{
            display: helpEnabled ? null : "none",
            zIndex: 1000,
            position: "absolute"
          }}
        >
          <h2>INSERT HELP TEXT</h2>
        </div>

        <div className="HelpIcon">
          <button // Help button
            onClick={handleHelpToggle}
            style={{
              color: "black",
              padding: "8px",
              background: "none",
              border: "none"
            }}
          >
            <AiOutlineQuestionCircle />
          </button>
        </div>
        <div
          style={{
            display: helpEnabled ? null : "none"
          }}
        ></div>
        <div className="start-image">
          <img src={fancy_image} alt=""></img>
        </div>
        <div className="carouselDiv">Your carousel here</div>
        <Link to="/game">
          <button className="buttonLink" renderAs="button">
            <span>Play Now!</span>
          </button>
        </Link>
      </div>
    </>
  );
};

export default Start;
