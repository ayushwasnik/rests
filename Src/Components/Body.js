import { useContext, useEffect, useState } from "react";
import RestaurantCard, { withOffer } from "./RestaurantCard";
import resList from "../utils/mockData";
import { Link } from "react-router-dom";
import useListOfRestaurant from "../utils/useListOfRestaurant";
import useFilteredList from "../utils/useFilteredList";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const { listofRestaurant, setListofRestaurant } = useListOfRestaurant();

  const filteredList = useFilteredList();

  const onlineStatus = useOnlineStatus();

  const RestaurantWithOffer = withOffer(RestaurantCard);

  // console.log(listofRestaurant[0].info.aggregatedDiscountInfoV3.header);
  // console.log(listofRestaurant);

  const { loggedInUser, setUserName } = useContext(UserContext);

  if (onlineStatus === false)
    return (
      <h1>
        Looks like you're offline!! Please check your internet connection;
      </h1>
    );

  // Condition Rendering
  // if (listofRestaurant.length == 0) {
  //   return <div>Loading......</div>;
  // }
  //console.log ("body render")
  return listofRestaurant.length == 0 ? (
    <h2>Loading.....</h2>
  ) : (
    <div className="body-container">
      <div className="search-container">
        <div className="search">
          <input
            type="text"
            placeholder="Search for Restaurant"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
        </div>
        <div className="search-btn">
          <button
            onClick={() => {
              // console.log(searchText);
              let filtered = filteredList.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setListofRestaurant(filtered);
            }}
          >
            Search
          </button>
        </div>
        <div>
          <label>UserName : </label>
          <input
            type="text"
            value={loggedInUser}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="top-rest-container">
        <input
          type="button"
          value="Top Rated Restaurant"
          className="top-rated-rest"
          onClick={() => {
            let filteredList = listofRestaurant.filter((res) => {
              return res.info.avgRating > 4.5;
            });
            setListofRestaurant(filteredList);
          }}
        />
      </div>

      <div className="card-container">
        {/* <RestaurantCard resData={resObj[0]} />
          <RestaurantCard resData={resObj[1]} />
          <RestaurantCard resData={resObj[2]} /> */}
        {listofRestaurant.map((rest) => {
          return (
            <Link to={"/restaurants/" + rest.info.id} key={rest.info.id}>
              {rest?.info?.aggregatedDiscountInfoV3 ? (
                <RestaurantWithOffer resData={rest} />
              ) : (
                <RestaurantCard resData={rest} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
