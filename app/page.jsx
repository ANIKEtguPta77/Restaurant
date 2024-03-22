"use client"

import { useEffect, useState } from "react";
import Menu from "@components/Menu";
import Frontpage from "@components/Frontpage";
import Loading from "@components/Loading";

const Home = () => {
  const [menuitems, setMenuItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch("/api/item");
      const data = await response.json();
      setMenuItems(data);
    };
    fetchItems();
  }, []);

  return (
    <section className="w-full flex-center flex-col">
      <div
        className="w-full mb-10"
        style={{ borderRadius: "10px", overflow: "hidden" }}
      >
        {menuitems.length !== 0 ? (
          <div className="w-full">
            <Menu menuitems={menuitems} confirms={false} type="rest" />
          </div>
        ) : (
          <div className="text-white flex justify-center">
            <Loading />
          </div>
        )}
      </div>
    </section>
  );
};

export default Home;
