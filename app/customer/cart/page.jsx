"use client";
import React, { useState } from "react";
import "../../../styles/cart.css";
import { useRouter } from "next/navigation";
import Card3 from "../../../components/Card3";
import {loadStripe} from '@stripe/stripe-js';

const page = ({ confirmOrder, setConfirms, items }) => {
  const router = useRouter();
  const goBack = () => {
    console.log("Hi");
    setConfirms(false);
  };

  const [amount,setamount]=useState(100);


 
  const handlePayment=()=>{
    console.log("done");
  }

  return (
    <div className="parent mt-10 w-full">
      <div id="header">
        <div className="flex justify-start ml-20 w-full">
          <button className="text-2xl font-bold button1" onClick={goBack}>
            ← Back
          </button>
        </div>
        <div className="heading text-3xl">Your Order</div>
        <div className="subheading">
          order a delicious meal from our rest-around menu
        </div>
        <div className="flex w-5/6 overflow-y-hidden">
          <div className="flex card-container justify-center">
            {/* {/* {items.map((item, index) => { */}
              {/* <div> */}
                {/* {" "}  */}
                <Card3 />
                <Card3 />
                <Card3 />
                <Card3 />
                {/* {item.customerId} */}
              {/* </div>; */}
            {/* })} */}
          </div>
        </div>

        <button className="button" onClick={handlePayment}>—Placed Order—</button>
      </div>
    </div>
  );
};

export default page;
