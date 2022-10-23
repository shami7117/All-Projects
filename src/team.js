import React from "react";

const Team = (props) => {
    return <section className="team">
        <img className="remove" src={props.src} alt={props.alt}></img>

        <div className="team-info">
            <div className="team-txt">
                <h1>THE TEAM</h1>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
            </div>

            <div className="team-img">
                <div className="single-team">
                    <img src={props.team1} alt={props.name1}></img>
                </div>
                <div className="single-team">
                    <img src={props.team1} alt={props.name1}></img>
                </div>
                <div className="single-team">
                    <img src={props.team1} alt={props.name1}></img>
                </div>
            </div>
            <div className="team-adress">
                <p>VERIFIED SMART CONTRACT ADDRESS:
                    &nbsp;
                    <span> 0xBC4CA0EdA7647A8aB7C2061</span></p>
            </div>

        </div>
    </section>
}


export default Team;