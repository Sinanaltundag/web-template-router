import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ card }) => {
  const { title, imgSrc, sum } = card;
  console.log(card.imgSrc);
  let navigate=useNavigate();
    const handleClick=()=>{
        navigate("/cardDetail",{state:{card}})
    }
  return (
    <>
    
    
      <div className="section-bottom__works" onClick={handleClick}>
        <img src={imgSrc} alt="" />
        <br />
        <h3>{title}</h3>
        <p>{sum}</p>
      </div>
    </>
  );
};

export default Card;
