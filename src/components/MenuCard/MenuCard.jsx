import React from "react";

function RestaurantCard({dishesName}){
    const updatedDishesNames = dishesName.message.map((item) => ({ name: item.dishName ,price:item.price, rating:item.rating}));
    console.log(updatedDishesNames);

    return (
       
        <div>
          {updatedDishesNames.map((task) => (
            <div className="task-cards" >
            <h3>Dish : {task.name}</h3>
            <h4>Price : Rs.{task.price}</h4>
            <h4>Rating :{task.rating}</h4> 
            </div>
          ))}
        </div>

      );
};
export default RestaurantCard;