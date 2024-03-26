import { useState } from "react";

const CollectionRestaurant = ({hotelList, filterhotelData}) => {
  
    return(
        <>
            {
                hotelList?.map((item)=>{
                   // console.log(item?.card?.card?.info);
                    if (item?.card?.card?.info?.cloudinaryImageId !== undefined) {
                return(
                    <>
                        <div className="col-lg-4">
                            <div className="restauratnImg" style={{
                backgroundImage: `url(https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${item?.card?.card?.info?.cloudinaryImageId})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100%',
                position:'relative',
                height: '300px', // Set the height of the div
            }}>
                                <h6>{item?.card?.card?.info?.aggregatedDiscountInfoV3?.header} {item?.card?.card?.info?.aggregatedDiscountInfoV3?.subHeader}</h6>
                            </div>
                            <div>
                                <h2>{item?.card?.card?.info?.name}</h2>
                                <p><span>Rating: {item?.card?.card?.info?.avgRating}</span> <span>Delivery Time: {item?.card?.card?.info?.sla?.slaString}</span></p>
                                <p>{item?.card?.card?.info?.cuisines[0]}</p>
                            </div>
                        </div>
                    </>
                )
                    }
                 })
            }
        </>
    )
}
export default CollectionRestaurant;