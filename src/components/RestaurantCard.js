import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const restaurant = props.resData.info;
    return (
        <div className="res-card">
          <img className="res-logo h-60" alt="res-logo" src={CDN_URL+ restaurant.cloudinaryImageId}/>
          <h3 className="font-bold text-lg">{restaurant.name}</h3>
          <h4>{restaurant.cuisines.join(",")}</h4>
          <h4>{restaurant.avgRating}</h4>
          <h4>{restaurant.costForTwo}</h4>
          <h4>{restaurant.deliveryTime}</h4>
        </div>
    )
}

/***
 *  Higher order component
 *  input - RestaurantCard ==> RestaurantCardPromoted
 */

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
         <label className="absolute bg-black text-white p-2 m-2">Promoted</label>
         <RestaurantCard {...props}/>
      </div>
      
    )
  }
}


export default RestaurantCard;