import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const WhatYourMind = ({data}) => {

  

    if(data === null){ return; }
    return(
        <>
  <div className='container'>

<div className='row'>
      <h2 className='sc-aXZVg bwoZPF title '>What's on your mind?</h2>
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