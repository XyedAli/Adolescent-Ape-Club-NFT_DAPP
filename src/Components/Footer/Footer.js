/** @format */

import React from "react";
import Wrapper from "./Footer.styled";
import { Icon } from "@iconify/react";

function Footer() {
  return (
    <Wrapper>
      <footer>
        <div className='footer-title'>
          <p>Adolescent APE CLUB</p>
        </div>
        <div className='footer-social-icons'>
          <a href='https://www.facebook.com'>
            <Icon icon='ant-design:twitter-outlined' />
          </a>
          <a href='https://www.facebook.com'>
            <Icon icon='akar-icons:discord-fill' />
          </a>
        </div>
        <div className='copy'>
          <p>Copyright @ Adolescent APE CLUB</p>
        </div>
      </footer>
    </Wrapper>
  );
}

export default Footer;
