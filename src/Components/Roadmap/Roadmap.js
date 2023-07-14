/** @format */

import React from "react";
import Wrapper from "./Roadmap.styled";

import RoadImg1 from "../../images/roadmap/1.png";
import RoadImg2 from "../../images/roadmap/2.png";
import RoadImg3 from "../../images/roadmap/3.png";

import RoadImg4 from "../../images/roadmap/4.png";
import RoadImg5 from "../../images/roadmap/5.png";
import RoadImg6 from "../../images/roadmap/6.png";

import RoadImg7 from "../../images/roadmap/7.png";

// import images
// swiper react
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper.min.css'
import 'swiper/components/navigation/navigation.min.css'
import SwiperCore, { Navigation } from 'swiper';
function Roadmap() {
  SwiperCore.use([Navigation]);
  return (
    <Wrapper>
      <div className='roadmap' id='roadmap'>
        <div className='container'>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Navigation]}
            className='mySwiper'>
            <SwiperSlide>
              <div className='col-md-12'>
                <div className='singleItem'>
                  <div className='imgRoad'>
                    <img src={RoadImg1} className='img-fluid' alt='' />
                  </div>

                  <div className='roadContent'>
                    <h2>10%</h2>
                    <p>
                      We announce and identify early sponsors and get going on
                      the integrations of your NFT collection. Our Imagineers 
                      have already started working on other projects and
                      sponsors; each with plans that are incredible!!!
                    </p>
                  </div>
                  {/* road content end here */}
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='col-md-12'>
                <div className='singleItem'>
                  <div className='imgRoad'>
                    <img src={RoadImg2} className='img-fluid' alt='' />
                  </div>

                  <div className='roadContent'>
                    <h2>25% </h2>
                    <p>
                      A Member Only Exclusive Adolescent Ape Club Merchandise
                      Store gets opened and unlocked, featuring Limited Edition
                      tees, hoodies, beanies and other exclusive goods.
                    </p>
                  </div>
                  {/* road content end here */}
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='col-md-12'>
                <div className='singleItem'>
                  <div className='imgRoad'>
                    <img src={RoadImg3} className='img-fluid' alt='' />
                  </div>

                  <div className='roadContent'>
                    <h2>45% </h2>
                    <p>
                      45% A public version of the Adolescent Ape Club Merch
                      Store gets opened and unlocked, featuring tees, hoodies,
                      beanies and other goods of generalized merchandise
                    </p>
                  </div>
                  {/* road content end here */}
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='col-md-12'>
                <div className='singleItem'>
                  <div className='imgRoad'>
                    <img src={RoadImg4} className='img-fluid' alt='' />
                  </div>

                  <div className='roadContent'>
                    <h2>55% </h2>
                    <p>
                      Adolescent Ape Club gets It’s own YouTube channel with
                      identified influencers and known Event and Club Promoters
                      – And Gets It’s Global Marketing Push.
                    </p>
                  </div>
                  {/* road content end here */}
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='col-md-12'>
                <div className='singleItem'>
                  <div className='imgRoad'>
                    <img src={RoadImg5} className='img-fluid' alt='' />
                  </div>

                  <div className='roadContent'>
                    <h2>70% </h2>
                    <p>
                      The Ape Club goes live and becomes a hangout for members
                      only access, early information and an elite level of
                      access to all things AAC. Promotions, events, and
                      community activities will be based out of this member only
                      hangout.
                    </p>
                  </div>
                  {/* road content end here */}
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='col-md-12'>
                <div className='singleItem'>
                  <div className='imgRoad'>
                    <img src={RoadImg6} className='img-fluid' alt='' />
                  </div>

                  <div className='roadContent'>
                    <h2>80% </h2>
                    <p>
                    DAO is formed and rewards are minted for project holders. DAO will start with an incentive token in a rate and mint proportionate to the member’s holdings. Distribution may be made by the DAO for active participants, heavy influencers, large holders and for holders with rarer Apes. The DAO will start with an emphasis to add value and to distribute tokens to followers to encourage involvement in the ecosystem.{" "}
                    </p>
                  </div>
                  {/* road content end here */}
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='col-md-12'>
                <div className='singleItem'>
                  <div className='imgRoad'>
                    <img src={RoadImg7} className='img-fluid' alt='' />
                  </div>

                  <div className='roadContent'>
                    <h2>100% </h2>
                    <p>
                      The Boredom Begins. The Bored and Mutated Apes Breeding
                      Machine Begins. API interface into metaworlds on Ethereum,
                      Pulsechain and other BlockChains in worlds using natively
                      minted NFT’s or bridgeable collectables through proven
                      parachain wraps as they become available and go live. In
                      the end, your Adolescent Ape NFT will be available to use and be adapted for use as all chains roll out active and passive interoperability.{" "}
                    </p>
                  </div>
                  {/* road content end here */}
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className='boxShadow'></div>

          <div className='range'>
            <div className='rangImg1'>
              <img src={RoadImg1} className='img-fluid' alt='' />
              <p>10%</p>
            </div>
            <div className='rangImg1 rangImg2'>
              <img src={RoadImg2} className='img-fluid' alt='' />
              <p>25%</p>
            </div>
            <div className='rangImg1 rangImg3'>
              <img src={RoadImg3} className='img-fluid' alt='' />
              <p>45%</p>
            </div>
            <div className='rangImg1 rangImg4'>
              <img src={RoadImg4} className='img-fluid' alt='' />
              <p>55%</p>
            </div>

            <div className='rangImg1 rangImg5'>
              <img src={RoadImg5} className='img-fluid' alt='' />
              <p>70%</p>
            </div>
            <div className='rangImg1 rangImg6'>
              <img src={RoadImg6} className='img-fluid' alt='' />
              <p>80%</p>
            </div>
            <div className='rangImg1 rangImg7'>
              <img src={RoadImg7} className='img-fluid' alt='' />
              <p>100%</p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Roadmap;
