import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

import Card from '../Card/Card';


const Carausel = ({allData,type}) => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }
    }
        
        modules={[Pagination]}
        className="mySwiper"
      >
        {allData.map(items => (<SwiperSlide><Card data={items} type={type}/></SwiperSlide>))}
      </Swiper>
    </>
  )
}

export default Carausel
