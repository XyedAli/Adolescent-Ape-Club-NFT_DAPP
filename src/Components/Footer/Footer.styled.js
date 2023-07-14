/** @format */

import styled from "styled-components";

const Wrapper = styled.div`
  footer {
    background-color: #1d51fe;
    text-align: center;
    padding: 50px 0px;
  }
  .footer-title {
    p {
      font-size: 32px;
      font-weight: 500;
      color: #ffffff;
    }
  }
  .footer-social-icons {
    font-size: 25px;
    padding-top: 20px;
    a {
      margin: 0 15px;
      text-decoration: none;
      color: white;
      display: inline-block;
      transition: 0.5s ease-in-out;
      :hover {
        transform: translateY(-10px);
        color: blue;
      }
    }
  }
  .copy {
  }
  .copy p {
    color: #babfbf;
  }
`;

export default Wrapper;
