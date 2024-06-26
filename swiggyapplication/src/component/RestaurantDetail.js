import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AddonAccordian from "./AddonAccordian";
import Header from "./Header";

const RestaurantDetail = ()=> {
    const {restaurantId} = useParams();
    const [restaurantDetailArray, setRestaurantDetail] = useState(null);
    useEffect(()=>{
        fetchRestaurantData();

    },[restaurantId])
    const fetchRestaurantData = async () => {
            const resultData = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.61610&lng=73.72860&restaurantId=${restaurantId}&catalog_qa=undefined&submitAction=ENTER`)
            const finalResult = await resultData.json();
     
            setRestaurantDetail(finalResult)

    }
    if(restaurantDetailArray === null) {
        return;
    }
    return(
        <>
       <div className="container"> 
       <Header />
       </div>
            <div className="container">
                <div className="col-lg-8" style={{ textAlign: 'left' }}>
                    <div className="row">
                        <div className="col-lg-12">
                            <h1>{restaurantDetailArray?.data?.cards[0]?.card.card.text}</h1>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-8">
                            <h4>{restaurantDetailArray?.data?.cards[2]?.card.card.info.name}</h4>
                            <p>{restaurantDetailArray?.data?.cards[2]?.card.card.info.cuisines.join(',')}</p>
                            <p>{restaurantDetailArray?.data?.cards[2]?.card.card.info.expectationNotifiers[0].enrichedText}</p>
                        </div>
                        <div className="col-lg-4">

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <p><span style={{ marginRight: '15px' }}>
                                <svg style={{ marginRight: '7px' }} class="RestaurantTimeCost_icon__8UdT4" width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" fill="none"><circle r="8.35" transform="matrix(-1 0 0 1 9 9)" stroke="#3E4152" stroke-width="1.3"></circle><path d="M3 15.2569C4.58666 16.9484 6.81075 18 9.273 18C14.0928 18 18 13.9706 18 9C18 4.02944 14.0928 0 9.273 0C9.273 2.25 9.273 9 9.273 9C6.36399 12 5.63674 12.75 3 15.2569Z" fill="#3E4152"></path></svg>
                                {restaurantDetailArray?.data?.cards[2]?.card.card.info.sla.slaString}
                            </span>

                                <span><svg style={{ marginRight: '7px' }} class="RestaurantTimeCost_icon__8UdT4" width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" fill="none"><circle cx="9" cy="9" r="8.25" stroke="#3E4152" stroke-width="1.5"></circle><path d="M12.8748 4.495H5.6748V6.04H7.9698C8.7948 6.04 9.4248 6.43 9.6198 7.12H5.6748V8.125H9.6048C9.3798 8.8 8.7648 9.22 7.9698 9.22H5.6748V10.765H7.3098L9.5298 14.5H11.5548L9.1098 10.57C10.2048 10.39 11.2698 9.58 11.4498 8.125H12.8748V7.12H11.4348C11.3148 6.475 10.9698 5.905 10.4298 5.5H12.8748V4.495Z" fill="#3E4152"></path></svg>  {restaurantDetailArray?.data?.cards[2]?.card.card.info.costForTwoMessage}</span>
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        {
                            restaurantDetailArray?.data?.cards[2]?.card?.card?.info?.aggregatedDiscountInfo?.descriptionList?.map((item) => {
                                return (
                                    <>
                                        <div className="col-lg-3" style={{ border: '1px solid #ccc' }}>
                                            <p>
                                                <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_28,h_28/Store_Assets/Icons/OfferIconCart"></img>
                                                {item.meta}
                                            </p>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                    <div className="row">
                            <AddonAccordian addonData={restaurantDetailArray?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards}  />
                    </div>
                </div>
            </div>
        </>
    )
}
export default RestaurantDetail;