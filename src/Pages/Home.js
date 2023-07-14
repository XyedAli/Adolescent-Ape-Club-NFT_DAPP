/** @format */
import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "../redux/blockchain/blockchainActions";
import { fetchData } from "../redux/data/dataActions";
import Layout from "../Components/Layout/Layout";
import Welcome from "../Components/Welcome/Welcome";
import Faqs from "../Components/Faqs/Faqs";
import Ownership from "../Components/Ownership/Ownership";
import Roadmap from "../Components/Roadmap/Roadmap";
import About from "../Components/About/About";
import Wrapper from "../Components/Banner/Banner.styled";
import Team from "../Components/Team/Team";
import Art from "../Components/Art/Art";
import BannerImg from "../images/banner.png";
import BannerImg2 from "../images/banner2.png";
import BannerImg3 from "../images/banner3.png";
import { Icon } from "@iconify/react";
function Home() {
const dispatch = useDispatch();
const blockchain = useSelector((state) => state.blockchain);
const data = useSelector((state) => state.data);
const [claimingNft, setClaimingNft] = useState(false);
const [feedback, setFeedback] = useState(`Click buy to mint your NFT.`);
const [mintAmount, setMintAmount] = useState(1);
const [CONFIG, SET_CONFIG] = useState({
CONTRACT_ADDRESS: "",
SCAN_LINK: "",
NETWORK: {
NAME: "",
SYMBOL: "",
ID: 0,
},
NFT_NAME: "",
SYMBOL: "",
MAX_SUPPLY: 1,
WEI_COST: 0,
DISPLAY_COST: 0,
GAS_LIMIT: 0,
MARKETPLACE: "",
MARKETPLACE_LINK: "",
SHOW_BACKGROUND: false,
});
const styleObj = {
  fontSize: 14,
  textAlign: "center",
  paddingTop: "25px",
}

const styleObj2 = {
  fontSize: 14,
  paddingTop: "35px",
  
}
const claimNFTs = () => {
let cost = CONFIG.WEI_COST;
let gasLimit = CONFIG.GAS_LIMIT;
let totalCostWei = String(cost * mintAmount);
let totalGasLimit = String(gasLimit * mintAmount);
console.log("Cost: ", totalCostWei);
console.log("Gas limit: ", totalGasLimit);
setFeedback(`Minting your ${CONFIG.NFT_NAME}...`);
setClaimingNft(true);
blockchain.smartContract.methods
.mint(mintAmount)
.send({
gasLimit: String(totalGasLimit),
to: CONFIG.CONTRACT_ADDRESS,
from: blockchain.account,
value: totalCostWei,
})
.once("error", (err) => {
console.log(err);
setFeedback("Sorry, something went wrong please try again later.");
setClaimingNft(false);
})
.then((receipt) => {
console.log(receipt);
setFeedback(
`WOW, the ${CONFIG.NFT_NAME} is yours! go visit Opensea.io to view it.`
);
setClaimingNft(false);
dispatch(fetchData(blockchain.account));
});
};
const decrementMintAmount = () => {
let newMintAmount = mintAmount - 1;
if (newMintAmount < 1) {
newMintAmount = 1;
}
setMintAmount(newMintAmount);
};
const incrementMintAmount = () => {
let newMintAmount = mintAmount + 1;
if (newMintAmount > 10) {
newMintAmount = 10;
}
setMintAmount(newMintAmount);
};
const getData = () => {
if (blockchain.account !== "" && blockchain.smartContract !== null) {
dispatch(fetchData(blockchain.account));
}
};
const getConfig = async () => {
const configResponse = await fetch("/config/config.json", {
headers: {
"Content-Type": "application/json",
Accept: "application/json",
},
});
const config = await configResponse.json();
SET_CONFIG(config);
};
useEffect(() => {
getConfig();
}, []);
useEffect(() => {
getData();
}, [blockchain.account]);
return (
<Layout>
   <Wrapper>
      <div className='homeBanner' id='home'>
         <div className='container'>
            <div className='row'>
               {/* first column start here */}
               <div className='col-md-6 bannerCol'>
                  <div className='leftContentSingleItem'>
                     <div className='Content'>
                        <h4>
                           Discover & Collect Extraordinary <span style={{ color: '#FFFF00' }}>Adolescent Ape Club</span>
                           NFT’s
                        </h4>
                     </div>
                     {Number(data.totalSupply) >= CONFIG.MAX_SUPPLY ? (
                     <>
                     <p>
                        The sale has ended.
                     </p>
                     {/* 
                     <p>
                        You can still find {CONFIG.NFT_NAME} on
                     </p>
                     */}
                     {/* 
                     <StyledLink target={"_blank"} href={CONFIG.MARKETPLACE_LINK}>
                        {CONFIG.MARKETPLACE}
                     </StyledLink>
                     */}
                     </>
                     ) : (
                     <>
                        {(window.matchMedia("only screen and (max-width: 760px)").matches)?
                      
                     <p style={styleObj}>
                        1 {CONFIG.SYMBOL} costs {CONFIG.DISPLAY_COST}{" "}
                        {CONFIG.NETWORK.SYMBOL}.
                     </p>:
                       <p style={styleObj2}>
                       1 {CONFIG.SYMBOL} costs {CONFIG.DISPLAY_COST}{" "}
                       {CONFIG.NETWORK.SYMBOL}.
                    </p>
                      }
                     {/* 
                     <p>
                        Excluding gas fees.
                     </p>
                     */}
                     {blockchain.account === "" ||
                     blockchain.smartContract === null ? (
                     <div>
                        {(window.matchMedia("only screen and (max-width: 760px)").matches)?
                        <p style={{textAlign: "center"}}>

                           Connect to the {CONFIG.NETWORK.NAME} network
                        </p>:
                         <p style={{paddingBottom: "15px"}}>

                         Connect to the {CONFIG.NETWORK.NAME} network
                      </p>

                        }
                        <div className="mintButton">
                           {(window.matchMedia("only screen and (max-width: 760px)").matches)?
                           <button>
                           <a href={CONFIG.DEEPLINK} className="button" style={{ color: '#fff' }}>
                           Connect Wallet
                           </a></button> :
                           <button
                              onClick={(e) => {
                           e.preventDefault();
                           dispatch(connect());
                           getData(); 
                           }}
                           >
                           CONNECT
                           </button>
                           }
                        </div>
                        {blockchain.errorMsg !== "" ? (
                        <>
                        <p>
                           {blockchain.errorMsg}
                        </p>
                        </>
                        ) : null}
                     </div>
                     ) : (
                     <>
                     <p>
                        {feedback}
                     </p>
                     <div className="counter">
                        <div className="buttonGroup">
                           <button className="fButton"
                           disabled={claimingNft ? 1 : 0}
                           onClick={(e) => {
                           e.preventDefault();
                           decrementMintAmount();
                           }}
                           >
                           <Icon icon='akar-icons:minus' />
                           </button>

                           <div className='inputField'>{mintAmount}</div>
                           
                           <div className="fButton">
                              <button
                              disabled={claimingNft ? 1 : 0}
                              onClick={(e) => {
                              e.preventDefault();
                              incrementMintAmount();
                              }}
                              >
                              <Icon icon='ant-design:plus-outlined' />
                              </button>
                           </div>
                        </div>
                        <div className="mintButton">
                           <button
                           disabled={claimingNft ? 1 : 0}
                           onClick={(e) => {
                           e.preventDefault();
                           claimNFTs();
                           getData();
                           }}
                           >
                           {claimingNft ? "Minting...." : "BUY"}
                           </button>
                        </div>
                     </div>
                     </>
                     )}
                     </>
                     )}
                    
                     <div className='boxShadow'></div>
                  </div>
               </div>
             
               <div className='col-md-6'>
                  <div className='rightColumn'>
                     <div className='bannerImges'>
                        <img src={BannerImg} className='img-fluid' alt='crypto' />
                     </div>
                     <div className='bannerImges2'>
                        <img src={BannerImg2} className='img-fluid' alt='crypto' />
                        <img src={BannerImg3} className='img-fluid' alt='crypto' />
                     </div>
                     <div className=' boxshadow2'></div>
                  </div>
               </div>
               {/* right column end here */}
            </div>
         </div>
      </div>
   </Wrapper>
   <About />
   <Art />
   <Welcome />
   <Roadmap />
   <Ownership />
   <Team />
   <Faqs />
</Layout>
);
}
export default Home;