import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function RestaurantCard({restaurantsName}){
    const navigate= useNavigate();
    const updatedRestNames = restaurantsName.message.map((item) => ({ name: item.restaurantName ,id: item.id ,costForTwo:item.costForTwo, location:item.location}));
    const [isClicked, setIsClicked]= useState(false);
    const handleClick = (restId) => {
        if(!isClicked)
        {
            setIsClicked(true);
            navigate(`/menu/${restId}`)
        }
    }
    return (
       
        <div data-testid='RestCardContainer'>
          {updatedRestNames.map((Restaurant) => (
            <button data-testid='RestCardBtn' onClick={()=>handleClick(Restaurant.id)} >
            <div data-testid='RestCard' className="Restaurant-cards" key={Restaurant.id}>
            <h2 data-testid='RestName'>{Restaurant.name}</h2>
            <h3 data-testid='RestCost'>Cost for 2 - Rs.{Restaurant.costForTwo}</h3>
            <h3 data-testid='RestLoc'>{Restaurant.location}</h3> 
            </div>
            </button>
          ))}
        </div>

      );
};
export default RestaurantCard;