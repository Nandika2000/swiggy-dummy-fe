function DishCard({RestName,setIsClicked, setSearchDish})
{
    const handleClick = ()=> {
        setIsClicked(false);
        setSearchDish('');
    }
    const rawRestNames = RestName.messgae;
    if(rawRestNames.length === 0)
    {
        return (<div data-testid='noResultContainer'>
            <h2 data-testid = 'noResults'>ummmmmmmmmm...... NO RESULTS FOUND</h2>
            <button data-testid='back-btn' onClick={handleClick}>BACK</button>
        </div>)
    }
    else {
        const updatedRestNames = rawRestNames.map((item) => ({ dishName: item.dishName ,price: item.price ,rating:item.rating, restaurant:item.restaurant.restaurantName}))
    return (
       
        <div data-testid='ResultConatiner'>
          {updatedRestNames.map((task) => (
        
            <div data-testid='restCard' className="task-cards" >
            <h2 data-testid='dishName'>{task.dishName}</h2>
            <h3 data-testid='price'>PRICE - Rs.{task.price}</h3>
            <h3 data-testid='rating'>RATING - {task.rating}</h3> 
            <h3 data-testid='restName'>{task.restaurant}</h3>
            </div>
          ))}
           <button onClick={handleClick}>BACK</button>
        </div>

      );
    }
}
export default DishCard;