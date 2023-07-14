/** @format */

import styled from "styled-components";

const Wrapper = styled.div`
  padding: 50px 0px;
  .row {
    justify-content: center;
  }
  .artButton {
    padding: 40px 0px 60px 0px;
  }
  .artButton h3 {
    color: white;
    font-size: 25px;
    background: #1c51fe;
    padding: 10px 20px;
    border-radius: 5px;
    border: 1px solid #1c51fe;
    display: inline-block;
    font-weight: 500;
  }

  .swiperImg {
  }
  .swiperImg img {
    border-radius: 8px;
    cursor: pointer;
    transition: 0.5s ease-in-out;
    overflow: visible;
  }
  .swiperImg img:hover {
    transform: scale(1.1);
  }

  @media (max-width: 575.98px) {
    .swiperSlider {
      padding: 0px 15px;
    }
  }
`;

export default Wrapper;
