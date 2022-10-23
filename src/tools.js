import React from "react";


const Tools = (props) => {

    return <section className="tools">
        <img className="tools-img" src={props.src} alt={props.name}></img>
        <div className="tools-info">
            <div className="tools-txt">
                <h1>COMMUNITY TOOLS</h1>
                <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.
                </p>
            </div>
            <div className="tools-btn">
                <div className="single-btn">
                    <img src={props.btn1} alt={props.nbtn1}></img>
                    <div className="tool-btn-txt">
                        <p>NETEXP.IO</p>
                    </div>
                    <div className="single-btn">
                        <img src={props.btn2} alt={props.nbtn2}></img>
                        <div className="tool-btn-txt">
                            <p>RARITY TOOLS</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}

export default Tools;