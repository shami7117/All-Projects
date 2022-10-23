import { Button } from "@mui/material";
import data from "./data";
import { useState, useEffect } from "react";
const Hero = (props) => {

    // start of slider
    const [people, setPeople] = useState(data);
    const [index, setIndex] = useState(0);


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
        }, 5000);
        return () => {
            clearInterval(slider);
        };
    }, [index]);

    // end of slider







    return <section className="hero">
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

        <div className="hero-image">

            <div className="section-center">
                {people.map((person, personIndex) => {
                    const { id, image, name } = person;

                    let position = 'nextSlide';
                    if (personIndex === index) {
                        position = 'activeSlide';
                    }
                    if (
                        personIndex === index - 1 ||
                        (index === 0 && personIndex === people.length - 1)
                    ) {
                        position = 'lastSlide';
                    }

                    return (
                        <article className={position} key={id}>
                            <img src={image} alt={name} className="person-img" />


                        </article>
                    );
                })}

            </div>
        </div>



    </section>
}

export default Hero;