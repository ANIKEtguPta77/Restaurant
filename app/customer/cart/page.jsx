"use client";
import React, { useState, useEffect } from "react";
import "../../../styles/cart.css";
import { useRouter } from "next/navigation";
import Card3 from "../../../components/Card3";
import Oops from "@components/Oops";
import Lottie from "lottie-react";
import animationData from "../../../components/Animation - 1710692268578.json";

const Page = ({
  confirmOrder,
  setConfirms,
  submitOrder,
  items,
  Counterminus,
  Counterplus,
  count,
  menuitem,
  buy,
}) => {
  const router = useRouter();
  const goBack = () => {
    setConfirms(false);
  };
  const [foodid, setFoodid] = useState([]);
  const [total, setTotal] = useState(0);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const foodIds = [];
    for (let key in count) {
      if (!isNaN(key) && count[key] > 0) {
        foodIds.push(parseInt(key));
      }
    }
    setFoodid(foodIds);
  }, [count]);

  useEffect(()=>{
    submitOrder();
  },[count])

  useEffect(() => {
    let newTotal = 0;
    menuitem.forEach((item, index) => {
      if (foodid.includes(index)) {
        newTotal += item.itemprice * count[index];
      }
    });
    setTotal(newTotal);
  }, [count, foodid]);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="w-full">
      {toggle && <div className="overlay" />}
      {toggle && (
        <div>
          <Lottie
            animationData={animationData}
            className="lottie-animation"
            onClick={() => {
              buy();
            }}
          />
        </div>
      )}
      {!toggle && (
        <div
          className="m-4 bg-gradient-to-l from-gray-400 to-slate-500 rounded-2xl p-6"
          style={{ background: "linear-gradient(to right, #ff9a9e, #fad0c4)" }}
        >
          <div className="flex justify-center bg-gradient-to-b from-gray-600 to-indigo-400 rounded-lg p-4 md:text-6xl text-4xl font-dance font-bold text-white shadow-2xl mb-6">
            Order Summary
          </div>
          <div>
            <button onClick={() => goBack()} className="btn">
              ←Back
            </button>
          </div>
          <div>
            {foodid.length !== 0 ? (
              <div>
                {menuitem.map((item, index) => (
                  <div className="flex w-full" key={index}>
                    {foodid.map((key, index1) => {
                      if (key === index && count[index] !== 0) {
                        return (
                          <div className="flex w-full" key={index1}>
                            <Card3
                              itemname={item.itemname}
                              quantity={count[index]}
                              price={item.itemprice}
                              Counterminus={Counterminus}
                              Counterplus={Counterplus}
                              index2={index}
                              count={count}
                              url={item.imageurl}
                            />
                          </div>
                        );
                      } else {
                        return null;
                      }
                    })}
                  </div>
                ))}
              </div>
            ) : (
              <div>
                <Oops goBack={goBack} />
              </div>
            )}
          </div>
          <div className="flex justify-center">
            <p className="bg-slate-100 mt-6 p-3 w-11/12 flex justify-center text-2xl font-dance font-bold rounded-2xl">
              Total Price: {total}
            </p>
          </div>
          <div className="flex justify-center mt-8 mb-4">
            <button
              className="button"
              onClick={() => {
                handleToggle();
                // confirmOrder();
              }}
            >
              Placed Order→
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
