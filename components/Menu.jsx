import React, { useState } from "react";
// import "../../styles/button.css";
// import "../../styles/pop.css";
import Cart from "../app/customer/cart/page";
import { useRouter } from "next/navigation";
import { Card } from "./Card";
import { FiAlignJustify } from "react-icons/fi";
import Option from "./Option";
import { ImCross } from "react-icons/im";

const Menu = ({
  menuitems,
  Counterminus,
  Counterplus,
  submitOrder,
  confirmOrder,
  confirms,
  setConfirms,
  count,
  items,
}) => {
  const router = useRouter();
  const [showIndex, setShowIndex] = useState(null);
  const [toggle, setToggle] = useState(false);
  const food_item = ["Dal", "Gravy", "Bread"];

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="w-full">
      {confirms === false ? (
        <div className="p-4 relative">
          {toggle && <div className="overlay" />}
          <button onClick={handleToggle} className="wrap burger">
            <p className="font-dance text-3xl font-bold">
              {!toggle ? <FiAlignJustify /> : <ImCross />}
            </p>
          </button>
          {toggle && (
            <div className="fixed z-50 flex" style={{ right: "15%" }}>
              <Option food_item={food_item} />
            </div>
          )}
          <div className="flex justify-center p-6 rounded-xl bg-gradient-to-r from-green-100 to-red-100 text-black text-8xl font-dance">
            Menu Items
          </div>
          <br></br>
          <div className="p-6 rounded-xl">
            {food_item.map((item1, index1) => (
              <div key={index1}>
                <div className="flex justify-center mb-2">
                  <p className="text-6xl font-dance flex justify-center items-center text-zinc-700 pl-2 w-full bg-slate-200 rounded-xl pt-2 pb-2 mb-2">
                    – {item1} –
                  </p>
                </div>
                <div className="bg-gradient-to-r from-red-100 to-slate-200 pl-6 pr-6 pt-4 pb-4 rounded-lg shadow-xl">
                  {menuitems.map((item, index2) =>
                    item.category === item1 ? (
                      <div key={index2} className="py-2 w-full px-6 mt-2 mb-2">
                        <Card
                          itemname={item.itemname}
                          itemprice={item.itemprice}
                          Counterplus={Counterplus}
                          Counterminus={Counterminus}
                          count={count}
                          index2={index2}
                        />
                      </div>
                    ) : null
                  )}
                </div>
                <br></br>
              </div>
            ))}
          </div>
          <div className="button-container mt-4 text-2xl">
            <button className="btn first" onClick={submitOrder}>
              Confirm Order
            </button>
          </div>
        </div>
      ) : (
        <div className="w-full">
          <Cart
            confirmOrder={confirmOrder}
            setConfirms={setConfirms}
            items={items}
          />
        </div>
      )}
    </div>
  );
};

export default Menu;
