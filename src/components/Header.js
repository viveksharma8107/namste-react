import { useContext, useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = ()=>{

    const [btnName, setBtnName] = useState("Login")

    // if no dependency array => useeffect is called on every render
    // if dependency array is empty = [] => useeffect is called on initial render (just once)
    // if depencdency array is [btnName] => called every time btnName is updated.
    useEffect(()=>{
        console.log("use effect called")
    },[btnName]);

    const onlineStatus = useOnlineStatus();
    const {loggedInUser,setUserInfo} = useContext(UserContext);

    //redux //subscribing a store using selector

    const cartItems = useSelector(store => store.cart.items)

    return (
        <div className="header shadow-2xl pr-2">
           <div className="logo-container">
             <img  className="logo" src={LOGO_URL}/>
             <h2 style={{color:'brown'}}>CSK Kitchen</h2>
           </div>
           <input type="text"className="m-2 p-2" value={loggedInUser} onChange={(e)=>setUserInfo(e.target.value)}/>
           <div className="nav-items content-center">
              <ul>
                <li>
                    { onlineStatus ? "Online" : "Offline"}
                </li>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About Us</Link>
                </li>
                <li>
                    <Link to='/contact'>Contact Us</Link>
                </li>
                <li><Link to='/cart' className="text-lg font-bold">Cart-({cartItems.length} items)</Link></li>
                <li>
                    <Link to='/grocery'>Grocery</Link>
                </li>
                <button className="login-btn" onClick={()=>{
                    btnName === "Login" ? setBtnName('Logout') : setBtnName('Login')
                }}>
                  {btnName}
                </button>
                <li className="font-bold">{loggedInUser}</li>
              </ul>
           </div>
        </div>
    )
}

export default Header;