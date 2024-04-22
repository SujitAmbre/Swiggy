import { useEffect, useState } from "react";
import Header from "./Header";
import WhatYourMind from "./WhatYourMind";
import TopRestaturant from "./TopRestuarant";

const HomePage = () => {
    const [whatsMindData, setWhatsMindData] = useState(null);
    const [whatsMindTitle, setWhatsMindTitle] = useState(null);
    const [topRestaurant, settopRestaurant] = useState(null);
    useEffect(()=>{
        const fetchData = async () => {
            const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
            
            const newData = await response.json();
           
            setWhatsMindData(newData.data.cards[0]);
            settopRestaurant(newData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
          };
          fetchData();
          
    },[])
   
    return(
        <>
            <Header />
            <WhatYourMind data={whatsMindData} />
            <TopRestaturant topRestaurantArray={topRestaurant} />
        </>
    )
}
export default HomePage;