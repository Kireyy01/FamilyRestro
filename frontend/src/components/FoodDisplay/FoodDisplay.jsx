import React, { Suspense, useContext } from "react";

import "./FoodDisplay.css";
import FoodItem from "../FoodItem/FoodItem";
import { StoreContext } from "../../context/StoreContext";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div className="food-display" id="food-display">
      <h2>Top dishes near you!!</h2>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="food-display-list">
          {food_list &&
            food_list.length > 0 &&
            food_list.map((item, index) => {
              if (category === "All" || category === item.category) {
                return (
                  <FoodItem
                    key={index}
                    id={item._id}
                    name={item.name}
                    description={item.description}
                    price={item.price}
                    image={item.image}
                  />
                );
              }
            })}
        </div>
      </Suspense>
    </div>
  );
};

export default FoodDisplay;
