/** @format */

import styled from "styled-components";

const Wrapper = styled.div`
  padding: 50px 0px;
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
  .bloc-tabs {
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
  }
  .tabs {
    padding: 10px 20px;
    text-align: center;
    /* width: 50%; */
    background: transparent;
    cursor: pointer;
    /* border-bottom: 1px solid rgba(0,0,0,0.274); */
    box-sizing: content-box;
    position: relative;
    outline: none;
    color: white;
    color: blue;
    border: 1px solid blue;
    border-radius: 5px;
    font-size: 22px;
  }

  .active-tabs {
    background: blue;
    color: white;
    border: 1px solid blue;
  }

  button {
    border: none;
    transition: 0.5s ease-in-out;
  }
  button :hover {
    transform: translateY(-10px);
  }
  .content-tabs {
    flex-grow: 1;
  }
  .content {
    padding: 0px;
    width: 100%;
    height: 100%;
    display: none;
  }
  .content h2 {
    padding: 0px 0 5px 0px;
  }

  .content p {
    width: 100%;
    height: 100%;
  }
  .active-content {
    display: block;
  }
  ul {
    margin-top: 10px;
  }
  ul li {
    list-style: lower-roman;
    margin-bottom: 8px;
  }
  @media (max-width: 575.98px) {
    .col-md-8,
    .col-md-4 {
      flex: 0 0 100%;
      max-width: 100%;
    }
    .leftContent h2 {
      font-size: 39px;

      text-align: center;
    }
    .tabs {
      padding: 10px 14px;
      margin-bottom: 20px;
      font-size: 13px;
    }
    .bloc-tabs {
      margin-top: 40px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      justify-content: center;
      column-gap: 9px;

      padding: 0px 15px;
    }
    .content-tabs {
      padding: 0px 15px;
    }
    .content {
      padding: 0px;
    }
  }
  @media (min-width: 576px) and (max-width: 767.98px) {
    .col-md-8,
    .col-md-4 {
      flex: 0 0 100%;
      max-width: 100%;
    }
    .leftContent h2 {
      font-size: 39px;

      text-align: center;
    }
    .tabs {
      font-size: 17px;
    }
    .bloc-tabs {
      margin-top: 40px;
    }
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    .leftContent h2 {
      font-size: 32px;
    }
    .tabs {
      padding: 8px 14px;

      font-size: 17px;
    }
  }
  @media (min-width: 992px) and (max-width: 1199.98px) {
    .leftContent h2 {
      font-size: 42px;
    }
  }
`;
export default Wrapper;
