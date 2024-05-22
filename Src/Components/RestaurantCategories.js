import React, { useState } from "react";
import ItemCategories from "./ItemCategories";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function RestaurantCategories({ data, showItem, setShowIndex }) {
  // const [showItem, setShowItem] = useState(false);

  function onhandleClick() {
    setShowIndex();
  }

  // console.log(data);
  return (
    <div className="rest-categories" onClick={onhandleClick}>
      <h3>
        {data.title} ({data.itemCards.length})
      </h3>
      <KeyboardArrowDownIcon className="arrow" />

      {showItem && <ItemCategories itemCards={data.itemCards} />}
    </div>
  );
}

export default RestaurantCategories;
