"use client";
import { useSearchParams } from "next/navigation";

import { useEffect, useState } from "react";
import MenuItem from "./MenuItem";
import { useRouter } from "next/navigation";

const MenuItemList = ({ data, type, handleDelete, handleAvailable }) => {
  return (
    <div classname="bg-black w-full">
      {data.map((item) => (
        <MenuItem
          key={item._id}
          item={item}
          type={type}
          handleDelete={() => handleDelete && handleDelete(item)}
          handleAvailable={() => handleAvailable && handleAvailable(item)}
        />
      ))}
    </div>
  );
};

const Menu = ({ type }) => {
  const router = useRouter();
  const [menuitems, setMenuItems] = useState([]);

  const handleDelete = async (item) => {
    const isconfirmed = confirm(
      `Are you sure you want to delete ${item.itemname}`
    );

    if (isconfirmed) {
      try {
        await fetch(`/api/item/${item._id}`, {
          method: "DELETE",
        });
        const filteredPosts = menuitems.filter((p) => p._id !== item._id);
        setMenuItems(filteredPosts);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleAvailable = async (item) => {
    const isconfirmed = confirm(
      `Are you sure you want to make ${item.itemname} ${
        item.available == true ? "Unavailable" : "Available"
      }`
    );

    if (isconfirmed) {
      try {
        const response = await fetch(`/api/item/${item._id}`, {
          method: "PATCH",
          body: JSON.stringify({
            available: !item.available,
          }),
        });

        if (response.ok) {
          location.reload();
          router.push("/update-menu");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch("/api/item");
      const data = await response.json();

      setMenuItems(data);
    };

    fetchItems();
  }, []);

  return (
    <section className="m-3 w-full">
      <MenuItemList
        data={menuitems}
        type={type}
        handleDelete={handleDelete}
        handleAvailable={handleAvailable}
      />
    </section>
  );
};

export default Menu;
