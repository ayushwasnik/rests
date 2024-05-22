import React from "react";

function ItemCategories({ itemCards }) {
  // console.log(itemCards);
  return (
    <div>
      <div className="recommeded">
        {itemCards.map((card) => {
          return (
            <div className="recommended" key={card.card.info.id}>
              <div className="resmenu-info">
                <h2>{card.card.info.name}</h2>
                <p>
                  Rs
                  {card.card.info.defaultPrice / 100 ||
                    card.card.info.price / 100}
                </p>
                <p> {card.card.info.description}</p>
              </div>
              <div className="resmenu-img-container">
                <img
                  className="remenu-img"
                  src={
                    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" +
                    card.card.info.imageId
                  }
                  alt="loading resmenu-img"
                />
                <button className="add-btn">Add</button>
              </div>
              <hr></hr>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ItemCategories;

{
  /* <h3>
        {
          resMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
            ?.card?.card?.title
        }
      </h3>
      <div className="recommeded">
        {itemCards.map((card) => {
          return (
            <div className="recommended" key={card.card.info.id}>
              <div className="resmenu-info">
                <h2>{card.card.info.name}</h2>
                <p>
                  Rs
                  {card.card.info.defaultPrice / 100 ||
                    card.card.info.price / 100}
                </p>
                <p> {card.card.info.description}</p>
              </div>
              <div className="resmenu-img-container">
                <img
                  className="remenu-img"
                  src={
                    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" +
                    card.card.info.imageId
                  }
                  alt="loading resmenu-img"
                />
              </div>
              <hr></hr>
            </div>
          );
        })}
      </div> */
}
