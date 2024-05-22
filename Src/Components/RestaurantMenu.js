import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategories from "./RestaurantCategories";

function RestaurantMenu() {
  // const [resMenu, setResMenu] = useState(null);
  const { resId } = useParams();
  // console.log(resId);

  const resMenu = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(0);

  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   const data = await fetch(
  //     RES_MENU +
  //       params.resId +
  //       "&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER"
  //   );
  //   const json = await data.json();

  //   setResMenu(json);
  //   // console.log(json);
  // };

  if (resMenu === null) {
    return <h2>Loading</h2>;
  }

  // function handleSetShowIndex(index) {
  //   // console.log(index);
  //   // console.log(showIndex);

  //   if (showIndex == index) {
  //     setShowIndex(null);
  //   } else {
  //     setShowIndex(index);
  //   }
  // }

  const { itemCards } =
    resMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

  // console.log(itemCards);
  // console.log(
  //   resMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards
  // );

  let categories =
    resMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  // console.log(categories);

  categories = categories.filter(
    (c) =>
      c.card.card["@type"] ==
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );
  // console.log(categories);

  return (
    <div>
      <div>
        <h2>{resMenu?.data?.cards[2]?.card?.card?.info?.name}</h2>
        <p>
          {resMenu?.data?.cards[2]?.card?.card?.info?.avgRating} -
          {resMenu?.data?.cards[2]?.card?.card?.info?.costForTwoMessage}
        </p>
      </div>
      <div>
        {categories.map((c, index) => (
          <RestaurantCategories
            data={c.card.card}
            key={c?.card?.card.title}
            showItem={index == showIndex ? true : false}
            setShowIndex={() =>
              showIndex == index ? setShowIndex(null) : setShowIndex(index)
            }
          />
        ))}
      </div>
    </div>
  );
}

export default RestaurantMenu;

{
  /* <div className="resmenu-info">
          <h2>{itemCards[0].card.info.name}</h2>
          <p>Rs {itemCards[0].card.info.defaultPrice / 100} </p>
          <p> {itemCards[0].card.info.description}</p>
        </div>
        <div className="resmenu-img-container">
          <img
            className="remenu-img"
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" +
              itemCards[0].card.info.imageId
            }
            alt="loading resmenu-img"
          />
        </div> */
}
