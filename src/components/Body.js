import { useState, useEffect, useContext } from "react";
import { restaurantList2, restaurantList } from "../config";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";

//What is state?
//State is a data that can be changed over time and can be used in our application.

//What is Hook?
//==> Hook is a function that allows us to use state in functional components without using class components and lifecycle methods.

//What is useState()?
//==> useState() is a hook that allows us to use state in functional components  and it returns an array with two values. The first value is the state and the second value is a function that allows us to change the state.

//Why do we need state variable?
//==> We need state variable to store the data that can be changed over time and can be used in our application.

//What is useEffect()?
//==> useEffect() is a hook that allows us to use lifecycle methods in functional components. It takes two arguments, the first argument is a function that will be executed when the component is mounted and the second argument is an array of dependencies. If the array of dependencies is empty, the function will be executed only once when the component is mounted. If the array of dependencies is not empty, the function will be executed when the component is mounted and when any of the dependencies is changed.

const Body = () => {
  const [allRestaurants, setallRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  // Local Variable in React
  const [searchText, setSearchText] = useState(""); //returns -> [variableName, functionToChangeVariable]
  const { user, setUser } = useContext(UserContext);

  /*  useEffect(()=>{},[]) // [] -> dependency array -> if empty, it will run only once
   useEffect(()=>{},[searchText]) // if searchText changes, it will run again
   useEffect(()=>{},[searchText,restaurants]) // if searchText or restaurants changes, it will run again  
  */

  useEffect(() => {
    // API Call
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5830002&lng=88.3372909&page_type=DESKTOP_WEB_LISTING"
    );
    // const data = await fetch(
    //   "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.653564&lng=88.4450847&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    // );
    const json = await data.json();
    // console.log(typeof json);
    // console.log(
    //   json?.data?.cards[1].card.card.gridElements.infoWithStyle.restaurants
    // );

    // console.log(json?.data?.cards[2].card.card.gridElements.infoWithStyle.restaurants);
    // setallRestaurants(
    //   json?.data?.cards[2].card.card.gridElements.infoWithStyle.restaurants
    // );
    // setFilteredRestaurants(
    //   json?.data?.cards[1].card.card.gridElements.infoWithStyle.info
    // );

    if (
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    ) {
      // console.log(
      //   json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
      //     ?.restaurants
      // );
      setallRestaurants(
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredRestaurants(
        json?.data?.cards[2].card.card.gridElements.infoWithStyle.restaurants
      );
    } else {
      setallRestaurants(restaurantList2);
      setFilteredRestaurants(restaurantList2);
    }
  }

  // console.log("render");
  /*
    render will be called before useEffect callback function
    it will be called everytime the state is changed
  */

  const online = useOnline();
  if (!online)
    return <h1>You're Offline.Please check your internet connection</h1>;
  //Not render component
  if (!allRestaurants) return null;
  // Conditional Rendering
  // if restaurant.length is 0 show shimmer effect

  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container m-4 flex justify-start sm:justify-center md:justify-center md:content-center">
        <input
          type="search"
          placeholder="Search..."
          className="search-input py-1 md:py-0 lg:py-0 px-3 sm:px-5 border-2 border-green-300 rounded-3xl focus:outline-green-400"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          data-testid="search-btn"
          className="search-btn m-2 px-3 py-0.5 w-xl rounded-full border-2 border-green-400 bg-green-300"
          onClick={() => {
            // need to filter the data
            // console.log(searchText)
            const Data = filterData(searchText, allRestaurants);
            //update the state - restaurants
            setFilteredRestaurants(Data);
          }}
        >
          Search
        </button>

        {/* <input
          className="search-input py-1 md:py-0 lg:py-0 px-2 sm:px-5 border-2 border-green-300 rounded-3xl focus:outline-green-400"
          onChange={(e) => setUser({ name: user.name, email: e.target.value })}
        ></input> */}
      </div>
      <div className="restraunt-list flex flex-wrap justify-around  p-1 items-center">
        {filteredRestaurants.length === 0 ? (
          <h1>No Restaurants Found</h1>
        ) : (
          filteredRestaurants.map((restaurant) => {
            console.log(restaurant);
            return (
              <Link
                to={"/restaurant/" + restaurant.info.id}
                key={restaurant.info.id}
              >
                <RestaurantCard {...restaurant.info} />
              </Link>
            );
          })
        )}
      </div>
    </>
  );
};
export default Body;
