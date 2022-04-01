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
       
        <div>
          {updatedRestNames.map((task) => (
            <button className="edit-task-btn" onClick={()=>handleClick(task.id)} >
            <div className="task-cards" key={task.id}>
            <h2>{task.name}</h2>
            <h3>Cost for 2 - Rs.{task.costForTwo}</h3>
            <h3>{task.location}</h3> 
            </div>
            </button>
          ))}
        </div>

      );
};
export default RestaurantCard;