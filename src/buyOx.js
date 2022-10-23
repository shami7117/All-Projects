import React from "react";
import Image from "./image";
import { useState } from "react";
import { color } from "@mui/system";


function Buy(props) {

    function applybtn() {
        if (props.ischeck) {
            return <button className="ox-btn">Buy AN Opensa</button>
        }
    }


    return <section className={props.colorBuy}>
        <div className={props.cname} >




            <img src={props.src} alt={props.name} className="buy-img" />

            <div className={props.class}>
                <div className={props.buyOX}>
                    <h2>{props.heading}</h2>
                    <p>
                        {props.text}
                    </p>
                </div>
                <div className="ox-container">
                    {
                        applybtn()
                    }
                </div>

            </div>

        </div>
    </section>
}
export default Buy;