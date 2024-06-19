import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const WhatYourMind = ({data}) => {
const selectedLang = useSelector((store)=>store?.currentLangName?.currentLang);
  
console.log(selectedLang)
    if(data === null){ return; }
    let title;
    if(selectedLang === "marathi") {
      title = "तुमच्या मनात काय आहे?";
    } else if(selectedLang==="hindi") {
      title = "आपके दिमाग में क्या है?";
    } else {
      title = "Whats on your mind?";
    }
    return(
        <>
  <div className='container'>

<div className='row'>
      <h2 className='sc-aXZVg bwoZPF title '>{
        title
      }</h2>
</div>
  <Swiper
        modules={[Navigation, Pagination]}
      spaceBetween={50}
      slidesPerView={7}
      navigation
    >
    {
      // console.log(whatsMindData)
      data.card.card.gridElements.infoWithStyle.info.map((item)=>{
         const itemUrl = item.entityId.split('?');
        return(
          <>
            <SwiperSlide key={item.id}>
              <div>
         <Link to={`/collections/${itemUrl[1]}`}>
    <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/${item.imageId}`} style={{maxWidth:'100%'}}></img>
    </Link>
              </div>
            </SwiperSlide>
          </>
        )
      })
    }
    </Swiper>
    </div>
        </>
    )
}
export default WhatYourMind;