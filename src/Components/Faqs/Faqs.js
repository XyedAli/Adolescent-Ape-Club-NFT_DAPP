/** @format */

import React from "react";
import Wrapper from "./Faqs.styled";
import Question from "../../images/questionask.png";

function Faqs() {
  // accordion open function
  function handleAccordion(e) {
    e.target.classList.toggle("active");
    let panel = e.target.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  }

  return (
    <Wrapper>
      <div className='container' id='faq'>
        <div className='row'>
          <div className='col-md-8'>
            <div className='faqs-container' id='faq'>
              <h2>FAQ’S</h2>
              <div className='container-row'>
                <div className='row-col'>
                <div className='accordion-container'>
                    <button
                      className='accordion-item'
                      onClick={handleAccordion}>
                     	What is the launch date of Adolescent Ape club?
                    </button>
                    <div className='panel'>
                      <p>
                        We will annouce the launch date soon..</p>
                    </div>
                  </div>
                  <div className='accordion-container'>
                    <button
                      className='accordion-item'
                      onClick={handleAccordion}>
                     	Where Can I Purchase An Adolescent Ape Club NFT?
                    </button>
                    <div className='panel'>
                      <p>
                        You will be able to Mint your own Adolescent Ape Club NFT from our site at www.AdolescentApe.Club.
                        While minting, the collection will populate to www.OpeanSea.io for resale, viewing and “flexing” activity.</p>
                    </div>
                  </div>
                  <div className='accordion-container'>
                    <button
                      className='accordion-item'
                      onClick={handleAccordion}>
            How many Adolescent Ape Club NFT’s will be available?
                    </button>
                    <div className='panel'>
                      <p>The Adolescent Ape Club NFT collection will be 10,000 for the initial mint. 
                        Once we reach 100% mint the Mutant Ape Breeding feature gets unlocked and the fun begins for the eligible. </p>
                    </div>
                  </div>
                  <div
                    className='accordion-container'
                    onClick={handleAccordion}>
                    <button className='accordion-item'>
                    What is the floor cost for minting an Adolescent Ape Club NFT?
                    </button>
                    <div className='panel'>
                      <p>
                      The floor mint rate for the Adolescent Ape NFT is .20 Ethereum.
                      </p>
                    </div>
                  </div>
                  <div
                    className='accordion-container'
                    onClick={handleAccordion}>
                    <button className='accordion-item'>
                    How can I get access to the WHITELIST?
                    </button>
                    <div className='panel'>
                      <p>
                      You can get access to our WHITELIST by participating in campaigns on our social media, twitter, Instagram and discord and by joining our
                       WHITELIST contests. Telegram will be enabled after minting begins for member only access and activities.
                      </p>
                    </div>
                  </div>
                  <div
                    className='accordion-container'
                    onClick={handleAccordion}>
                    <button className='accordion-item'>
                     
                    	Which wallets will I be able to use to mint and hold my Adolescent Ape Club NFT(s)?
                    </button>
                    <div className='panel'>
                      <p>	We have no affiliation to wallets but have had great success with MetaMask. If you have other wallets, we encourage you to 
                        use those with our DAPP at your own discretion. Any Ethereum enabled wallet should work with this ERC-721 asset.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-4 faqCol'>
            <div className='faqImg'>
              <img src={Question} className='img-fluid' alt='' />
            </div>
            <div className='boxShadow'></div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Faqs;
