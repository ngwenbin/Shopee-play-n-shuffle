import React, { useEffect, useState } from "react";
import Game from "./Game.js";
import axios from "axios";

const GamePage = ({ movescount, setmovescount }) => {
  const [itemData, setitemData] = useState(
    "https://cf.shopee.sg/file/8bfa615c1433fbb60a9bfaa70d1372a0"
  );
  const [trigger, settrigger] = useState(false);
  const handletrigertoggle = () => settrigger(!trigger);
  var items = [
    {
      item_id: "3864797728",
      shop_id: "299269449"
    },
    {
      item_id: "6703100853",
      shop_id: "189162617"
    },
    {
      item_id: "3262133185",
      shop_id: "123411182"
    },
    {
      item_id: "1953044238",
      shop_id: "120981896"
    },
    {
      item_id: "5935264486",
      shop_id: "91799978"
    }
  ];

  const getItemData = async () => {
    const random = Math.floor(Math.random() * items.length);
    const iid = items[random].item_id;
    const sid = items[random].shop_id;

    const data = await axios({
      method: "get",
      url: "https://api.hackathon2021.shopee.sg/item/get_info",
      params: { item_id: iid, shop_id: sid },
      headers: { "X-Hackathon-Token": "d2FCfESvB9l8l5xYne8d" }
    });
    setitemData(data.data.data.cover);
    // setitemData("https://cf.shopee.sg/file/8bfa615c1433fbb60a9bfaa70d1372a0");
    setTimeout(function () {
      handletrigertoggle();
    }, 1500);
  };

  useEffect(() => {
    getItemData();
  }, []);

  return (
    <>
      {trigger ? (
        <Game
          itemData={itemData}
          movescount={movescount}
          setmovescount={setmovescount}
        />
      ) : null}
    </>
  );
};

export default GamePage;
