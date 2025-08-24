import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
const ItemList = ({items}) => {

    const dispatch = useDispatch();
    const handleAddItems = (item) =>{
      //dispatch action
      dispatch(addItem(item))
    }
    return(
        <div>
          {items.map(item=>(
            <div key={item.card?.info.id} className="p-3 m-2 border-b-2 flex border-gray-300">
               <div className="flex flex-col text-left w-9/12">
                 <span className="text-sm font-semibold">{item.card?.info.name}</span>
                 <span className="text-sm font-semibold">₹ {item.card?.info.price/100 || item.card.info.defaultPrice/100}</span>
                 <p className="text-xs">{item.card.info.description}</p>
               </div>
               <div className="w-3/12 p-2 ms-3">
                   <div className="absolute">
                     <button className="bg-black text-white p-2 m-2 rounded-lg hover:cursor-pointer" onClick={()=>handleAddItems(item)}>Add +</button>
                   </div>
                   <img className="h-36 w-full"src={CDN_URL+item.card.info.imageId}/>
               </div>
               
            </div>
          ))}
        </div>
    )
}

export default ItemList;