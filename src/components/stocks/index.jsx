import React from 'react'
import c from './stocks.module.scss'
import { Components } from '..'
import {Swiper, SwiperSlide} from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation"; 
import Slide from './slide';
import { slidelist } from '../../utils';

const Stocks = () => {
  return (
    <div className={c.container}>
      <div className={c.stocks}>
        <Components.Title
          text={'Акции'}
        />
        <Swiper
          slidesPerView={1}
          navigation={true}
          loop={true}
          modules={[Navigation]}
          className={c.my_swiper}
        >
          {
            slidelist.map(item => (
              <SwiperSlide key={item.id}>
                <Slide 
                  img={item.img}
                />
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
    </div>
  )
}

export default Stocks