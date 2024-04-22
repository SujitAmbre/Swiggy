import { useSelector } from "react-redux";
import Header from "./Header";
import { useState } from "react";
const Cart = ()=>{
    const cardData = useSelector((store)=>store.cartData);
    const [Quantity, setQuantity] = useState([]);
    if(cardData ==="" || cardData === null || cardData === undefined || cardData==="undefined") {
        return;
    }
    console.log(cardData.cartData.card)
    return(
        <>
        <div className="container">
            <Header />
        </div>
        
        <div className="container">
            <div className="row" style={{textAlign:"left"}}>
            <div className="col-lg-4">
                <h1>Cart</h1>
            </div>
            <div className="col-lg-4">
                
               {
                cardData?.cartData?.map((i)=>{
                    console.log(i)
                    return(
                        <>
                        <h5>{i?.card?.info?.name}</h5>
                         <div className="row">                   
                    <div className="col-lg-4">
                    <p>Quantity</p>
                    </div>
                    <div className="col-lg-6">
                    <div style={{display:"flex",width:"50%"}}>
                   
                   <button className="btn" onClick={()=>setQuantity([...Quantity, Quantity +1 ])}>+</button>
                   <input className="form-control" value={Quantity} />
                   <button className="btn" onClick={()=>setQuantity([...Quantity, Quantity  - 1 ])}>-</button>
               </div>
                    </div>
                </div>
                
                <div style={{display:"flex",width:"23%"}}>
                   
                    <p>price: &nbsp;</p>
                    <p>&nbsp;<b>{
                      i?.card?.info?.price &&  Quantity > 0 ? i?.card?.info?.price * Quantity / 100 : i?.card?.info?.price/100
                        }
                   /-</b></p>
                </div>
                        </>
                    )
                })
               }
               


                <div className="row">
                    <p>Bill Details</p>
                    <div className="col-lg-4">
                        <p>Item Total</p>
                    </div>
                    <div className="col-lg-4">
                        <p>{cardData?.cartData?.card?.info?.price * Quantity / 100}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <p>Delivery Fee | 27.3 kms</p>
                    </div>
                    <div className="col-lg-4">
                        
                    </div>
                </div>
            </div>
            <div className="col-lg-4">
                
            </div>
            </div>
           
        </div>
        </>
    )
}
export default Cart;