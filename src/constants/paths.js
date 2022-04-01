export const BACKEND_URL = 'http://localhost:3000/swiggy';
export const getRestaurantsName = {
    method: 'get',
    url: 'http://localhost:3000/swiggy/get-restaurants/',
  };
export const getDishesName =(restId) => {
  const obj = {
  method: 'get',
  url: `http://localhost:3000/swiggy/get-menu/${restId}`,
};
return obj;
}
export const getRestNameByDish =(dishName) => {
  const obj = {
  method: 'get',
  url: `http://localhost:3000/swiggy/get-restaurant-by-dish/${dishName}`,
};
return obj;
}