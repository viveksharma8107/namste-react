import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart =()=>{
    const cartItems = useSelector(store => store.cart.items)

    const dispatch = useDispatch();
    const clearCartItems = () =>{
       dispatch(clearCart())
    }
    if(cartItems.length === 0 ) return <h1>Please add items</h1>
    return (
        <div className="text-center m-4 p-4">
            <h1 className="text-2xl font-bold">Cart</h1>
            <button className="bg-amber-300 rounded-sm p-2 float-right hover:cursor-pointer" onClick={()=>clearCartItems()}>Clear cart</button>
            <div className="w-6/12 m-auto">
                <ItemList items={cartItems}/>
            </div>
        </div>
    )
}

export default Cart;