import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const CardDetail = () => {
  const location = useLocation();
  const card = location.state.card;
  let navigate = useNavigate();
  return (
    <div className="section-bottom__works">
      <img src={card.imgSrc} alt="" />
      <br />
      <h3>{card.title}</h3>
      <p>{card.detail}</p>
      <br />
      <button onClick={() => navigate("/")}>Back Home</button>
    </div>
  );
};

export default CardDetail;
