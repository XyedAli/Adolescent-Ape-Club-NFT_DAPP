/** @format */

import React from "react";
import Wrapper from "./Welcome.styled";

// import images and icons

function Welcome() {
  return (
    <Wrapper>
      <div className='about' id='about'>
        <div className='container'>
          <div className='row'>
            {/* single item start here */}
            <div className='col-md-4'>
              <div className='leftSIngleItem'>
                <div className='leftContent'>
                  <h2 style={{ color: '#FFFF00' }}>Fair Launch and Distribution</h2>
                </div>
                <div className='boxShadow'></div>
              </div>
            </div>
            {/* single item end here */}
            {/* right item start here */}
            <div className='col-md-8 aboutCOl'>
              <div className='rigtContentSingleItem'>
                <div className='rightContent'>
                  {/* <h2>Catch Them While You Can…</h2> */}
                  <br></br>
                  <p>The tokenomics have been in development for 23 months and developed to add maximum value for all involved, now and into the future. No bonding curves, no games just a project with fantastic tokenomics, design and depth.</p> 
                  <br></br> <p> Designed to grow in utility and thus in value as minting completes. You will mint your own AAC here and will be the first and only holder of a one of a kind unique Adolescent Ape NFT with utility. All Apes will have a flat mint rate of .2 ETH. No tiers, no premiums and most definitly no games. Just pure awesomeness.
                  </p>
                </div>
                <div className='boxShadow2'></div>
              </div>
            </div>
            {/* right item end here */}
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Welcome;
