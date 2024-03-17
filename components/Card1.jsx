"use client";
import React from "react";

export const Card1 = ({ itemprice, itemname, url, buy }) => {
  return (
    <div className="w-full bg-white rounded-lg p-4 shadow-xl shadow-slate-400">
      <div className="lg:flex w-full">
        <div className="flex w-full">
          <div className="items-center flex w-2/5">
            <img
              src="https://media.istockphoto.com/id/608005280/photo/mutton-rogan-josh-mutton-curry-indian-cuisine.jpg?s=612x612&w=0&k=20&c=F-sjeDrKuwqVh51seSkRV7Lng8ujiObyJPDxLvz3oOM="
              className="shadow-xl rounded-full h-32"
              alt="avatar"
            ></img>
          </div>
          <div className="w-3/5">
            <p className="text-2xl p-2">
              <span className="text-yellow-600">★★★</span>★★
            </p>
            <p className="font-dance text-4xl font-bold p-2">{itemname}</p>
            <p className="font-kal text-xl font-bold text-black p-2">
             ₹ {itemprice}
            </p>
          </div>
        </div>
        <div className="flex justify-center lg:w-1/5 w-full">
          <button onClick={buy} className="btn first">
            — Try it ones —
          </button>
        </div>
      </div>
    </div>
  );
};
