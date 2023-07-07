import { useState } from "react";
import { restaurantList } from "../constants";
import RestrauntCard from "./RestaurantCard";

function filterData(searchTxt,restaurants){
    return restaurantList.filter((restaurant)=>restaurant.data.name.includes(searchTxt))
}
const Body = () => {
    const [restaurants,setRestaurants]=useState(restaurantList)
    const [searchTxt,setSearchText] = useState("KFC");

  return (
    <>
    <div className="search-container">  
        <input 
        type="text"
        className="search-input"
        placeholder="Search"
        value={searchTxt}
        onChange={(e)=>{
            setSearchText(e.target.value)
            }
        }
        />
        {/* <h2>{val}</h2> */}
        <button className="search-btn" onClick={()=>{
            const data=filterData(searchTxt,restaurants)
           setRestaurants(data);
        }}>Search - {searchTxt}</button>
    </div>
      <div className="restaurant-list">
        {restaurants.map((restaurant) => {
          return (
            <RestrauntCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};
export default Body;