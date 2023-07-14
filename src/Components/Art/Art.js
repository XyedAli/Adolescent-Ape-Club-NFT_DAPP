/** @format */

import React from "react";
import Wrapper from "./Art.styled";
// images
import Artimg from "../../images/slider/1.png";
import Artimg1 from "../../images/slider/2.png";
import Artimg2 from "../../images/slider/3.png";
import Artimg3 from "../../images/slider/4.png";
import Artimg4 from "../../images/slider/5.png";
import Artimg5 from "../../images/slider/6.png";
import Artimg6 from "../../images/slider/7.png";
import Artimg7 from "../../images/slider/8.png";
// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper.min.css'
import SwiperCore, { Autoplay } from 'swiper';



function Art() {
  SwiperCore.use([Autoplay]);
  return (
    <Wrapper>
      <div className='container'>
        <div className='artButton'>
          <h3 className='art'>Art Collection</h3>
        </div>
        <div className='row swiperSlider'>
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 2500,
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              120: {
                slidesPerView: 1,
              },
              390: {
                slidesPerView: 2,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
            modules={[Autoplay]}
            className='mySwiper'>
            <SwiperSlide>
              <div className='swiperImg'>
                <img src={Artimg} className='img-fluid' alt='' />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='swiperImg'>
                <img src={Artimg2} className='img-fluid' alt='' />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='swiperImg'>
                <img src={Artimg3} className='img-fluid' alt='' />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='swiperImg'>
                <img src={Artimg4} className='img-fluid' alt='' />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='swiperImg'>
                <img src={Artimg5} className='img-fluid' alt='' />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='swiperImg'>
                <img src={Artimg6} className='img-fluid' alt='' />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='swiperImg'>
                <img src={Artimg1} className='img-fluid' alt='' />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='swiperImg'>
                <img src={Artimg7} className='img-fluid' alt='' />
              </div>
            </SwiperSlide>
           
          </Swiper>
        </div>
      </div>
    </Wrapper>
  );
}

export default Art;
