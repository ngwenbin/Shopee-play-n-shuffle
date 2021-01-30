import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Start.css";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import fancy_image from "../../../assets/fancy_image.svg";
import help_picture from "../../../assets/help_picture.webp";
import shopee_rewards from "../../../assets/shopee_rewards.jpg";
import { IconContext } from "react-icons/lib";

const Start = ({ counter, setCounter }) => {
  const [helpEnabled, sethelpEnabled] = useState(false); // share tray state
  const [rewardEnabled, setrewardEnabled] = useState(false);
  const handleHelpToggle = () => sethelpEnabled(!helpEnabled); // handle ON/ OFF share modal popup
  const handlerewardToggle = () => setrewardEnabled(!rewardEnabled);

  return (
    <>
      <IconContext.Provider value={{ color: "#000000", size: 32 }}>
        <div className="container">
          <div
            className="HelpPicture"
            onClick={handleHelpToggle}
            style={{
              display: helpEnabled ? null : "none"
            }}
          >
            <img src={help_picture} alt=""></img>
          </div>
          <div
            className="RewardPicture"
            onClick={handlerewardToggle}
            style={{
              display: rewardEnabled ? null : "none",
              zIndex: 1100
            }}
          >
            <img src={shopee_rewards} alt=""></img>
          </div>
          <div className="HelpIcon">
            <button // Help button
              onClick={handleHelpToggle}
              style={{
                color: "black",
                padding: "2px",
                background: "none",
                border: "none",
                outline: "none"
              }}
            >
              <AiOutlineQuestionCircle />
            </button>
          </div>
          <div className="start-image">
            <img src={fancy_image} alt=""></img>
          </div>
          <div className="buttonLink">
            <button // Help button
              onClick={handlerewardToggle}
              style={{
                backgroundColor: "white",
                color: "#f7422e",
                border: "solid",
                borderWidth: "2px",
                borderColor: "#f7422e"
              }}
            >
              <span>REWARDS</span>
            </button>
          </div>
          {counter < 1 ? (
            <div className="buttonLink">
              <button>
                <span>Need more tokens!</span>
              </button>
            </div>
          ) : (
            <Link to="/game">
              <div className="buttonLink">
                <button onClick={() => setCounter(counter - 1)}>
                  <span>Play now!</span>
                </button>
              </div>
            </Link>
          )}
          <div className="Counter">
            <p>Tokens left: {counter}</p>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
};

export default Start;
