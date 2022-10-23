import React from "react";
import Header from "./Header";
// import Hero from "./Hero"
import { FiArrowRight } from "react-icons/fi";
import Buy from "./buyOx";
import Spec from "./spec";
import Gallery from "./gallery";
import RoadMap from "./road";
import Tools from "./tools";
import Team from "./team";
import Footer from "./footer";
import { FaBars } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import { ImCross } from "react-icons/fa";

// import Icon from '@mui/material/Icon';
// // or
// import { Icon } from '@mui/material';
// import DehazeOutlinedIcon from '@mui/icons-material/DehazeOutlined';




// import SimpleSlider from "./slider";

import data from "./data";
import { useState, useEffect } from "react";
import { DragHandleOutlined } from "@mui/icons-material";
function App() {

  // start of slider
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);
  const [nav, setnav] = useState(false);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  // end of slider


  const check = true;



  const handlechange = () => setnav(!nav);





  return <section className='main-section'>

    {/* {
      function navBar() {
        if (nav) {
          return <div className="toogle-nav">
            <Header btn='BUY AN OX' logo='https://jungle-ox.vercel.app/_next/image?url=%2Fassests%2Flogo.png&w=384&q=75' alt='wallet' connect='https://jungle-ox.vercel.app/_next/image?url=%2Fassests%2FBuyOnOx-bg.png&w=640&q=75' des='wallet' wallet='Connect' />
          </div>
        }
      }
    } */}
    <div className="toogle">
      <div className="logo"> <img src="https://jungle-ox.vercel.app/_next/image?url=%2Fassests%2Flogo.png&w=384&q=75" alt="tooglelogo"></img> </div>
      <div className="t-btn" onClick={handlechange}> {nav ? <IoIosClose /> : <FaBars />}</div>

    </div>




    <Header btn='BUY AN OX' logo='https://jungle-ox.vercel.app/_next/image?url=%2Fassests%2Flogo.png&w=384&q=75' alt='wallet' connect='https://jungle-ox.vercel.app/_next/image?url=%2Fassests%2FBuyOnOx-bg.png&w=640&q=75' des='wallet' wallet='Connect' class={!nav ? "header" : "Hideheader"} />



    {/* HERO  */}
    <section className="hero">
      <div className="hero-text">
        <div className="hero-heading">
          WELCOME TO THE JUNGLE - OX <span>NFT</span><br></br> CLUB
        </div>
        <div className="hero-desc">
          <p>JUNGLE OX CLUB | KOUPREY is the first ever NFT collection by Kon Khmer. JOC is a collection of 10,000 unique digital NFT collectibles on the Polygon blockchain. Each Jungle Ox works as your membership for Jungle Ox social club and HelloTalk loyalty program and allows authentic wallet connection to your HelloTalk chat application and social timeline to be used as verified profile photo. Mint your KOUPREY today to get more future benefits and perks unlocked by community roadmap activation</p>
        </div>
        <div className="hero-btn">
          <button>BUY ON OPEN SEA</button>
        </div>

      </div>


      {/* <div className="img-container">
                <img src={props.src} alt={props.name}></img>
            </div> */}
      <div className="section-center">
        {people.map((person, personIndex) => {
          const { id, image, name
          } = person;

          let position = 'nextSlide';
          if (personIndex === index) {
            position = 'activeSlide';
          }
          if (personIndex === index - 1 || (index === 0 && personIndex === people.length - 1)) {
            position = 'lastSlide';
          }

          return (
            <article className={position} key={id}>
              <img src={image} alt={name} className="person-img" />
            </article>
          );
        })}

      </div>
      <button className="main-btn ">

        <span>
          Mint Your OX  &nbsp; &nbsp; <FiArrowRight className="hero-icon" />

        </span>

      </button>

    </section>
    {/*  end of HERO  */}



    <Buy heading='
FAIR DISTRIBUTION' colorBuy="buy " text='We believe in fair price distribution. Each Jungle Ox costs 59 Polygon MATIC. There are no different price tiers and owning an Jungle Ox NFT will cost every one the same.' src='https://jungle-ox.vercel.app/_next/image?url=%2Fassests%2FDistribution-bg.png&w=3840&q=75' name='buy' class='buy-text' cname='single-buy' buyOX="btn-txt" />

    <Buy colorBuy="buy Buy" heading='BUY AN OX' text='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet' src='https://jungle-ox.vercel.app/_next/image?url=%2Fassests%2FBuyOnOx-bg.png&w=3840&q=75' class='buy-text OX' name='Buy' cname="single-buy Buy" ischeck={check} buyOX="btn-txt BUYOX" />

    <Spec src="https://jungle-ox.vercel.app/_next/image?url=%2Fassests%2Fspecs.png&w=1080&q=75" spc='spec' />
    <img src="https://jungle-ox.vercel.app/_next/image?url=%2Fassests%2Fdivider-up.png&w=2048&q=75" alt="line" className="line"></img>

    <Gallery glry="https://jungle-ox.vercel.app/_next/image?url=%2Fassests%2Fwellcome-detail-sec-bg.png&w=640&q=75" alt="error" />
    <RoadMap src="https://jungle-ox.vercel.app/_next/image?url=%2Fassests%2Froadmap.png&w=1080&q=75" name='black' />
    <Tools src="https://jungle-ox.vercel.app/_next/image?url=%2Fassests%2Fcommunity-bg.png&w=3840&q=75" name="tools" btn1="https://jungle-ox.vercel.app/_next/image?url=%2Fassests%2Fblue-bg.png&w=640&q=75" nbtn1="1btn" btn2="https://jungle-ox.vercel.app/_next/image?url=%2Fassests%2Fblack2-bg.png&w=640&q=75" nbtn2='2btn' />
    <Team src='https://jungle-ox.vercel.app/_next/image?url=%2Fassests%2Fteam-bg.png&w=3840&q=75' alt="mainTeam" team1="https://jungle-ox.vercel.app/_next/image?url=%2Fassests%2Fteam1.png&w=640&q=75" name1="cartoon" txt="text" />
    <Footer line="https://jungle-ox.vercel.app/_next/image?url=%2Fassests%2Fdivider-down.png&w=3840&q=75" alt="line" tube="https://jungle-ox.vercel.app/_next/image?url=%2Fassests%2Ficons%2Fyoutube.png&w=128&q=75" icon="icon" />
  </section>
}

export default App;