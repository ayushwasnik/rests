import { useEffect, useState } from "react";

const useListOfRestaurant = () => {
  const [listofRestaurant, setListofRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(json);
    setListofRestaurant(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  return { listofRestaurant, setListofRestaurant };
};

export default useListOfRestaurant;

// useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     let data = await fetch(
//       "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
//     );
//     const json = await data.json();
//     // console.log(
//     //   json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
//     // );
//     // console.log(json)
//     setListofRestaurant(
//       json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
//     );
//     setFilteredList(
//       json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
//     );
//   };
