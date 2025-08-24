import RestaurantCard ,{withPromotedLabel} from "./RestaurantCard";
import resData from "../utils/mockData";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body =() =>{

   // Local state variable - super power variable
     const [listOfRestaurents, setlistOfRestaurents] = useState([]);
     const [filteredRestaurents, setFilteredRestaurents] = useState([]);
     const [searchText, setSearchText] = useState('');

     const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
     useEffect(()=>{
        fetchData();
     },[])

     const fetchData = async() =>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.9124336&lng=75.7872709&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
     
        const json = await data.json();

        //optioal chaining
        setlistOfRestaurents(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurents(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    // normal js variable
    // let listOfRestaurents = []


    const onlineStatus = useOnlineStatus();

    if(onlineStatus == false) return (
      <h1>
        Looks like you're offline !! Please check your internet connection
      </h1>
    )
   const {loggedInUser, setUserInfo} = useContext(UserContext);

    return listOfRestaurents.length == 0 ? <Shimmer/> : (
      <div className="body m-4">
        <div className="search-container">
          <div className="search">
            <input type="text" className="search-input border-1 p-2" value={searchText} onChange={(e)=>setSearchText(e.target.value)}></input>
            <input className="m-2 p-2" onChange={(e)=>setUserInfo(e.target.value)} value={loggedInUser} ></input>
            <button className="border-1 p-2 cursor-pointer hover:bg-blue-500" onClick={()=>{
                debugger;
                setFilteredRestaurents(
                    listOfRestaurents.filter(res => res.info.name.toLowerCase().includes(searchText.toLowerCase())))
            }}>Search</button>
          </div>
          <div className="filter">
            <button className="filter-btn" onClick={()=>{
                const filteredList = listOfRestaurents.filter(res => res.info.avgRating > 4.5);
                setlistOfRestaurents(filteredList);
            }}>Top Rated Restaurant</button>
          </div>  
        </div>
        
        <div className="res-container">
            { filteredRestaurents.map((res,index) => <Link key={res.info.id} to={"/restaurants/"+res.info.id}>
            {index == 2 ?  <RestaurantCardPromoted resData={res}/>: <RestaurantCard   resData={res}/>}
            
            </Link>)}
        </div>
      </div>
    )
}

export default Body;