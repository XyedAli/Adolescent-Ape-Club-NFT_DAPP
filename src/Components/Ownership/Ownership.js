/** @format */

import React from "react";
import { useState } from "react";
import Wrapper from "./Ownership.styled";

function Ownership() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <Wrapper>
      <div className='container' id='ownership'>
        <div className='row'>
          {/* single item start here */}
          <div className='col-md-4'>
            <div className='leftSIngleItem'>
              <div className='leftContent'>
                <h2 style={{ color: '#FFFF00' }}>Ownership of Adolescent Ape Club</h2>
              </div>
              <div className='boxShadow'></div>
            </div>
          </div>
          {/* single item end here */}
          {/* right item start here */}
          <div className='col-md-8 '>
            <div className='bloc-tabs'>
              <button
                className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(1)}>
                i Own the NFT
              </button>
              <button
                className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(2)}>
                ii Personal Use
              </button>
              <button
                className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(3)}>
                iii Commercial Use
              </button>
            </div>

            <div className='content-tabs'>
              <div
                className={
                  toggleState === 1 ? "content  active-content" : "content"
                }>
                <p>
                You Own the NFT. Each Adolescent Ape is an NFT on the Ethereum blockchain. When you mint a NFT, you own the underlying Adolescent Ape, the Art, completely. Ownership of the NFT is mediated entirely by the Smart Contract and the
                 Ethereum Network: at no point may we seize, freeze, or otherwise modify the ownership of any Adolescent Ape. 
                
                </p>
              </div>

              <div
                className={
                  toggleState === 2 ? "content  active-content" : "content"
                }>
                <p>
                Personal Use. Subject to your continued compliance with these Terms, project developer grants you a worldwide, royalty-free license to use, copy, and display the purchased Art,
                 along with any extensions that you choose to create or use, solely for the following purposes: 
                  <ul>
                    <li>  for your own personal, non-commercial use; </li>
                    <li>
                      as part of a marketplace that permits the purchase and
                      sale of your Adolescent Ape / NFT, provided that the
                      marketplace cryptographically verifies each Adolescent Ape
                      owner s rights to display the Art for their Adolescent Ape
                      to ensure that only the actual owner can display the Art.
                    </li>
                    <li>
                      as part of a third party website or application that
                      permits the inclusion, involvement, or participation of
                      your Adolescent Ape, provided that the website/application
                      cryptographically verifies each Adolescent Ape owner s
                      rights to display the Art for their Adolescent Ape to
                      ensure that only the actual owner can display the Art,
                      that owner had any necessary licensing rights or
                      agreements for any inspirational branding or wording and
                      provided that the Art is no longer visible once the owner
                      of the Adolescent Ape leaves the website/application.
                    </li>
                  </ul>
                </p>
              </div>

              <div
                className={
                  toggleState === 3 ? "content  active-content" : "content"
                }>
                <p>
                Commercial Use. Subject to your continued compliance with these Terms, project developer grants you an unlimited, worldwide license to use, copy, and display the purchased Art for the purpose of creating derivative works based upon the Art (“Commercial Use”). Examples of such Commercial Use would e.g. be the use of the Art to produce and sell merchandise products (T-Shirts etc.) displaying copies of the Art. 
                For the sake of clarity, nothing in this Section will be deemed to restrict you from 
                  <ul>
                    <li> owning or operating a marketplace that permits the use and sale of Adolescent Apes generally, provided that the marketplace cryptographically verifies each Adolescent Ape owner’s rights to display the Art 
                      for their Adolescent Ape to ensure that only the actual owner can display the Art; </li>
                    <li>
                    owning or operating a third party website or application that permits the inclusion, involvement, or participation of Adolescent Apes generally, provided that the third party website or application cryptographically verifies each Adolescent Ape owner’s rights to display the Art for their Adolescent Ape to ensure that only the actual owner can display the Art, and provided that the Art is no longer 
                    visible once the owner of the Purchased Adolescent Ape leaves the website/application; or 
                    </li>
                    <li>
                    earning revenue from any of the foregoing.
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
          {/* right item end here */}
        </div>
      </div>
    </Wrapper>
  );
}

export default Ownership;
