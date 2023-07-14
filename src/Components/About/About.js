/** @format */

import React from "react";
import Wrapper from "./About.styled";

// import images and icons

function About() {
  return (
    <Wrapper>
      <div className='about' id='about'>
        <div className='container'>
          <div className='row'>
            {/* single item start here */}
            <div className='col-md-4'>
              <div className='leftSIngleItem'>
                <div className='leftContent'>
                  <h2 style={{ color: '#FFFF00' }}> Welcome to the Adolescent Ape Club…</h2>
                </div>
                <div className='boxShadow'></div>
              </div>
            </div>
                   
           

            
            {/* single item end here */}
            {/* right item start here */}
            <div className='col-md-8 aboutCOl'>
              <div className='rigtContentSingleItem'>
                <div className='rightContent'>
                <br></br>

                  <p>
                     NFT World Of Bored Apes During Their Teenage Years .. Before The Boredom, Boats, And Mutations .. Before They Were Famous….
                  </p>
                  <br></br>
                  <h2>Catch Them While You can…</h2>
                  <br></br>
                  <p>
                    Adolescent Ape Club is a rare and unique collection of
                    10,000 Adolescent Ape NFT's as a unique digital collection
                    living on the Ethereum blockchain. Your Adolescent Ape
                    doubles as you Club membership card and grants access to
                    holder only access , events and benefits.
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

export default About;
