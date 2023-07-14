/** @format */

import styled from "styled-components";

const Wrapper = styled.div`
  .roadmap {
    padding: 80px 0px 60px 0px;
    position: relative;
  }
  .singleItem {
    display: grid;
    grid-template-columns: 4fr 8fr;
    -webkit-column-gap: 60px;
    column-gap: 60px;
    background-color: #3964f5;
    padding: 20px 50px 50px 50px;
    border-radius: 25px;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }
  .imgRoad {
    position: relative;
  }
  .imgRoad img {
    border: 4px solid white;
    position: relative;
    border-radius: 8px;
    top: -50px;
  }
  .roadContent {
  }
  .roadContent h2 {
    font-size: 35px;
    font-weight: 500;
  }
  .roadContent p {
    font-size: 18px;
    line-height: 28px;
  }
  .swiper-wrapper {
    margin-top: 30px;
  }
  .swiper-button-next:after,
  .swiper-rtl .swiper-button-prev:after {
    content: "right";
    background: url("https://api.iconify.design/bi/arrow-right.svg?color=white")
      no-repeat center center / contain !important;
  }
  .swiper-button-next:after {
    background: url("https://api.iconify.design/bi/arrow-right.svg?color=white")
      no-repeat center center / contain !important;
  }
  .swiper-button-next,
  .swiper-rtl .swiper-button-prev {
    background: url(https://api.iconify.design/akar-icons/arrow-right.svg?color=white)
      no-repeat center center / contain !important;
    right: 10px;
    left: auto;
    width: 78px;

    border: 2px solid white;
    border-radius: 12px;
    border-radius: 12px;

    transition: 0.3s ease-in-out;
  }

  .swiper-button-prev,
  .swiper-rtl .swiper-button-next {
    background: url(https://api.iconify.design/akar-icons/arrow-left.svg?color=white)
      center center / contain no-repeat;

    width: 78px;
    border: 2px solid white;
    border-radius: 12px;

    transition: 0.3s ease-in-out;
  }
  .swiper-button-prev:after,
  .swiper-rtl .swiper-button-next:after {
    content: "left";
  }

  .swiper-button-prev:hover,
  .swiper-button-next:hover {
    transform: translateY(-10px);
  }
  .boxShadow {
    position: absolute;
    width: 390px;
    height: 280px;
    top: 140px;
    left: 0px;
    filter: blur(110px);
    box-shadow: -7px -40px 102px 39px rgba(28, 81, 254, 0.75);
    -webkit-box-shadow: -7px -40px 102px 39px rgba(28, 81, 254, 0.75);
    -moz-box-shadow: -7px -40px 102px 39px rgba(28, 81, 254, 0.75);
    z-index: -2;
  }
  .range {
    border: 13px solid #1c51fe;
    position: relative;
    border-radius: 20px;
    background: black;
    margin: 50px 0px;
  }
  .rangImg1 {
    position: absolute;
    top: -24px;
    left: 5%;
  }
  .rangImg1 p {
    text-align: center;
  }
  .rangImg1 img {
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 50%;
  }
  .rangImg2 {
    left: 14%;
  }
  .rangImg3 {
    left: 28%;
  }
  .rangImg4 {
    left: 35%;
  }
  .rangImg5 {
    left: 65%;
  }
  .rangImg6 {
    left: 73%;
  }
  .rangImg7 {
    z-index: 4554;
    left: auto;
    right: -15px;
  }
  .swiper-button-prev,
  .swiper-rtl .swiper-button-next {
    left: 10px;
    right: auto;
    position: absolute;
    left: auto;
    top: auto;
    bottom: 5%;
    left: 40%;
  }
  .swiper-button-next,
  .fhsYnL .swiper-rtl .swiper-button-prev {
    background: url(https://api.iconify.design/akar-icons/arrow-right.svg?color=white)
      no-repeat center center / contain !important;
    right: 6%;
    left: auto;
    top: auto;
    width: 78px;
    border: 2px solid white;
    border-radius: 12px;
    border-radius: 12px;
    -webkit-transition: 0.3s ease-in-out;
    transition: 0.3s ease-in-out;
    bottom: 5%;
  }

  @media (max-width: 575.98px) {
    .range {
      border: 7px solid #1c51fe;
      margin: 50px 0px;
    }
    .swiper-button-prev,
    .swiper-rtl .swiper-button-next {
      bottom: 3%;
      left: 40%;
    }
    .swiper-button-next,
    .iCxWfl .fhsYnL .swiper-rtl .swiper-button-prev {
      bottom: 3%;
    }
    .singleItem {
      display: block;

      padding: 20px 30px 90px 30px;
      height: 814px;
    }
    .range::after {
      content: "";

      width: 70px;
      height: 16px;

      right: 1px;
      top: -8px;
    }
    .rangImg1 {
      position: absolute;
      top: -17px;
      left: 1%;
    }
    .rangImg2 {
      left: 14%;
    }
    .rangImg3 {
      left: 31%;
    }
    .rangImg4 {
      left: 43%;
    }
    .rangImg5 {
      left: 63%;
    }
    .rangImg6 {
      left: 75%;
      z-index: 59;
    }
    .rangImg7 {
      z-index: 4554;
      left: auto;
      right: -12px;
    }
    .imgRoad {
      text-align: center;
    }
    .imgRoad img {
      width: 70%;
    }
    .swiper-button-prev,
    .swiper-rtl .swiper-button-next {
      left: 6%;
    }
    .boxShadow {
      position: absolute;
      width: 291px;
    }
    .swiper-button-next,
    .gLGAce .swiper-rtl .swiper-button-prev {
      right: 9%;
    }
    .roadContent h2 {
      font-size: 33px;
    }
    .rangImg1 img {
      width: 30px;
      height: 30px;
    }
  }
  @media (min-width: 576px) and (max-width: 767.98px) {
    .singleItem {
      display: block;
      height: 709px;

      padding: 20px 30px 90px 30px;
    }
    .swiper-button-prev,
    .swiper-rtl .swiper-button-next {
      bottom: 3%;
      left: 6%;
    }
    .swiper-button-next,
    .iCxWfl .fhsYnL .swiper-rtl .swiper-button-prev {
      bottom: 3%;
    }
    .range::after {
      content: "";

      width: 90px;
    }
    .rangImg1 {
      position: absolute;
      top: -24px;
      left: 1%;
    }
    .rangImg2 {
      left: 14%;
    }
    .rangImg3 {
      left: 31%;
    }
    .rangImg4 {
      left: 43%;
    }
    .rangImg5 {
      left: 63%;
    }
    .rangImg6 {
      left: 75%;
      z-index: 59;
    }
    .rangImg7 {
      z-index: 4554;
      left: auto;
      right: -12px;
    }
    .imgRoad {
      text-align: center;
    }
    .imgRoad img {
      width: 70%;
    }
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    .singleItem {
      column-gap: 30px;
      height: 450px;
      padding: 20px 30px 90px 30px;
    }

    .range::after {
      content: "";

      width: 90px;
    }
    .rangImg1 {
      position: absolute;
      top: -24px;
      left: 1%;
    }
    .rangImg2 {
      left: 14%;
    }
    .rangImg3 {
      left: 31%;
    }
    .rangImg4 {
      left: 43%;
    }
    .rangImg5 {
      left: 63%;
    }
    .rangImg6 {
      left: 75%;
      z-index: 59;
    }
    .rangImg7 {
      z-index: 4554;
      left: auto;
      right: -12px;
    }
    .swiper-button-prev,
    .swiper-rtl .swiper-button-next {
      bottom: 3%;
    }
    .swiper-button-next,
    .swiper-rtl .swiper-button-prev {
      bottom: 3%;
    }
  }
  @media (min-width: 992px) and (max-width: 1199.98px) {
    .singleItem {
      column-gap: 30px;

      padding: 20px 30px 90px 30px;
    }
  }
`;
export default Wrapper;
