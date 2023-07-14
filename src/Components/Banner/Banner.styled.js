/** @format */
import styled from "styled-components";

const Wrapper = styled.div`
  background: #030b21;
  .homeBanner {
    padding: 140px 0px 70px 0px;
  }
  .leftContentSingleItem {
    position: relative;
    z-index: 95;
  }
  .bannerCol {
    display: flex;
    align-items: center;
  }
  .boxShadow {
    position: absolute;
    width: 390px;
    height: 280px;
    top: -80px;
    left: -30px;
    filter: blur(110px);
    box-shadow: -7px -40px 102px 39px rgba(28, 81, 254, 0.75);
    -webkit-box-shadow: -7px -40px 102px 39px rgba(28, 81, 254, 0.75);
    -moz-box-shadow: -7px -40px 102px 39px rgba(28, 81, 254, 0.75);
    z-index: -2;
  }
  .Content {
  }
  .Content h4 {
    font-size: 41px;
    line-height: 60px;
    font-weight: 400;
  }
  .Content h4 span {
    color: #0c277d;
    margin-right: 20px;
  }

  .counter {
    left: -15px;
    display: flex;
    margin: 30px 0px 20px 0px;
    position: relative;
    left: -15px;
  }
  .buttonGroup {
    display: flex;
  }
  .counter button {
    padding: 4px 15px;
    font-size: 19px;
    display: flex;
    align-items: center;
    background: transparent;
    color: white;
    border: 1px solid #1c51fe;

    cursor: pointer;

    background-color: #1c51fe;
    margin: 0px 15px 0px 15px;
    transition: 0.5s ease-in-out;
    border-radius: 5px;
    height: 45px;
  }

  /* .counter button:hover {
    background-color: transparent;
    border: 1px solid #1c51fe;
    color: white;
  } */
  .inputField {
    width: 120px;
    text-align: center;
    /* padding: 0px 20px; */
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;

    border: 1px solid #1c51fe;
    background-color: #1c51fe;
    border-radius: 5px;
  }
  .mintButton {
  }
  .mintButton button {
    border: 0;
    padding: 13px 40px;
    font-size: 20px;
    color: white;
    background-color: #1c51fe;
    cursor: pointer;
    border-radius: 0px;
    border: 1px solid #1c51fe;
    border-radius: 5px;
    transition: 0.5s ease-in-out;
    margin-left: 0px;
  }
  .mintButton button:hover {
    background-color: transparent;
    border: 1px solid #1c51fe;
    color: #ffffff;
  }
  .rightColumn {
    display: grid;
    grid-template-columns: 5fr 4fr;
    align-items: center;
    position: relative;
    z-index: 95;
  }
  .boxshadow2 {
    position: absolute;
    bottom: 30px;
    right: -80px;
    box-shadow: -7px -40px 102px 39px rgb(28 81 254 / 75%);
    -webkit-box-shadow: -7px -40px 102px 39px rgb(28 81 254 / 75%);
    -moz-box-shadow: -7px -40px 102px 39px rgba(28, 81, 254, 0.75);
    width: 210px;
    height: 240px;
    filter: blur(111px);
    z-index: -2;
  }
  .bannerImges {
    text-align: center;
  }
  .bannerImges img {
    width: 80%;
    border-radius: 20px;
    cursor: pointer;
    transition: 0.5s ease-in-out;
    overflow: hidden;
    border-radius: 130px;
    height: 320px;
    object-fit: cover;
  }
  .bannerImges img:hover {
    transform: translateY(-10px);
  }
  .bannerImges2 {
  }
  .bannerImges2 img {
    width: 80%;
    border-radius: 50%;
    cursor: pointer;
    transition: 0.5s ease-in-out;
    overflow: hidden;
  }
  .bannerImges2 img:last-child {
    border-radius: 80px;
    height: 230px;
    object-fit: cover;
  }
  .bannerImges2 img:hover {
    transform: translateX(10px);
  }
  @media (max-width: 575.98px) {
    .homeBanner {
      padding: 50px 0px;
    }
    .row {
      flex-direction: column-reverse;
    }
    .col-md-6 {
      flex: 0 0 100%;
      max-width: 100%;
    }
    .bannerImges img {
      width: 70%;
    }
    .Content {
      text-align: center;
    }
    .Content h4 {
      font-size: 29px;
      line-height: 36px;
    }

    .counter {
      display: block;
    }
    .mintButton {
      text-align: center;
    }
    .leftContentSingleItem {
      margin-top: 30px;
    }
    .boxShadow {
      width: 270px;
      height: 280px;

      left: 0;
    }
    .boxshadow2 {
      right: 0;

      width: 210px;
      height: 240px;
    }
    .bannerImges img {
      height: 220px;
    }
    .bannerImges2 img:last-child {
      height: 180px;
    }
    .buttonGroup {
      justify-content: center;
    }
    .mintButton {
      display: flex;
      justify-content: center;
      margin-top: 20px;
    }
  }

  @media (min-width: 576px) and (max-width: 767.98px) {
    .row {
      flex-direction: column-reverse;
    }
    .col-md-6 {
      flex: 0 0 100%;
      max-width: 100%;
    }
    .bannerImges img {
      width: 70%;
    }
    .Content h4 {
      font-size: 40px;
    }
    .counter {
      justify-content: center;
    }
    .mintButton {
      text-align: center;
    }
    .leftContentSingleItem {
      margin: 0 auto;
    }
    .Content h4 {
      font-size: 36px;
      line-height: 41px;
      text-align: center;
    }
    .boxshadow2 {
      right: 0px;
    }
    .counter {
      display: flex;
      justify-content: center;
    }
    .mintButton button {
      margin-left: 0px;
      margin-top: 0px;
    }
    .bannerImges img {
      height: 230px;
    }
    .bannerImges2 img:last-child {
      border-radius: 80px;
      height: 190px;
      object-fit: cover;
    }
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    .Content h4 {
      font-size: 36px;
      line-height: 41px;
    }
    .boxshadow2 {
      right: 0px;
    }
    .counter {
      display: block;
    }
    .mintButton button {
      margin-left: 14px;
      margin-top: 30px;
    }
    .bannerImges img {
      height: 230px;
    }
    .bannerImges2 img:last-child {
      border-radius: 80px;
      height: 190px;
      object-fit: cover;
    }
  }
  @media (min-width: 992px) and (max-width: 1199.98px) {
    .boxshadow2 {
      right: 0px;
    }
  }
`;

export default Wrapper;
