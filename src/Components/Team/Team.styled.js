/** @format */

import styled from "styled-components";
import TeamBg from "../../images/teambg.png";
import TeamBg2 from "../../images/teambg2.png";
import TeamBg3 from "../../images/teambg3.png";

const Wrapper = styled.div`
  .team {
    padding: 50px 0px 70px 0px;
  }
  .teamSingleItem {
    background: url(${TeamBg});
    background-size: cover;
    background-repeat: no-repeat;
    padding: 50px 50px 140px 50px;
    border-radius: 20px;
    position: relative;
  }
  .teamSingleItem::before {
    content: "";
    width: 99%;
    height: 100%;
    z-index: -2;
    position: absolute;
    top: -10px;
    background: url(${TeamBg2});
    background-size: cover;
    background-repeat: no-repeat;
    left: 20px;
  }
  .teamSingleItem::after {
    content: "";
    width: 99%;
    height: 100%;
    z-index: -4;
    position: absolute;
    top: -20px;
    background: url(${TeamBg3});
    background-size: cover;
    background-repeat: no-repeat;
    left: 30px;
  }
  .teamTopImg {
    position: absolute;
    top: -70px;
  }
  .teamTopImg img {
    width: 180px;
    border-radius: 50%;
    border: 4px solid white;
  }
  .teamBottom {
    margin-top: 80px;
  }
  .teamTitle {
    margin-bottom: 80px;
  }
  .teamTitle h2 {
  }
  .teamBottomImg {
    position: relative;
    border: 2px solid white;
    border-radius: 130px;
    padding: 40px;
  }
  .bottomImg {
    position: absolute;
    top: -30px;
    left: 34px;
  }
  .bottomImg img {
    width: 140px;
    border-radius: 50%;
  }
  .bottomTitle {
    text-align: center;
  }
  .bottomTitle h2 {
    font-weight: 500;
  }
  .bottomTitle p {
    font-weight: 300;
  }
  .bottomImg2 {
    left: 22%;
  }
  .bottomImg3 {
    left: 41%;
  }
  .bottomImg4 {
    left: 60%;
  }
  .bottomImg5 {
    left: auto;
    right: 5%;
  }
  @media (max-width: 575.98px) {
    .teamSingleItem {
      padding: 50px 10px 140px 10px;
    }
    .teamBottomImg {
      padding: 9px;
      border: 0px;
      position: relative;
      left: 20px;
    }
    .teamBottomImg::after {
      content: "";
      top: 0px;
      position: absolute;
      border: 2px solid white;
      height: 290px;
      width: 12px;
      left: -20px;
      border-radius: 21px;
    }
    .bottomImg img {
      width: 40px;
    }
    .bottomImg {
      position: relative;
      top: 0px;
      left: 0px;
      margin-bottom: 10px;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
    }
    .bottomImg2 {
      left: 0%;
    }
    .bottomImg3 {
      left: 0%;
    }

    .bottomImg4 {
      left: 0%;
    }
    .bottomImg5 {
      right: 0%;
      left: auto;
    }

    .bottomTitle h2 {
      font-size: 14px;
    }
    .teamSingleItem::before {
      content: "";

      left: 10px;
    }

    .teamSingleItem::after {
      content: "";

      left: 13px;
    }
    .bottomTitle {
      text-align: left;
      width: 100%;
      margin-left: 30px;
    }
  }
  @media (min-width: 576px) and (max-width: 767.98px) {
    .teamBottomImg {
      padding: 9px;
    }
    .bottomImg img {
      width: 60px;
    }
    .bottomImg {
      top: -30px;
      left: 4px;
    }
    .bottomImg2 {
      left: 18%;
    }
    .bottomImg3 {
      left: 40%;
    }
    .bottomImg4 {
      left: 59%;
    }
    .bottomImg5 {
      left: auto;
      right: 3%;
    }
    .bottomTitle h2 {
      font-size: 15px;
    }
    .bottomTitle p {
      font-weight: 300;
      font-size: 10px;
    }
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    .teamBottomImg {
      padding: 20px;
    }
    .bottomImg img {
      width: 90px;
    }
    .bottomImg {
      top: -30px;
      left: 4px;
    }
    .bottomImg2 {
      left: 18%;
    }
    .bottomImg3 {
      left: 40%;
    }
    .bottomImg4 {
      left: 59%;
    }
    .bottomImg5 {
      left: auto;
      right: 3%;
    }
    .bottomTitle h2 {
      font-size: 19px;
    }
    .bottomTitle p {
      font-weight: 300;
      font-size: 12px;
    }
  }
`;

export default Wrapper;
