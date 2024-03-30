// "use client";

// import { useEffect, useState } from "react";
import Menu from "@components/Menu";
import Frontpage from "@components/Frontpage";
import Loading from "@components/Loading";
import Nav from "@components/Nav";
import { connectToDb } from "@utils/database";
import Menumodel from "@models/menu";

async function getItem() {
  try {
    await connectToDb();

    // Fetch items sorted by popularity in descending order
    const items = await Menumodel.find({})
      .populate("creator")
      .sort({ popularity: 1 });

    return items;
  } catch (error) {
    console.log(error);
  }
}

const Home = async () => {
  const menuitems = await getItem();
  // const [menuitems, setMenuItems] = useState([]);

  // useEffect(() => {
  //   const fetchItems = async () => {
  //     const response = await fetch("/api/item");
  //     const data = await response.json();
  //     setMenuItems(data);
  //   };
  //   fetchItems();
  // }, []);
  console.log(menuitems)
  return (
    <section className="w-full flex-center flex-col">
      <Nav type="rest" />
      <div
        className="w-full mb-10"
        style={{ borderRadius: "10px", overflow: "hidden" }}
      >
        {menuitems.length !== 0 ? (
          <div className="w-full">
            <Menu confirms={false} type="rest" menuitems={menuitems}/>
          </div>
        ) : (
          <div className="text-white flex justify-center items-center h-96">
            <Loading />
          </div>
        )}
      </div>
    </section>
  );
};

export default Home;
