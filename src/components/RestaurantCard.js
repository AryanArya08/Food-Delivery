import { IMG_CDN_URL } from "../config";

//Optional Chaining
const RestaurantCard = ({
  name,
  cuisines,
  avgRating,
  cloudinaryImageId,
  user,
}) => {
  return (
    <div
      className="w-60 h-fit flex flex-col items-center rounded-md p-2 m-2  bg-green-400 
      hover:drop-shadow-xl hover:bg-green-300  "
    >
      <img
        className="h-40 sm:h-52 md:h-52 w-full "
        src={IMG_CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-semibold text-lg md:text-xl mt-1">{name}</h3>
      <p className="font-medium text-sm">{cuisines.slice(0, 2).join(",")}</p>
      <h5>{avgRating === "--" ? "NA " : avgRating}⭐</h5>
      {/* <h5>{user.name}</h5> */}
    </div>
  );
};
export default RestaurantCard;
