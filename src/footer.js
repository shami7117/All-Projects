import React from "react";

const Footer = (props) => {
    return <section className="footer">
        <div className="footer-heading">
            <h1>NFT.</h1>
            <h4>GET ON THE LIST</h4>
        </div>

        <div className="form">
            <div className="input">
                <input type={props.txt} placeholder="Add Email" />
                <span>
                    <button type="submit">
                        Submit
                    </button>
                </span>
            </div>

            <div className="link">
                <a>Link</a>
                <a>Link</a>
                <a>Link</a>
            </div>
        </div>

        <div className="footer-line">
            <img src={props.line} alt={props.alt}></img>
        </div>

        <div className="last">
            <div className="you">
                <img src={props.tube} alt={props.icon}></img>
                <img src={props.tube} alt={props.icon}></img>
                <img src={props.tube} alt={props.icon}></img>
                <img src={props.tube} alt={props.icon}></img>
            </div>
            <div className="rights">
                <p>&copy; 2022 All right Reserved by <span>NFT.</span></p>
            </div>
        </div>
    </section>
}


export default Footer;