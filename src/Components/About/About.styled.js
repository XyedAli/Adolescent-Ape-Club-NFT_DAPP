/** @format */

import styled from "styled-components";

const Wrapper = styled.div`
  .about {
    padding: 60px 0px;
  }
  .leftSIngleItem {
    position: relative;
  }
  .leftContent {
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
  .leftContent h2 {
    font-size: 49px;
    font-weight: 600;
  }
  .rigtContentSingleItem {
    position: relative;
  }
  .boxShadow2 {
    position: absolute;
    width: 190px;
    height: 200px;
    top: 50;
    right: 0;

    filter: blur(90px);
    box-shadow: -7px -40px 102px 39px rgb(28 81 254 / 75%);
    -webkit-box-shadow: -7px -40px 102px 39px rgb(28 81 254 / 75%);
    -moz-box-shadow: -7px -40px 102px 39px rgba(28, 81, 254, 0.75);
    z-index: -2;
  }
  .rightContent {
  }
  .aboutCOl {
    display: flex;
    align-items: center;
  }
  .rightContent h2 {
    font-size: 45px;
    letter-spacing: 1px;
    font-weight: 500;
  }
  .rightContent p {
    font-size: 18px;
    line-height: 28px;
  }
  @media (max-width: 575.98px) {
    .col-md-4 {
      flex: 0 0 100%;
      max-width: 100%;
    }
    .col-md-8 {
      flex: 0 0 100%;
      max-width: 100%;
    }
    .leftContent h2 {
      font-size: 42px;
      text-align: center;
    }
    .rightContent h2 {
      font-size: 35px;
      text-align: center;
    }
    .rightContent p {
      padding: 0px 15px;
    }
  }
  @media (min-width: 576px) and (max-width: 767.98px) {
    .col-md-4 {
      flex: 0 0 100%;
      max-width: 100%;
    }
    .col-md-8 {
      flex: 0 0 100%;
      max-width: 100%;
    }
    .leftContent h2 {
      font-size: 42px;
      text-align: center;
    }
    .rightContent h2 {
      font-size: 35px;
      text-align: center;
    }
    .rightContent p {
      padding: 0px 15px;
    }
  }

  @media (min-width: 768px) and (max-width: 991.98px) {
    .leftContent h2 {
      font-size: 36px;
    }
    .rightContent h2 {
      font-size: 29px;
    }
  }
  @media (min-width: 992px) and (max-width: 1199.98px) {
    .rightContent h2 {
      font-size: 40px;
    }
  }
`;

export default Wrapper;
