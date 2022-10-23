import React from "react";

const Spec = (props) => {
    return <section className="spec">
        <div className="spec-info">
            <h2> THE SPECS</h2>
            <p>
                Each Jungle OX|KOUPREY NFT is unique and programmatically generated from over 120 possible traits, including horns, expressions, headwear, clothing, and more. All OX's are awesome, but some are rarer than others.
            </p>
            <p>
                The OX's are stored as ERC-721 tokens on the Polygon blockchain and hosted on IPFS. Purchasing an OX costs 59 MATIC.
            </p>
            <p>
                Once you mint an Ox, you can connect your HelloTalk social app to update your profile with verified proof of ownership
            </p>
        </div>
        <div className="spec-img">
            <img src={props.src} alt={props.spc}></img>
        </div>
    </section>

}

export default Spec;