import React, { useState, useEffect } from "react";
import pattern from "../assets/images/pattern-divider-mobile.svg";
import patternDesktop from "../assets/images/pattern-divider-desktop.svg";
import iconDice from "../assets/images/icon-dice.svg";

const AdviceCard = () => {
  const [adviceSlip, setIsAdviceSlip] = useState({
    advice: "",
    id: 0,
  });
  const url = "https://api.adviceslip.com/advice";
  const getAdvice = async () => {
    try {
      const res = await fetch(url);
      const { slip } = await res.json();
      setIsAdviceSlip(slip);
      // setNum(slip.id);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <div className="advicebox-bg">
      <div className="advice-text">
        <h1>ADVICE #{adviceSlip.id}</h1>
        <p>"{adviceSlip.advice}"</p>
        <img className="divider-mobile" src={pattern} alt="pattern-divider" />
        <img className="divider-desktop" src={patternDesktop} alt="" />
        <div className="dice-box">
          <button className="dice-circle" onClick={getAdvice}>
            <img src={iconDice} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdviceCard;
