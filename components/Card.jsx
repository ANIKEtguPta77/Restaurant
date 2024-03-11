"use client";
import React from "react";

export const Card = ({
  itemprice,
  itemname,
  url,
  Counterplus,
  Counterminus,
  count,
  index2,
}) => {
  return (
    <div className="w-full bg-white rounded-lg md:flex justify-between items-center p-4 shadow-xl">
      <div className="flex md:items-center justify-between">
        <img
          src="https://media.istockphoto.com/id/608005280/photo/mutton-rogan-josh-mutton-curry-indian-cuisine.jpg?s=612x612&w=0&k=20&c=F-sjeDrKuwqVh51seSkRV7Lng8ujiObyJPDxLvz3oOM="
          className="w-24 h-28 rounded-lg shadow-xl"
          alt="avatar"
        ></img>
        <div className="pl-2">
          <p style={{ fontSize: "24px" }} className="font-fred font-bold text-black">
            {itemname}
          </p>
          <p style={{ fontFamily: "cursive", fontSize: "9px" }}>
            <span className="text-yellow-600">★</span> 4.2(140){" "}
          </p>
          <div className="mt-4">
            <p
              style={{ fontFamily: "cursive", fontSize: "10px" }}
              className="text-green-600"
            >
              +140 order completed
            </p>
            <p className="text-black font-bold">
              ₹ {itemprice}{" "}
              <span className="bg-green-200 rounded-lg px-2"> -29% </span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex  md:ml-0 ml-2">
        <button
          className="px-2 hover:bg-red-400 hover:text-white font-bold rounded-md w-8 border border-red-700 md:mx-4 hover:text-2xl"
          onClick={() => Counterminus(index2)}
        >
          {" "}
          -{" "}
        </button>
        <p className="px-2 text-2xl"> {count[index2] || 0} </p>
        <button
          className=" px-2 hover:bg-red-400 rounded-md w-8 hover:text-white font-bold border border-red-700 md:mx-4 hover:text-2xl"
          onClick={() => Counterplus(index2)}
        >
          {" "}
          +{" "}
        </button>
      </div>
    </div>
  );
};
