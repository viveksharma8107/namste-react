
import ItemList from "./ItemList";
const RestaurantCategory = ({data,showItems,setShowIndex}) =>{
    const handleClick = ()=>{
        setShowIndex();
    }
    return (
        <div className=" bg-gray-100 p-2 m-2 shadow-lg">
            <div className="text-left" onClick={handleClick}>
               <div className=" font-bold p-2 m-2 hover:cursor-pointer">{data.title} ({data.itemCards.length}) <span className="float-end text-2xl">+</span></div>
            
            </div>
            {showItems && <ItemList items={data.itemCards}/>}
        </div>
    )
}

export default RestaurantCategory;