import { useContext } from "react";
import { RES_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";
const RestaurantCard = (props) => {
  // console.log(props);

  const { loggedInUser } = useContext(UserContext);

  const { name, cloudinaryImageId, cuisines, avgRating, costForTwo } =
    props.resData.info;
  return (
    <div className="res-card">
      <div className="res-container">
        <img
          className="res-img"
          src={RES_URL + cloudinaryImageId}
          alt="rest-img"
        />
      </div>
      <div className="res-info">
        <h2 className="link">{name}</h2>
        <p className="link">{cuisines.join(", ")}</p>
        <h4 className="link">{avgRating}</h4>
        <h4 className="link">{costForTwo}</h4>
        <h4 className="link">user : {loggedInUser}</h4>
      </div>
    </div>
  );
};

export const withOffer = (RestaurantCard) => {
  return (props) => {
    // console.log(props);
    return (
      <div>
        <h3 className="offers">
          {props.resData.info.aggregatedDiscountInfoV3.header}
          {props.resData.info.aggregatedDiscountInfoV3.subHeader}
        </h3>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
