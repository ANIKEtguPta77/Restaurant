import React, { useState } from "react";
import Cart from "../app/customer/cart/page";
import { useRouter } from "next/navigation";
import { Card1 } from "./Card1";

const Frontpage = ({ menuitems, buy }) => {
  const router = useRouter();
  const [showIndex, setShowIndex] = useState(null);

  const food_item = ["Dal", "Gravy", "Bread"];

  return (
    <div className="w-full p-4">
      <div className="flex justify-center p-6 rounded-xl bg-gradient-to-r from-slate-200 to-red-200 text-black text-8xl font-dance shadow-xl">
        Menu Items
      </div>
      <br></br>
      <div className="p-6 rounded-xl">
        {food_item.map((item1, index1) => (
          <div key={index1} style={{ position: "relative" }}>
            <div className="light">
              <div className="lineh6 w-full"></div>
            </div>
            <div className="flex justify-center mb-2">
              <p className="text-6xl font-dance flex justify-center items-center text-zinc-700 pl-2 w-full bg-slate-200 rounded-xl pt-2 pb-2 mb-2 shadow-xl">
                – {item1} –
              </p>
            </div>
            <div className="light">
              <div className="lineh1 w-full"></div>
              <div className="lineh1 w-full"></div>
            </div>
            <div className="bg-gradient-to-r from-slate-100 to-slate-200 pl-6 pr-6 pt-2 pb-2 rounded-md shadow-xl mb-8">
              {menuitems.map((item, index2) =>
                item.category === item1 ? (
                  <div key={index2} className="py-2 w-full px-6 mt-2 mb-3">
                    <Card1
                      itemname={item.itemname}
                      itemprice={item.itemprice}
                      buy={buy}
                    />
                  </div>
                ) : null
              )}
            </div>
            <br></br>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Frontpage;
