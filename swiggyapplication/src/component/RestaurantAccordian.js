import { useState, useEffect } from "react";
import RestaurantAccoridanItem from "./RestaurantAccoridanItem";

const RestaurantAccordian = ({ addonData }) => {
  const [accordianData, setAccordianData] = useState([]);
  const [activeItem, setActiveItem] =useState(0)
  useEffect(() => {
    const finalData = addonData?.filter((i) => {
      return i?.card?.card?.['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
    });
    setAccordianData(finalData);
  }, [addonData]); 

  const handleAccordian = (index)=>{
    console.log(activeItem, index)
    setActiveItem(activeItem === index ? null : index);
  }
  return (
    <div>
      {accordianData.map((item, index) => (
        <div key={index}>
            <h3 onClick={() => handleAccordian(index)}>{item.card.card.title} ({item.card.card.itemCards.length})</h3>
          {
            activeItem === index && <div>
            <RestaurantAccoridanItem itemlist={item.card.card.itemCards} />
          </div>
          }
          
        </div>
      ))}
    </div>
  );
};

export default RestaurantAccordian;
