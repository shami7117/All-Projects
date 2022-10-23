import React from "react";
import RMap from "./map";



const RoadMap = (props) => {
    return <section className="road">
        <div className="road-info">
            <h1>ROADMAP ACTIVATIONS</h1>
            <p>We’ve set up some milestones for this project. Once we hit a target sell through percentage, we will begin to work on realizing the stated goal</p>

            {RMap.map((line) => {
                const { id, des, txt } = line;

                return <div key={id} className="single-line">
                    <div className="per"><p>{des}</p></div>
                    <div className="line-txt">{txt}</div>
                </div>
            })}

        </div>

        <div className="road-img">
            <img src={props.src} alt={props.name}></img>
        </div>

    </section>
}

export default RoadMap;