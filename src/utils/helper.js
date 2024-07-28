
export function filterData(searchText,restaurants){
    // console.log(restaurants);
    return searchText==""?restaurants:restaurants.filter((restaurant)=>restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()));
  }