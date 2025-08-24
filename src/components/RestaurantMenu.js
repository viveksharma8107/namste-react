
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useState } from "react";
import RestaurantCategory from "./RestaurantCategory";
const RestaurantMenu = () => {

    const { resId } = useParams();
    // const [resInfo, setResInfo] = useState(null);

    const resInfo = useRestaurantMenu(resId);
    const [showIndex,setShowIndex] = useState(0);
    

   
//     useEffect(()=>{
//      fetchMenu()
//     },[])

//     const fetchMenu = async() => {
//     const data = await fetch(MENU_API+ resId+'&catalog_qa=undefined&submitAction=ENTER');

//     const json = await data.json();
//     setResInfo(json?.data)
// }
   if(resInfo=== null){
    return <Shimmer/> ;
   }
    console.log(resInfo);
    const { name, cuisines, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;

    const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[9]?.card?.card;
    console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c.card?.card?.['@type']==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    return  (
        <div className="text-center w-6/12 mx-auto">
          <h1 className="font-bold my-6 text-2xl">{name}</h1>
          <h3 className="font-bold text-lg">{cuisines.join(',')} - {costForTwoMessage}</h3>
          
          {/* <ul>
            {itemCards?.map( c => <li key={c.card.info.name}>{c.card.info.name} - Rs.{c.card.info.price/100 || c.card.info.defaultPrice/100}</li>)}
           
          </ul> */}
          {/* controlled component */}
          {categories.map((c,index)=><RestaurantCategory key={c.card.card.title} data={c.card.card} showItems={index === showIndex ? true : false} setShowIndex={()=>{setShowIndex(index)}}/>
          )}
        </div>
    )
}

export default RestaurantMenu;