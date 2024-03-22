import React, { useState, useRef, useEffect } from "react";
import Cart from "../app/customer/cart/page";
import { useRouter } from "next/navigation";
import { Card } from "./Card";
import { FiAlignJustify } from "react-icons/fi";
import Option from "./Option";
import { FiArrowRightCircle } from "react-icons/fi";
import { ImCross } from "react-icons/im";
import { useLayoutEffect } from "react";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";

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
  foodcount,
  buy,
  type,
  handleAvailable,
  handleDelete,
}) => {
  const router = useRouter();
  const [showIndex, setShowIndex] = useState(null);
  const [toggle, setToggle] = useState(false);
  const food_item = ["Dal", "Gravy", "Bread", "Sweet"];
  const sectionRefs = food_item.map(() => useRef());
  const handleToggle = () => {
    setToggle(!toggle);
  };

  useLayoutEffect(() => {
    const animateCount = () => {
      const element = document.querySelector(".food-count");
      if (element) {
        element.classList.add("animate-count");
        setTimeout(() => {
          element.classList.remove("animate-count");
        }, 1000);
      }
    };

    animateCount();
  }, [foodcount]);

  const scrollToSection = (index) => {
    console.log(index);
    sectionRefs[index].current.scrollIntoView({ behavior: "smooth" });
  };

  const [menuitem, setMenuItem] = useState([]);

  useEffect(() => {
    const func = () => {
      setMenuItem(menuitems);
    };
    func();
  }, [menuitems]);

  return (
    <div className="w-full">
      {confirms === false ? (
        <div className="p-4">
          {toggle && <div className="overlay" />}
          <div className="flex justify-end items-end">
            <button onClick={handleToggle} className="wrap burger">
              <p className="font-dance text-3xl font-bold">
                {!toggle ? <p>Menu</p> : <ImCross />}
              </p>
            </button>
          </div>
          {toggle && (
            <div className="fixed z-50 flex w-5/6">
              <Option food_item={food_item} scrollToSection={scrollToSection} />
            </div>
          )}
          <div className="mb-8">
            {type === "cust" && (
              <button
                className="bg-blue-700 px-4 text-white rounded-xl hover:bg-blue-900 shadow hover:px-5 hover:py-1"
                onClick={() => buy()}
              >
                ← Back
              </button>
            )}
          </div>
          <div className="flex justify-center p-6 rounded-xl bg-gradient-to-r from-green-100 to-red-100 text-black md:text-8xl text-6xl font-dance">
            Menu Items
          </div>
          <br></br>
          <div className="rounded-xl md:p-4 ">
            {food_item.map((item1, index1) => (
              <div key={index1}>
                <section
                  className="bg-gradient-to-r from-red-100 to-slate-200 pl-6 pr-6 pt-4 pb-4 rounded-lg shadow-xl"
                  ref={sectionRefs[index1]}
                >
                  <div className="flex justify-center mb-2">
                    <p
                      className="text-6xl font-dance flex justify-center items-center text-zinc-100 pl-2 w-full bg-gradient-to-r from-slate-600 to-slate-700 rounded-xl pt-2 pb-2 mb-2 cursor-pointer"
                      onClick={() => scrollToSection(index1)}
                    >
                      – {item1} –
                    </p>
                  </div>
                  {menuitem.map((item, index2) =>
                    item.category === item1 ? (
                      <div key={index2} className="py-3 w-full mt-2 mb-2">
                        <Card
                          itemname={item.itemname}
                          itemprice={item.itemprice}
                          available={item.available}
                          url={item.imageurl}
                          Counterplus={Counterplus}
                          Counterminus={Counterminus}
                          count={count}
                          index2={index2}
                          type={type}
                          handleDelete={() =>
                            handleDelete && handleDelete(item)
                          }
                          handleAvailable={() =>
                            handleAvailable && handleAvailable(item)
                          }
                        />
                      </div>
                    ) : null
                  )}
                </section>
                <br></br>
              </div>
            ))}
          </div>
          <div className="button-container mt-4 text-2xl mb-10">
            {type === "cust" && (
              <button className="btn first" onClick={submitOrder}>
                Confirm Order
              </button>
            )}
          </div>
          <div className="bottom">
            {foodcount !== 0 && type === "cust" ? (
              <button
                className="flex justify-between font-dance text-4xl font-bold p-4 text-white w-full"
                onClick={submitOrder}
              >
                <div className="flex items-center">
                  <span className="px-2 food-count">{foodcount}</span>
                  <span>Items added</span>
                </div>
                <span className="px-2">
                  <MdOutlineShoppingCartCheckout />
                </span>
              </button>
            ) : null}
          </div>
        </div>
      ) : (
        <div className="w-full">
          <Cart
            confirmOrder={confirmOrder}
            setConfirms={setConfirms}
            submitOrder={submitOrder}
            items={items}
            Counterminus={Counterminus}
            Counterplus={Counterplus}
            count={count}
            menuitem={menuitem}
            buy={buy}
          />
        </div>
      )}
    </div>
  );
};

export default Menu;
