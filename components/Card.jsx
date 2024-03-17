"use client";
import React from "react";
import {motion} from "framer-motion"
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

export const Card = ({
  itemprice,
  itemname,
  available,
  url,
  Counterplus,
  Counterminus,
  count,
  index2,
  type,
  handleDelete,
  handleAvailable
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
      {type=="cust"&&
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
      </div>}
      {type=="rest" &&
      <div className="flex flex-row sm:flex-col m-4 sm:m-10 justify-center">
          <p className="font-anta sm:ml-0 pr-10">Status</p>
          <motion.div className={`${available?"bg-green-600":"bg-red-600"} w-10 h-10 rounded-xl`}
          >

          </motion.div>
          </div>
      }
     
      {type=="update" && <div className="flex flex-row m-5 justify-between w-full sm:w-1/3">
      
      <motion.div whileHover={{scale:1.2,rotate: [0, -10, 10, -10, 0], transition: { duration: 0.3 }}}>
      <DeleteOutlineIcon onClick={handleDelete} className="text-red-600 text-4xl cursor-pointer" style={{ fontSize: '34px' }}/>
      </motion.div>
      <motion.div whileHover={{scale:1.05}}>
      <FormControlLabel
        control={<Switch checked={available} onChange={handleAvailable} />}
        label={available?(<span className="font-fred text-green-500 text-xl">Available</span>):(<span className="font-fred text-red-500 text-xl">Unavailable</span>)} 
      />
      </motion.div>
      </div>
      }
    </div>
  );
};
