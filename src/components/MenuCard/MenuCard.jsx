import React from "react";

function MenuCard({dishesName}){
    const updatedDishesNames = dishesName.message.map((item) => ({ name: item.dishName ,price:item.price, rating:item.rating}));

    return (
       
        <div data-testid='dishCardContainer'>
          {updatedDishesNames.map((dish) => (
            <div data-testid='dishCard' className="dish-cards" >
            <h3 data-testid='dishName'>Dish : {dish.name}</h3>
            <h4 data-testid='dishPrice'>Price : Rs.{dish.price}</h4>
            <h4 data-testid='dishRating'>Rating :{dish.rating}</h4> 
            </div>
          ))}
        </div>

      );
};
export default MenuCard;