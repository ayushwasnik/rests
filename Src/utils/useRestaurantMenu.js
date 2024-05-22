import { useEffect, useState } from "react";

import { RES_MENU } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resMenu, setResMenu] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      RES_MENU +
        resId +
        "&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER"
    );
    const json = await data.json();

    // console.log(json);
    setResMenu(json);
  };

  return resMenu;
};

export default useRestaurantMenu;
