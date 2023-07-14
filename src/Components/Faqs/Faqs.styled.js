/** @format */

import styled from "styled-components";
import Diamond from "../../images/diamond.png";

const Wrapper = styled.div`
  margin: 50px 0;
  .faqs-container {
    width: 100%;
    margin: auto;
    padding: 0px 0px 0px 0px;
    @media (max-width: 768px) {
      width: 95%;
    }
    @media (max-width: 600px) {
      width: calc(100% - 20px);
      margin: 0 10px;
    }
    h2 {
      margin-bottom: 41px;
    }
  }
  .accordion-container {
    border-radius: 5px;
    overflow: hidden;
    margin-top: 35px;
    padding: 0 0px;
    transition: 0.5s ease-out;

    @media (max-width: 768px) {
      padding: 0 20px;
    }
    .accordion-item {
      background: #030b21;
      color: #fff;
      cursor: pointer;
      width: 100%;
      border: none;
      text-align: left;
      outline: none;
      font-size: 20px;
      font-weight: 600;
      -webkit-transition: 0.4s;
      transition: 0.4s;
      padding: 20px 0;
      padding-left: 60px;
      position: relative;
      @media (max-width: 600px) {
        font-size: 16px;
      }
      :after {
        content: "";
        position: absolute;
        width: 30px;
        height: 30px;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        background: url(${Diamond});
      }
    }
    .active {
      :after {
        content: "";
        position: absolute;
        width: 30px;
        height: 30px;
        top: 50%;
        transform: translateY(-50%);
        background: url(${Diamond});
      }
    }
    .panel {
      background: #030b21;
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.3s ease-out;
      p {
        border-radius: 5px;
        padding: 20px 0px;
        border-top: 1px solid white;
        border-radius: 0;
        margin-bottom: 20px;
        font-size: 18px;
        font-weight: 400;
        color: #ffffff;
        @media (max-width: 600px) {
          font-size: 15px;
        }
      }
    }
  }
  .faqImg {
  }
  .faqImg img {
    width: 100%;
  }
  .faqCol {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 750px) {
    .row {
    }
    .col-md-4,
    .col-md-8 {
      flex: 0 0 100%;
      max-width: 100%;
    }
  }
  .boxShadow {
    position: absolute;
    width: 190px;
    height: 170px;
    top: 70;
    left: 0;
    -webkit-filter: blur(110px);
    filter: blur(90px);
    box-shadow: -7px -40px 102px 39px rgb(28 81 254 / 75%);
    -webkit-box-shadow: -7px -40px 102px 39px rgb(28 81 254 / 75%);
    -moz-box-shadow: -7px -40px 102px 39px rgba(28, 81, 254, 0.75);
    z-index: -2;
  }
  .faqImg {
    margin-top: 30px;
  }
`;

export default Wrapper;
