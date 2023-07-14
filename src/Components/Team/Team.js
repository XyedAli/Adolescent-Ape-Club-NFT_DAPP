/** @format */

import React from "react";
import Wrapper from "./Team.styled";

import TeamTopImg1 from "../../images/TeamTopImg/1.png";
import TeamTopImg2 from "../../images/TeamTopImg/2.png";
import TeamTopImg3 from "../../images/TeamTopImg/3.png";
import TeamTopImg4 from "../../images/TeamTopImg/4.png";
import TeamTopImg5 from "../../images/TeamTopImg/5.png";
import TeamTopImg6 from "../../images/TeamTopImg/6.png";

function Team() {
  return (
    <Wrapper>
      <div className='team' id='team'>
        <div className='container'>
          {/* team single Item */}
          <div className='teamSingleItem'>
            <div className='teamTopImg'>
              <img src={TeamTopImg5} className='img-fluid' alt='' />
            </div>
            <div className='teamBottom'>
              <div className='teamTitle'>
                <h2>Adolescent Team</h2>
              </div>
              {/* single item start here */}
              <div className='teamBottomImg'>
                <div className='bottomImg'>
                  <img src={TeamTopImg2} className='img-fluid' alt='' />
                  <div className='bottomTitle'>
                    <h2>Blanski</h2>
                    <p>Artist</p>
                  </div>
                </div>

                {/* item start here */}
                <div className='bottomImg bottomImg2'>
                  <img src={TeamTopImg3} className='img-fluid' alt='' />
                  <div className='bottomTitle'>
                    <h2>Syed M. Ali</h2>
                    <p>Blockchain Dev</p>
                  </div>
                </div>

                {/* item end here */}
                {/* item start here */}
                <div className='bottomImg bottomImg3'>
                  <img src={TeamTopImg4} className='img-fluid' alt='' />
                  <div className='bottomTitle'>
                    <h2>Midas</h2>
                    <p>DeFi Magician</p>
                  </div>
                </div>

                {/* item end here */}

                {/* item start here */}
                <div className='bottomImg bottomImg4'>
                  <img src={TeamTopImg1} className='img-fluid' alt='' />
                  <div className='bottomTitle'>
                    <h2>L-dubya</h2>
                    <p>Imagineer & King</p>
                  </div>
                </div>

                {/* item end here */}
                {/* item start here */}
                <div className='bottomImg bottomImg5'>
                  <img src={TeamTopImg6} className='img-fluid' alt='' />
                  <div className='bottomTitle'>
                    <h2>PeaNut</h2>
                    <p>Voice Artist</p>
                  </div>
                </div>

                {/* item end here */}
              </div>
              {/* single item end here */}
            </div>
          </div>
          {/* team SingItem end here */}
        </div>
      </div>
    </Wrapper>
  );
}

export default Team;
