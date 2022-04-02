import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getRestaurantsName, getRestNameByDish } from "../../constants/paths";
import makeRequest from "../../utils/makeRequest";
import RestaurantCard from "../../components/RestaurantCard/RestaurantCard";
import DishCard from "../../components/DishCard/DishCard";

function HomePage(){
    const [restaurantsName, setRestaurantsName]=useState([]);
    const[isRestInitialised,setRestInitialised]=useState(false);
    const [searchDish,setSearchDish]= useState();
    const [isClicked,setIsClicked] =useState(false);
    const [searchByDish,setSearchByDish] = useState();
    const handleChange = (event) => {
        setSearchDish(event.target.value);
      };
    const handleClick = () =>{
        if(!isClicked)
        setIsClicked(true);
        else
        setIsClicked(false);
    }
    useEffect(()=>{
         makeRequest(getRestaurantsName).then( (data) =>{
            if(data.status === 200)
            {
            setRestaurantsName(data.data);
            setRestInitialised(true);
            }});
    },[]);
    useEffect(()=>{
        makeRequest(getRestNameByDish(searchDish)).then((data)=>{
            if(data.status === 200)
            {
                setSearchByDish(data.data);
            }
        })
    },[searchDish]);



    return(<div>
    <div>
    <input placeholder="dish-name" onChange={handleChange} value = {searchDish}></input>
    <button onClick={handleClick}>Search</button>
    </div>
    {isClicked ? <DishCard RestName={searchByDish} setIsClicked={setIsClicked} setSearchDish={setSearchDish}/>:isRestInitialised ? <RestaurantCard restaurantsName={restaurantsName} /> :<div/>}
    </div>);
}
    export default HomePage;