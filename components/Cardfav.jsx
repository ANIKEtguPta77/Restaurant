"use client"
import React from "react";
import "../styles/cart.css"
import { motion } from "framer-motion"

const Cardfav = ({ itemprice, popularity, url, itemname }) => {
  return (
    <motion.div className="card">
      <div className="flex justify-center">
        <img
          src={url}
          className="h-32 w-40 shadow-xl rounded-lg"
          alt="avatar"
        />
      </div>
      <div className="text-1xl flex justify-between pt-1 pl-2 pr-2 pb-2">
        <div className="flex font-bold font-dance items-center" style={{ fontSize: "11px" }}>
        ₹{itemprice}
        </div>
        <div className="text-blue-600 font-dance font-bold item">{itemname}</div>
      </div>
    </motion.div>
  );
};

export default Cardfav;
