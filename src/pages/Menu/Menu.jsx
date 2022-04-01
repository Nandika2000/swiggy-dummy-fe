/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { getDishesName } from "../../constants/paths";
import makeRequest from "../../utils/makeRequest";
import MenuCard from "../../components/MenuCard/MenuCard";
import { useNavigate, useParams } from "react-router-dom";

function Menu (){
    const navigate = useNavigate();
    const {restId} =useParams();
    const [dishesName, setdishesName]=useState([]);
    const[isMenuInitialised,setMenuInitialised]=useState(false);

    useEffect(()=>{
        makeRequest(getDishesName(restId)).then( (data) =>{
            if(data.status === 200)
            {
            setdishesName(data.data);
            setMenuInitialised(true);
            }});
    }  ,[]);

    return(<div>
        {' '}
        {isMenuInitialised ? <MenuCard dishesName={dishesName} /> :<div/>}
        <button onClick={()=>navigate('/')}>Back</button>
        </div>);
}

export default Menu;