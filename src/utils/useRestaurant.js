import { useState, useEffect } from "react";
import { RES_URL } from "../config";
const useRestaurant = (id) => {
  // Get data from API
  const [restaurant, setRestaurant] = useState({});
  const [menu, setMenu] = useState({});
  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(RES_URL + id + "&submitAction=ENTER");
    const { data: jsonData } = await data.json();
    // console.log(jsonData);

    // console.log(jsonData);
    setRestaurant(jsonData.cards[4].groupedCard.cardGroupMap.REGULAR.cards);
    // console.log(jsonData.cards[2].groupedCard);
    if (jsonData?.cards[3]?.groupedCard?.cardGroupMap)
      setMenu(jsonData.cards[3].groupedCard.cardGroupMap.REGULAR.cards);
    else setMenu(jsonData.cards[4].groupedCard.cardGroupMap.REGULAR.cards);
  }
  // console.log(restaurant);
  return { restaurant, menu };
  // returnn restaurant data
};

export default useRestaurant;

/* export const useMenu = (id) =>{
  const [menu, setMenu] = useState();
    useEffect(() => {
        getRestaurantInfo();
      }, []);
    
      async function getRestaurantInfo() {
        const data = await fetch(
          RES_URL + id +
            "&submitAction=ENTER"
        );
        const { data: jsonData } = await data.json();
        setMenu(jsonData.cards[2].groupedCard.cardGroupMap.REGULAR.cards);
      }
      return menu;
} */
