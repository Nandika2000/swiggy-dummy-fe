

function DishCard({RestName,setIsClicked})
{
    const handleClick = ()=> {
        setIsClicked(false);
    }
    const rawRestNames = RestName.messgae;
    if(rawRestNames.length === 0)
    {
        return (<div>
            <h2>ummmmmmmmmm...... NO RESULTS FOUND</h2>
            <button onClick={handleClick}>BACK</button>
        </div>)
    }
    else {
        const updatedRestNames = rawRestNames.map((item) => ({ dishName: item.dishName ,price: item.price ,rating:item.rating, restaurant:item.restaurant.restaurantName}))
    return (
       
        <div>
          {updatedRestNames.map((task) => (
        
            <div className="task-cards" >
            <h2>{task.dishName}</h2>
            <h3>PRICE - Rs.{task.price}</h3>
            <h3>RATING - {task.rating}</h3> 
            <h3>{task.restaurant}</h3>
            </div>
          ))}
           <button onClick={handleClick}>BACK</button>
        </div>

      );
    }
}
export default DishCard;