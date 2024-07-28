import { IMG_CDN_URL } from "../config";
import { removeItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const CartCard = ({
  id,
  name,
  imageId,
  isVeg,
  price,
  ratings,
  defaultPrice,
}) => {
  //   const { rating } = ratings.aggregatedRating;
  const item = {
    id,
    name,
    imageId,
    isVeg,
    price,
    // rating,
    defaultPrice,
  };
  const dispatch = useDispatch();
  const remFoodItem = (item) => {
    dispatch(removeItem(item));
  };
  return (
    <div key={id} className="menu_Card  m-2 inline-flex  ">
      <div className="menu_list h-auto w-48 bg-green-400 p-3 rounded-lg sm:w- ">
        {/* <img
          className="h-22"
          src={
            imageId
              ? IMG_CDN_URL + imageId
              : "https://gdm-catalog-fmapi-prod.imgix.net/ProductScreenshot/67728af4-bef4-4fe6-9e17-086cbb71ca12.jpeg"
          }
        /> */}
        <h3 className="font-semibold text-base">{name}</h3>
        <h3 className="text-sm">{isVeg ? "VEG" : "NON-VEG"}</h3>
        <h4 className="font-semibold text-sm">
          ₹{(price ? price : defaultPrice) / 100}
        </h4>
        {/* <h4>{rating ? rating : "N/A"}⭐</h4> */}
        <button
          className="mt-2 orderBtn bg-green-600 text-white font-semibold p-2 rounded-lg hover:bg-green-800"
          onClick={() => remFoodItem(item)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartCard;
