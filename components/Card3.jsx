import React from "react";
import "../styles/cart.css";

const Card3 = ({itemname,itemprice}) => {
  return (
    <div className="card">
      <img
        className="img"
        src="https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
        alt=""
      />
      <div className="title">double burgers</div>
    </div>
  );
};

export default Card3;
