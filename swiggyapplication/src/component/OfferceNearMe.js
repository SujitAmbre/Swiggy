import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import { useEffect } from "react";
import { fetchOfferData } from "../redux/offerceSlice";

const OfferceNearMe = ()=>{
    const dispatch= useDispatch();
   const offerData=  useSelector((store)=>store.offerData);
    useEffect(()=>{
        dispatch(fetchOfferData())
    },[])
    if(offerData===""){
        return;
       }
    return(
        <>
            <Header></Header>
            <h1>Offerce near me</h1>
            <div className="container">
                <div className="row">
                    
                </div>
            </div>
        </>
    )
}
export default OfferceNearMe;